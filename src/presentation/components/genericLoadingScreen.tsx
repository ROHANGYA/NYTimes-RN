import {ActivityIndicator, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function GenericLoadingScreen(): React.JSX.Element {
  return <ActivityIndicator style={styles.loading} size={'large'} />;
}

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },
});

export default GenericLoadingScreen;
