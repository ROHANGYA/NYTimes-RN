import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

type NewsAppBarType = {
  title: string;
  backAction?: () => void;
};

function NewsAppBar(props: NewsAppBarType): React.JSX.Element {
  return (
    <Appbar.Header
      mode="center-aligned"
      style={styles.container}
      elevated={true}>
      {props.backAction ? (
        <Appbar.BackAction onPress={props.backAction} />
      ) : null}
      <Appbar.Content title={props.title} titleStyle={styles.title} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    elevation: 6,
  },
  title: {
    fontFamily: 'times',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default NewsAppBar;
