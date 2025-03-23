import {useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import NewsCard from '../../components/newsCard';
import {fetchMostViewedNewsList} from '../../state/home/homeSlice';
import {AppDispatch, RootState} from '../../state/store';
import AppText from '../../components/appText';

function HomeScreen(): React.JSX.Element {
  const homeState = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMostViewedNewsList());
  }, [dispatch]);

  if (homeState.isLoading) {
    return homeState.isLoading && <ActivityIndicator />;
  }

  if (homeState.error) {
    return <Text>ERTROROROROROR</Text>;
  }

  console.info(homeState.newsList);

  return (
    <View>
      <AppText style={styles.appHeaderLabel}>New York Times</AppText>
      <ScrollView>
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
            style={styles.ofInterestSectionScrollView}
            contentContainerStyle={styles.scrollViewItem}>
            {homeState.newsList.map((newsItem, index) => {
              return (
                <NewsCard
                  key={`2${index}`}
                  newsItem={newsItem}
                  isExpanded={false}
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
  appHeaderLabel: {
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    marginVertical: 15,
  },
  mostViewedSection: {
    marginTop: 10,
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
    fontSize: 16,
    paddingLeft: 20,
  },
});

export default HomeScreen;
