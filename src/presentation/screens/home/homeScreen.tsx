import React, {useEffect} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import NewsCard from '../../components/newsCard';
import {fetchMostViewedNewsList} from '../../state/home/homeSlice';
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

function HomeScreen(): React.JSX.Element {
  const homeState = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const strings = useLocalization();

  useEffect(() => {
    dispatch(fetchMostViewedNewsList());
  }, [dispatch]);

  function onNewsClick(newsItem: NewsItem) {
    navigation.dispatch(StackActions.push(Routes.NEWS_DETAILS, newsItem));
  }

  if (homeState.isLoading) {
    return HomeScaffold(homeState.isLoading && <GenericLoadingScreen />);
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

  console.info(homeState.newsList);
  return HomeScaffold(
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={homeState.isLoading}
          onRefresh={() => dispatch(fetchMostViewedNewsList())}
        />
      }
      overScrollMode="always">
      <View style={styles.mostViewedSection}>
        <AppText style={styles.sectionLabel} isSecondaryFont={true}>
          {strings.mostViewed}
        </AppText>
        <ScrollView
          horizontal={true}
          style={styles.mostViewedSectionScrollView}
          contentContainerStyle={styles.scrollViewItem}>
          {homeState.newsList.map((newsItem, index) => {
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
      </View>
      <View style={styles.ofInterestSection}>
        <AppText style={styles.sectionLabel} isSecondaryFont={true}>
          {strings.ofInterest}
        </AppText>
        <ScrollView
          horizontal={false}
          scrollEnabled={false}
          style={styles.ofInterestSectionScrollView}
          contentContainerStyle={styles.scrollViewItem}>
          {homeState.newsList.map((newsItem, index) => {
            return (
              <NewsCard
                key={`2${index}`}
                newsItem={newsItem}
                isExpanded={false}
                onClick={() => onNewsClick(newsItem)}
              />
            );
          })}
        </ScrollView>
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
});

export default HomeScreen;
