import {PropsWithChildren, PropsWithoutRef} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NewsItem} from '../../domain/entities/news';

type NewsProp = PropsWithChildren<{
  newsItem: NewsItem;
  isExpanded: boolean;
}>;

function NewsCard({newsItem, isExpanded}: NewsProp): React.JSX.Element {
  const newsImage = {uri: newsItem.imageUrl};
  if (isExpanded) {
    return (
      <View style={styles.newsCardExpanded}>
        <ImageBackground
          source={newsImage}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <Text style={styles.newsTitleExpanded}>{newsItem.title}</Text>
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View style={styles.newsCard}>
        <Image
          source={newsImage}
          resizeMode="cover"
          style={styles.thumbImage}
        />
        <Text style={styles.newsTitle} numberOfLines={3} ellipsizeMode="tail">
          {newsItem.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newsCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 150,
  },
  newsCardExpanded: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: 300,
    height: 200,
  },
  backgroundImage: {},
  thumbImage: {
    width: 120,
    borderRadius: 8,
  },
  newsTitle: {
    color: Colors.black,
    textAlignVertical: 'top',
    width: '68%',
    paddingLeft: 16,
  },
  newsTitleExpanded: {
    padding: 12,
    color: Colors.white,
    textAlignVertical: 'bottom',
    height: '100%',
  },
});

export default NewsCard;
