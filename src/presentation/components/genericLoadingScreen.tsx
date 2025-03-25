import {
  ActivityIndicator,
  ActivityIndicatorBase,
  StyleSheet,
} from 'react-native';

function GenericLoadingScreen(): React.JSX.Element {
  return <ActivityIndicator style={styles.loading} size={'large'} />;
}

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '100%',
  },
});

export default GenericLoadingScreen;
