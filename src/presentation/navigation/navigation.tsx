import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createStaticNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import {Routes} from './routes';
import NewsDetailsScreen from '../screens/details/newsDetailsScreen';
import HomeScreen from '../screens/home/homeScreen';
import {View} from 'react-native';
import {Text} from '@react-navigation/elements';

export default function AppNavigation(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.HOME}>
        <Stack.Screen
          name={Routes.HOME}
          component={HomeScreen}
          options={{
            title: 'New York Times',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'times',
            },
          }}
        />
        <Stack.Screen
          name={Routes.NEWS_DETAILS}
          component={NewsDetailsScreen}
          options={{
            // headerTitle: props => (
            //   <View>
            //     <Text>sefsefsef</Text>
            //   </View>
            // ),

            title: 'Article Details',
            headerTitleStyle: {
              fontFamily: 'times',
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
