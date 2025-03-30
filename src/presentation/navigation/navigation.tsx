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
