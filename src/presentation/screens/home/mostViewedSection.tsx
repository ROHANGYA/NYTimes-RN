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
  useMostViewedState,
} from '../../state/home/mostViewedState';
import GenericLoadingScreen from '../../components/genericLoadingScreen';
import GenericErrorScreen from '../../components/genericErrorScreen';

type MostViewedSectionProps = {
  onNewsClick: (newsItem: NewsItem) => void;
};

function MostViewedSection(props: MostViewedSectionProps): React.JSX.Element {
  const strings = useLocalization();
  const state = useMostViewedState();

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
      <ScrollView
        horizontal={true}
        style={styles.mostViewedSectionScrollView}
        contentContainerStyle={styles.scrollViewItem}>
        {data.map((newsItem, index) => {
          return (
            <NewsCard
              key={`1${index}`}
              newsItem={newsItem}
              isExpanded={true}
              onClick={() => props.onNewsClick(newsItem)}
            />
          );
        })}
      </ScrollView>,
    );
  }

  return <View />;
}

function scaffold(body: React.JSX.Element) {
  const strings = useLocalization();
  return (
    <View style={styles.mostViewedSection}>
      <AppText style={styles.sectionLabel} isSecondaryFont={true}>
        {strings.mostViewed}
      </AppText>
      {body}
    </View>
  );
}

const styles = StyleSheet.create({
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

export default MostViewedSection;
