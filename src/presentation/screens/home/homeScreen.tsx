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
    <View style={styles.mostViewedSection}>
      <ScrollView horizontal={false} style={styles.scrollView}>
        {homeState.newsList.map((newsItem, index) => {
          return <NewsCard key={index} newsItem={newsItem} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mostViewedSection: {
    marginTop: 20,
    marginBottom: 30,
  },
  scrollView: {
    padding: 20,
  },
});

export default HomeScreen;
