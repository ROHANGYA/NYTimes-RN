import {Image, StyleSheet, View} from 'react-native';
import FailureEntity from '../../domain/entities/failureEntity';
import AppText from './appText';
import React, {PropsWithChildren} from 'react';
import AssetUtil from '../../utils/assetUtils';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from '@react-navigation/elements';

type genericErrorScreenProps = PropsWithChildren<{
  failure: FailureEntity;
  OnRetryClick: () => void;
}>;

function GenericErrorScreen({
  failure,
  OnRetryClick,
}: genericErrorScreenProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={AssetUtil.warning} style={styles.icon} />
      <AppText style={styles.Title} isSecondaryFont={true}>
        Something Went Wrong !
      </AppText>
      <AppText style={styles.details} isSecondaryFont={true}>
        {failure.errorDescription && 'Ass'}
      </AppText>
      <Button onPress={OnRetryClick} color="#f194ff" style={styles.button}>
        Retry
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  icon: {
    width: 50,
    height: 50,
  },
  Title: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
  details: {
    margin: 4,
  },
  button: {
    margin: 28,
    color: Colors.grey,
    backgroundColor: Colors.grey,
  },
});
export default GenericErrorScreen;
