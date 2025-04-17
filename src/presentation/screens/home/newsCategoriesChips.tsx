import {ScrollView, StyleSheet, View} from 'react-native';

import {Chip} from 'react-native-paper';
import NewsCategories from '../../../domain/entities/enums/newsCategories';
import {PropsWithChildren} from 'react';
import {useOfInterestState} from '../../state/home/ofInterestState';

type NewsCategoryChipsProps = PropsWithChildren<{}>;

function NewsCateoriesChips(): React.JSX.Element {
  const newsCategoryOptions = Object.entries(NewsCategories);
  const currentSelection = useOfInterestState(state => state.newsCategory);
  const loadData = useOfInterestState(state => state.loadData);

  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewItemGap}>
      <View style={styles.paddingHorizontal} />
      {newsCategoryOptions.map((category, index) => {
        const isSelected = category[1] === currentSelection;
        return (
          <Chip
            key={index}
            onPress={() => (isSelected ? null : loadData(category[1]))}
            selected={isSelected}
            showSelectedCheck={true}
            textStyle={styles.chipText}
            compact={false}
            style={styles.chip}>
            {category[1]}
          </Chip>
        );
      })}
      <View style={styles.paddingHorizontal} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  chip: {
    backgroundColor: '#e8e8e8',
  },
  paddingHorizontal: {
    paddingHorizontal: 6,
  },
  scrollViewItemGap: {
    gap: 10,
  },
  chipText: {
    margin: 0,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default NewsCateoriesChips;
