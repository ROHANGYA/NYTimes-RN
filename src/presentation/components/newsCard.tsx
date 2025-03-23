import {PropsWithChildren, PropsWithoutRef} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NewsItem} from '../../domain/entities/news';

type NewsProp = PropsWithChildren<{
  newsItem: NewsItem;
}>;

function NewsCard({newsItem}: NewsProp): React.JSX.Element {
  return (
    <View style={styles.newsCard}>
      <Text>{newsItem.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  newsCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 12,
    marginRight: 14,
    marginBottom: 14,
  },
});

export default NewsCard;
