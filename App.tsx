import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import './gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from './src/presentation/state/store';

import AppNavigation from './src/presentation/navigation/navigation';
import {PaperProvider} from 'react-native-paper';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const safePadding = '5%';

  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />
        <AppNavigation />
      </PaperProvider>
    </Provider>
  );
}

export default App;
