import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import AppNavigation from './src/presentation/navigation/navigation';
import {PaperProvider} from 'react-native-paper';
import {I18nextProvider} from 'react-i18next';
import {i18nLocale, useLocalization} from './src/lang/lang';
import di from './src/di/appModule';
import GenericLoadingScreen from './src/presentation/components/genericLoadingScreen';
import AppText from './src/presentation/components/appText';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [loading, setLoading] = useState(true);
  const strings = useLocalization();

  useEffect(() => {
    const init = async () => {
      try {
        await di.localDb.initialiseDatabase();
      } catch (error) {
        console.error('Init Error', error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  function renderBody() {
    if (loading) {
      return (
        <View style={styles.mainPage}>
          <View style={styles.loadingContainer}>
            <AppText style={styles.title}>{strings.newYorkTimes}</AppText>
            <GenericLoadingScreen />
          </View>
        </View>
      );
    } else {
      return <AppNavigation />;
    }
  }

  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />
      <I18nextProvider i18n={i18nLocale}>{renderBody()}</I18nextProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  mainPage: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'times',
    fontWeight: 'bold',
    fontSize: 29,
    alignSelf: 'center',
    textAlignVertical: 'center',
    margin: 16,
  },
});

export default App;
