import {FlatList, StyleSheet, View} from 'react-native';
import NewsSearchBar from '../../components/newsSearchBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from '../../navigation/routes';
import {RootStackParamList} from '../../navigation/navigation';

import {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NewsCard from '../../components/newsCard';
import {searchNewsList} from '../../state/search/searchSlice';
import {AppDispatch, RootState} from '../../state/store';
import NoResultsFound from './noResultsFound';
import SearchListFooter from './searchListFooter';
import {StackActions} from '@react-navigation/routers';
import SearchListBody from './searchListBody';
import NoInternetBanner from '../../components/noInternetBanner';

type NavProps = NativeStackScreenProps<RootStackParamList, Routes.SEARCH_NEWS>;

function SearchScreen({route, navigation}: NavProps): React.JSX.Element {
  const searchState = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();

  const searchQuery = useRef<string>('');
  const page = useRef<number>(0);

  useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    dispatch(
      searchNewsList({
        searchQuery: searchQuery.current,
        pageNumber: page.current,
      }),
    );
  }

  console.info(searchState.data);

  return (
    <SafeAreaView style={styles.container}>
      <NoInternetBanner />
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          iconColor={'#000000'}
          size={29}
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.searchBar}>
          <NewsSearchBar
            autoFocus={true}
            onSubmit={(searchInput: string) => {
              searchQuery.current = searchInput;
              page.current = 0;
              callApi();
            }}
          />
        </View>
      </View>
      <SearchListBody
        isLoading={searchState.firstLoading}
        error={searchState.firstPageError}
        onRetryClick={callApi}>
        <FlatList
          data={searchState.data}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={() => {
            page.current = 0;
            callApi();
          }}
          refreshing={false}
          style={styles.mainList}
          renderItem={({item}) => (
            <NewsCard
              newsItem={item}
              isExpanded={false}
              onClick={() => {
                navigation.dispatch(
                  StackActions.push(Routes.NEWS_DETAILS, item),
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
              isLastPage={searchState.isLastPage}
              nextPageError={searchState.nextPageError}
              onRetryClick={callApi}
            />
          }
          onEndReachedThreshold={0.1}
          onEndReached={(info: {distanceFromEnd: number}) => {
            if (info.distanceFromEnd < 0) return;
            if (
              !searchState.nextPageLoadng &&
              !searchState.nextPageError &&
              !searchState.isLastPage
            ) {
              page.current = page.current + 1;
              callApi();
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
