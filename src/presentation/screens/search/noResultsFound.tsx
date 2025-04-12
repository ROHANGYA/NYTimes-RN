import {StyleSheet, View} from 'react-native';
import AppText from '../../components/appText';
import {Icon} from 'react-native-paper';
import {useLocalization} from '../../../lang/lang';

function NoResultsFound(): React.JSX.Element {
  const strings = useLocalization();
  return (
    <View style={styles.container}>
      <Icon source={'newspaper-remove'} size={60} />
      <AppText style={styles.noResultText}>{strings.noResultsFound}</AppText>
      <AppText style={styles.noResultText}>
        {strings.pleaseRefineYourSearch}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
  noResultText: {
    fontSize: 14,
    paddingHorizontal: 20,
  },
});

export default NoResultsFound;
