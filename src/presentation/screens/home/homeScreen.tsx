import React, {useEffect} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/routes';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NewsItem} from '../../../domain/entities/news';
import NewsAppBar from '../../components/newsAppBar';
import {useLocalization} from '../../../lang/lang';
import NewsSearchBar from '../../components/newsSearchBar';
import NoInternetBanner from '../../components/noInternetBanner';

import MostViewedSection from './mostViewedSection';
import {useMostViewedState} from '../../state/home/mostViewedState';
import {useOfInterestState} from '../../state/home/ofInterestState';
import OfInterestSection from './ofInterestSection';

function HomeScreen(): React.JSX.Element {
  const loadMostViewedSection = useMostViewedState(state => state.loadData);
  const loadOfinterestSection = useOfInterestState(state => state.loadData);
  const navigation = useNavigation();

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    loadMostViewedSection();
    loadOfinterestSection();
  }

  function onNewsClick(newsItem: NewsItem) {
    navigation.dispatch(StackActions.push(Routes.NewsDetails, newsItem));
  }

  function onSearchClick() {
    navigation.dispatch(StackActions.push(Routes.SearchNews));
  }

  return HomeScaffold(
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => loadData()} />
      }
      overScrollMode="always">
      <NoInternetBanner />
      <TouchableOpacity onPress={() => onSearchClick()}>
        <View pointerEvents="none">
          <NewsSearchBar onSubmit={function (_) {}} />
        </View>
      </TouchableOpacity>
      <MostViewedSection onNewsClick={onNewsClick} />
      <OfInterestSection onNewsClick={onNewsClick} />
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
});

export default HomeScreen;
