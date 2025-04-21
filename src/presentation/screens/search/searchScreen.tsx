import {FlatList, StyleSheet, View} from 'react-native';
import NewsSearchBar from '../../components/newsSearchBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from '../../navigation/routes';
import {RootStackParamList} from '../../navigation/navigation';
import {StackActions} from '@react-navigation/native';
import {useEffect} from 'react';
import NoInternetBanner from '../../components/noInternetBanner';
import NewsCard from '../../components/newsCard';
import NoResultsFound from './noResultsFound';
import SearchListBody from './searchListBody';
import SearchListFooter from './searchListFooter';
import {useSearchState} from '../../state/search/searchState';

type NavProps = NativeStackScreenProps<RootStackParamList, Routes.SearchNews>;

function SearchScreen({route, navigation}: NavProps): React.JSX.Element {
  const state = useSearchState();

  useEffect(() => {
    state.loadCurrentPage();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NoInternetBanner />
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          iconColor={'#000000'}
          size={29}
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.searchBar}>
          <NewsSearchBar
            autoFocus={true}
            onSubmit={(searchInput: string) => {
              state.updateSearchQuery(searchInput);
            }}
          />
        </View>
      </View>
      <SearchListBody
        isLoading={state.firstLoading}
        error={state.firstPageError}
        onRetryClick={state.refreshScreen}>
        <FlatList
          data={state.data}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={() => {
            state.loadNextPage();
          }}
          refreshing={false}
          style={styles.mainList}
          renderItem={({item}) => (
            <NewsCard
              newsItem={item}
              isExpanded={false}
              onClick={() => {
                navigation.dispatch(
                  StackActions.push(Routes.NewsDetails, item),
                );
              }}
            />
          )}
          ItemSeparatorComponent={props => (
            <View style={styles.itemSeparator} />
          )}
          ListEmptyComponent={<NoResultsFound />}
          ListFooterComponent={
            <SearchListFooter
              isLastPage={state.isLastPage}
              nextPageError={state.nextPageError}
              onRetryClick={state.refreshNextPage}
            />
          }
          onEndReachedThreshold={0.1}
          onEndReached={(info: {distanceFromEnd: number}) => {
            if (info.distanceFromEnd < 0) return;
            if (
              !state.nextPageLoadng &&
              !state.nextPageError &&
              !state.isLastPage
            ) {
              state.loadNextPage();
            }
          }}
        />
      </SearchListBody>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
  },
  backButton: {
    alignSelf: 'flex-end',
    marginBottom: 12,
  },
  searchBar: {
    flexGrow: 1,
  },
  mainList: {
    paddingHorizontal: 24,
  },
  itemSeparator: {
    height: 20,
  },
});

export default SearchScreen;
