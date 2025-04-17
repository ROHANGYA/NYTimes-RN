import {ScrollView, StyleSheet, View} from 'react-native';
import AppText from '../../components/appText';
import NewsCard from '../../components/newsCard';
import {NewsItem} from '../../../domain/entities/news';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useLocalization} from '../../../lang/lang';
import {
  Loaded,
  Loading,
  LoadingFailed,
  useOfInterestState,
} from '../../state/home/ofInterestState';
import GenericLoadingScreen from '../../components/genericLoadingScreen';
import GenericErrorScreen from '../../components/genericErrorScreen';
import NewsCateoriesChips from './newsCategoriesChips';

type OfInterestSectionProps = {
  onNewsClick: (newsItem: NewsItem) => void;
};

function OfInterestSection(props: OfInterestSectionProps): React.JSX.Element {
  const strings = useLocalization();
  const state = useOfInterestState();

  if (state.current instanceof Loading) {
    return scaffold(
      <View style={styles.loadingContainer}>
        <GenericLoadingScreen />
      </View>,
    );
  }

  if (state.current instanceof LoadingFailed) {
    const error = (state.current as LoadingFailed).error;
    return scaffold(
      <View style={styles.errorContainer}>
        <GenericErrorScreen
          failure={error}
          OnRetryClick={() => state.loadData()}
        />
      </View>,
    );
  }

  if (state.current instanceof Loaded) {
    const data = (state.current as Loaded).data;
    return scaffold(
      <View>
        <ScrollView
          horizontal={false}
          scrollEnabled={false}
          style={styles.ofInterestSectionScrollView}
          contentContainerStyle={styles.scrollViewItem}>
          {data.map((newsItem, index) => {
            return (
              <NewsCard
                key={`2${index}`}
                newsItem={newsItem}
                isExpanded={false}
                onClick={() => props.onNewsClick(newsItem)}
              />
            );
          })}
          {data.length === 0 ? (
            <AppText style={styles.emptyPlaceholderText}>
              {strings.noResultsFound}
            </AppText>
          ) : null}
        </ScrollView>
      </View>,
    );
  }

  return scaffold(<View />);
}

function scaffold(body: React.JSX.Element) {
  const strings = useLocalization();
  return (
    <View style={styles.ofInterestSection}>
      <AppText style={styles.sectionLabel} isSecondaryFont={true}>
        {strings.ofInterest}
      </AppText>
      <View>
        <NewsCateoriesChips />
      </View>
      {body}
    </View>
  );
}

const styles = StyleSheet.create({
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
  errorContainer: {
    height: 300,
  },
});

export default OfInterestSection;
