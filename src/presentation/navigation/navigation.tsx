import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './routes';
import NewsDetailsScreen from '../screens/details/newsDetailsScreen';
import HomeScreen from '../screens/home/homeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewsItem} from '../../domain/entities/news';

export type RootStackParamList = {
  Home: undefined;
  NewsDetails: NewsItem | undefined;
};

export default function AppNavigation(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.HOME}>
        <Stack.Screen
          name={Routes.HOME}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.NEWS_DETAILS}
          component={NewsDetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
