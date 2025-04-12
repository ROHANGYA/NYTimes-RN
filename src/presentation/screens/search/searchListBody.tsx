import {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import FailureEntity from '../../../domain/entities/failureEntity';
import GenericErrorScreen from '../../components/genericErrorScreen';
import GenericLoadingScreen from '../../components/genericLoadingScreen';

type SearchListBodyProps = PropsWithChildren<{
  isLoading: boolean;
  error: FailureEntity | null;
  onRetryClick: () => void;
}>;

function SearchListBody(props: SearchListBodyProps): React.ReactNode {
  if (props.isLoading) {
    return <GenericLoadingScreen />;
  }
  if (props.error) {
    return (
      <GenericErrorScreen
        failure={props.error}
        OnRetryClick={() => {
          props.onRetryClick();
        }}
      />
    );
  }
  return props.children;
}

const styles = StyleSheet.create({});

export default SearchListBody;
