import {ActivityIndicator, StyleSheet, View} from 'react-native';
import FailureEntity from '../../../domain/entities/failureEntity';
import AppText from '../../components/appText';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'react-native-paper';
import {useLocalization} from '../../../lang/lang';
type SearchListFooterProps = {
  isLastPage: boolean;
  nextPageError: FailureEntity | null;
  onRetryClick: () => void;
};
function SearchListFooter(props: SearchListFooterProps): React.JSX.Element {
  const strings = useLocalization();
  if (props.isLastPage) {
    return <View style={styles.itemSeparator} />;
  }
  if (props.nextPageError) {
    return (
      <View style={styles.errorContainer}>
        <AppText style={styles.noResultText}>
          {strings.errorLoadingNextPage}
        </AppText>
        <Button
          onPress={props.onRetryClick}
          style={styles.button}
          textColor="#000000">
          {strings.retry}
        </Button>
      </View>
    );
  }

  return (
    <ActivityIndicator
      size={40}
      color={'#000000'}
      style={styles.loadingFooter}
    />
  );
}

const styles = StyleSheet.create({
  noResultText: {
    fontSize: 14,
    paddingHorizontal: 20,
  },
  itemSeparator: {
    height: 20,
  },
  loadingFooter: {
    height: 100,
    justifyContent: 'space-evenly',
  },
  errorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

    alignItems: 'center',
  },
  button: {
    margin: 28,
    color: '#000000',
    backgroundColor: Colors.grey,
    outlineColor: '#000000',
    outlineWidth: 1,
    borderRadius: 10,
    flex: 1,
  },
});

export default SearchListFooter;
