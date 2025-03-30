import React from 'react';
import {useColorScheme} from 'react-native';
import './gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from './src/presentation/state/store';

import AppNavigation from './src/presentation/navigation/navigation';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const safePadding = '5%';

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
