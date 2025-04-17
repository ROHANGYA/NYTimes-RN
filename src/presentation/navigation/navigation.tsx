import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './routes';
import NewsDetailsScreen from '../screens/details/newsDetailsScreen';
import HomeScreen from '../screens/home/homeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewsItem} from '../../domain/entities/news';
import SearchScreen from '../screens/search/searchScreen';

export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.NewsDetails]: NewsItem | undefined;
  [Routes.SearchNews]: undefined;
};

export default function AppNavigation(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Home}>
        <Stack.Screen
          name={Routes.Home}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.NewsDetails}
          component={NewsDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.SearchNews}
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
