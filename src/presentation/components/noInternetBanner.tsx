import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Banner, Icon} from 'react-native-paper';
import AppText from './appText';
import {useNetInfo} from '@react-native-community/netinfo';
import {useLocalization} from '../../lang/lang';

function NoInternetBanner(): React.JSX.Element {
  const [visible, setVisible] = React.useState(false);
  const {type, isConnected} = useNetInfo();
  const strings = useLocalization();

  useEffect(() => {
    console.log(`Connection ${type.toString()} -- ${isConnected?.toString()}`);
    setVisible(isConnected === false ? true : false);
  }, [isConnected]);

  return (
    <Banner
      visible={visible}
      actions={[]}
      style={styles.banner}
      elevation={0}
      contentStyle={styles.bannerContent}
      icon={({size}) => <Icon source="network-strength-1-alert" size={size} />}>
      <AppText style={styles.text} isSecondaryFont={true}>
        {strings.youAreOfflinePleaseCheckConnection}
      </AppText>
    </Banner>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#e8e8e8',
  },
  bannerContent: {},
  text: {},
});

export default NoInternetBanner;
