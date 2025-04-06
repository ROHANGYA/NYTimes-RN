import {ScrollView, StyleSheet, View} from 'react-native';
import NewsSearchBar from '../../components/newsSearchBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from '../../navigation/routes';
import {RootStackParamList} from '../../navigation/navigation';

type NavProps = NativeStackScreenProps<RootStackParamList, Routes.SEARCH_NEWS>;

function SearchScreen({route, navigation}: NavProps): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <IconButton
            icon="arrow-left"
            iconColor={'#000000'}
            size={29}
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.searchBar}>
            <NewsSearchBar autoFocus={true} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
  },
  backButton: {
    alignSelf: 'flex-end',
    marginBottom: 12,
  },
  searchBar: {
    flexGrow: 1,
  },
});

export default SearchScreen;
