import {useEffect} from 'react';
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

function HomeScreen(): React.JSX.Element {
  const homeState = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchMostViewedNewsList());
  }, [dispatch]);

  if (homeState.isLoading) {
    return homeState.isLoading && <GenericLoadingScreen />;
  }

  if (homeState.error) {
    return (
      <GenericErrorScreen
        failure={new FailureEntity(homeState.error)}
        OnRetryClick={() => {
          dispatch(fetchMostViewedNewsList());
        }}
      />
    );
  }

  console.info(homeState.newsList);

  return (
    <View style={styles.mainPage}>
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
            Most Viewed
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
                  onClick={() =>
                    navigation.dispatch(StackActions.push(Routes.NEWS_DETAILS))
                  }
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.ofInterestSection}>
          <AppText style={styles.sectionLabel} isSecondaryFont={true}>
            Of Interest
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
                  onClick={() =>
                    navigation.dispatch(StackActions.push(Routes.NEWS_DETAILS))
                  }
                />
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
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
