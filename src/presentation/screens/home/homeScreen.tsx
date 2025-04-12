import React, {useEffect} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import NewsCard from '../../components/newsCard';
import {
  fetchMostViewedNewsList,
  fetchTopStoriesNewsList,
} from '../../state/home/homeSlice';
import {AppDispatch, RootState} from '../../state/store';
import AppText from '../../components/appText';
import {StackActions, useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/routes';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import GenericLoadingScreen from '../../components/genericLoadingScreen';
import GenericErrorScreen from '../../components/genericErrorScreen';
import FailureEntity from '../../../domain/entities/failureEntity';
import {NewsItem} from '../../../domain/entities/news';
import NewsAppBar from '../../components/newsAppBar';
import {useLocalization} from '../../../lang/lang';
import NewsCateoriesChips from './newsCategoriesChips';
import NewsCategories from '../../../domain/entities/enums/newsCategories';
import NewsSearchBar from '../../components/newsSearchBar';

function HomeScreen(): React.JSX.Element {
  const homeState = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const strings = useLocalization();
  let currentNewsCategory = NewsCategories.arts;

  useEffect(() => {
    callApis();
  }, []);

  function callApis() {
    dispatch(fetchMostViewedNewsList());
    dispatch(fetchTopStoriesNewsList(currentNewsCategory));
  }

  function onNewsClick(newsItem: NewsItem) {
    navigation.dispatch(StackActions.push(Routes.NEWS_DETAILS, newsItem));
  }

  function onSearchClick() {
    navigation.dispatch(StackActions.push(Routes.SEARCH_NEWS));
  }

  function setNewsCategory(category: NewsCategories) {
    currentNewsCategory = category;
    dispatch(fetchTopStoriesNewsList(category));
  }

  if (homeState.error) {
    return HomeScaffold(
      <GenericErrorScreen
        failure={new FailureEntity(homeState.error)}
        OnRetryClick={() => {
          dispatch(fetchMostViewedNewsList());
        }}
      />,
    );
  }

  console.info(homeState.mostViewedNewsList);
  console.info(homeState.ofInterestNewsList);

  return HomeScaffold(
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={
            homeState.mostViewedNewsListIsLoading &&
            homeState.ofInterestNewsListIsLoading
          }
          onRefresh={() => callApis()}
        />
      }
      overScrollMode="always">
      <TouchableOpacity onPress={() => onSearchClick()}>
        <View pointerEvents="none">
          <NewsSearchBar onSubmit={function (_) {}} />
        </View>
      </TouchableOpacity>
      <View style={styles.mostViewedSection}>
        <AppText style={styles.sectionLabel} isSecondaryFont={true}>
          {strings.mostViewed}
        </AppText>
        {homeState.mostViewedNewsListIsLoading ? (
          <View style={styles.loadingContainer}>
            <GenericLoadingScreen />
          </View>
        ) : (
          <ScrollView
            horizontal={true}
            style={styles.mostViewedSectionScrollView}
            contentContainerStyle={styles.scrollViewItem}>
            {homeState.mostViewedNewsList.map((newsItem, index) => {
              return (
                <NewsCard
                  key={`1${index}`}
                  newsItem={newsItem}
                  isExpanded={true}
                  onClick={() => onNewsClick(newsItem)}
                />
              );
            })}
          </ScrollView>
        )}
      </View>
      <View style={styles.ofInterestSection}>
        <AppText style={styles.sectionLabel} isSecondaryFont={true}>
          {strings.ofInterest}
        </AppText>

        <View>
          <NewsCateoriesChips
            initialSelection={currentNewsCategory}
            onCategorySelected={setNewsCategory}
          />
        </View>
        {homeState.ofInterestNewsListIsLoading ? (
          <View style={styles.loadingContainer}>
            <GenericLoadingScreen />
          </View>
        ) : (
          <ScrollView
            horizontal={false}
            scrollEnabled={false}
            style={styles.ofInterestSectionScrollView}
            contentContainerStyle={styles.scrollViewItem}>
            {homeState.ofInterestNewsList.map((newsItem, index) => {
              return (
                <NewsCard
                  key={`2${index}`}
                  newsItem={newsItem}
                  isExpanded={false}
                  onClick={() => onNewsClick(newsItem)}
                />
              );
            })}
            {homeState.ofInterestNewsList.length === 0 ? (
              <AppText style={styles.emptyPlaceholderText}>
                {strings.noResultsFound}
              </AppText>
            ) : null}
          </ScrollView>
        )}
      </View>
    </ScrollView>,
  );
}

function HomeScaffold(body: React.JSX.Element) {
  const strings = useLocalization();
  return (
    <View style={styles.mainPage}>
      <NewsAppBar
        title={strings.newYorkTimes}
        action={{icon: 'cog', onClick: () => {}}}
      />
      {body}
    </View>
  );
}

const styles = StyleSheet.create({
  mainPage: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  mostViewedSection: {
    marginTop: 14,
  },
  mostViewedSectionScrollView: {
    padding: 20,
    gap: 10,
    width: '100%',
  },
  scrollViewItem: {
    gap: 18,
  },
  ofInterestSection: {
    marginTop: 20,
    marginBottom: 30,
  },
  ofInterestSectionScrollView: {
    padding: 20,
    marginBottom: 40,
    gap: 10,
    width: '100%',
    height: '100%',
  },
  sectionLabel: {
    fontSize: 18,
    paddingLeft: 20,
    color: Colors.black,
  },
  emptyPlaceholderText: {
    fontSize: 14,
    textAlign: 'center',
    padding: 20,
    color: Colors.black,
  },
  loadingContainer: {
    height: 240,
  },
});

export default HomeScreen;
