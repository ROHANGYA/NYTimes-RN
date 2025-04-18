import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

type NewsAppBarAction = {
  icon: string;
  onClick: () => void;
};

type NewsAppBarType = {
  title: string;
  backAction?: () => void;
  action?: NewsAppBarAction;
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
      {props.action && (
        <Appbar.Action
          icon={props.action.icon}
          onPress={props.action.onClick}
        />
      )}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    elevation: 6,
    height: 'auto',
  },
  title: {
    fontFamily: 'times',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default NewsAppBar;
