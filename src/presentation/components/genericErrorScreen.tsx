import {Image, StyleSheet, View} from 'react-native';
import FailureEntity from '../../domain/entities/failureEntity';
import AppText from './appText';
import React, {PropsWithChildren} from 'react';
import AssetUtil from '../../utils/assetUtils';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from '@react-navigation/elements';
import getErrorMessage from '../../utils/networkExceptions';
import {useLocalization} from '../../lang/lang';

type genericErrorScreenProps = PropsWithChildren<{
  failure: FailureEntity;
  OnRetryClick: () => void;
}>;

function GenericErrorScreen({
  failure,
  OnRetryClick,
}: genericErrorScreenProps): React.JSX.Element {
  const strings = useLocalization();
  console.log(failure);
  return (
    <View style={styles.container}>
      <Image source={AssetUtil.warning} style={styles.icon} />
      <AppText style={styles.Title} isSecondaryFont={true}>
        {strings.somethingWentWrong}
      </AppText>
      <AppText style={styles.details} isSecondaryFont={true}>
        {failure.errorDescription ??
          getErrorMessage(failure.underlyingException)}
      </AppText>
      <Button
        onPress={OnRetryClick}
        color="#FFFFFF"
        variant="filled"
        style={styles.button}>
        {strings.retry}
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
    paddingHorizontal: 26,
    paddingBottom: 160,
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
    textAlign: 'justify',
  },
  button: {
    margin: 28,
    color: '#000000',
    backgroundColor: Colors.grey,
    outlineColor: '#000000',
    outlineWidth: 1,
    borderRadius: 10,
  },
});
export default GenericErrorScreen;
