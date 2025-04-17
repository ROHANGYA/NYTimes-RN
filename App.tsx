import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import AppNavigation from './src/presentation/navigation/navigation';
import {PaperProvider} from 'react-native-paper';
import {I18nextProvider} from 'react-i18next';
import {i18nLocale} from './src/lang/lang';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider>
      <I18nextProvider i18n={i18nLocale}>
        <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />
        <AppNavigation />
      </I18nextProvider>
    </PaperProvider>
  );
}

export default App;
