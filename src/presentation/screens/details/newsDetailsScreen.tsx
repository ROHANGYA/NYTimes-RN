import {Image, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/navigation';
import {NewsItem} from '../../../domain/entities/news';
import AppText from '../../components/appText';
import NewsAppBar from '../../components/newsAppBar';
import {Routes} from '../../navigation/routes';

type Props = NativeStackScreenProps<RootStackParamList, Routes.NEWS_DETAILS>;

function NewsDetailsScreen({route, navigation}: Props): React.JSX.Element {
  const newsItem = route.params as NewsItem;

  return (
    <View>
      <NewsAppBar title={'News Details'} backAction={navigation.goBack} />
      <Image
        source={{uri: newsItem.imageUrl}}
        resizeMode="cover"
        style={styles.imageHeader}
      />
      <AppText style={[styles.title, styles.textPaddings]}>
        {newsItem.title}
      </AppText>
      <AppText
        style={[styles.metadata, styles.textPaddings]}
        isSecondaryFont={true}>
        {newsItem.date}
      </AppText>
      <AppText style={[styles.description, styles.textPaddings]}>
        {newsItem.description}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  imageHeader: {
    width: '100%',
    height: 260,
  },
  textPaddings: {
    paddingHorizontal: 30,
  },
  title: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  metadata: {
    paddingTop: 5,
    fontSize: 12,
    color: '#777777',
  },
  description: {
    paddingTop: 10,
    fontSize: 14,
  },
});

export default NewsDetailsScreen;
