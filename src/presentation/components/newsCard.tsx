import {PropsWithChildren, PropsWithoutRef} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NewsItem} from '../../domain/entities/news';
import LinearGradient from 'react-native-linear-gradient';
import AppText from './appText';

type NewsProp = PropsWithChildren<{
  newsItem: NewsItem;
  isExpanded: boolean;
  onClick: () => void;
}>;

function NewsCard({
  newsItem,
  isExpanded,
  onClick,
}: NewsProp): React.JSX.Element {
  const newsImage = {uri: newsItem.imageUrl};
  if (isExpanded) {
    return (
      <Pressable onPress={onClick}>
        <View style={styles.newsCardExpanded}>
          <ImageBackground
            source={newsImage}
            resizeMode="cover"
            style={styles.backgroundImage}>
            <LinearGradient
              colors={[
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.5)',
                '#000000',
              ]}>
              <AppText style={styles.newsTitleExpanded}>
                {newsItem.title}
              </AppText>
            </LinearGradient>
          </ImageBackground>
        </View>
      </Pressable>
    );
  } else {
    return (
      <View style={styles.newsCard}>
        <Image
          source={newsImage}
          resizeMode="cover"
          style={styles.thumbImage}
        />
        <View style={styles.newsCol}>
          <AppText
            style={styles.newsTitle}
            numberOfLines={3}
            ellipsizeMode="tail">
            {newsItem.title}
          </AppText>
          <AppText style={styles.newsDate} isSecondaryFont={true}>
            {newsItem.date}
          </AppText>
        </View>
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
    width: '100%',
    paddingLeft: 16,
  },
  newsTitleExpanded: {
    padding: 12,
    color: Colors.white,
    textAlignVertical: 'bottom',
    height: '100%',
  },
  newsCol: {
    flexDirection: 'column',
    width: '68%',
  },
  newsDate: {
    fontSize: 12,
    paddingLeft: 16,
    paddingVertical: 10,
    color: '#777777',
  },
});

export default NewsCard;
