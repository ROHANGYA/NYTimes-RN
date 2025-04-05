import {ScrollView, StyleSheet, View} from 'react-native';

import {Chip} from 'react-native-paper';
import NewsCategories from '../../../domain/entities/enums/newsCategories';
import {PropsWithChildren, useState} from 'react';

type NewsCategoryChipsProps = PropsWithChildren<{
  initialSelection: NewsCategories;
  onCategorySelected: (category: NewsCategories) => void;
}>;

function NewsCateoriesChips({
  initialSelection,
  onCategorySelected,
}: NewsCategoryChipsProps): React.JSX.Element {
  const newsCategories = Object.entries(NewsCategories);
  const [selectedChipIndex, setSelectedChipIndex] = useState(
    newsCategories.findIndex(category => category[1] === initialSelection),
  );

  function onChipPressed(index: number) {
    setSelectedChipIndex(index);
    onCategorySelected(newsCategories[index][1]);
  }

  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewItemGap}>
      <View style={styles.paddingHorizontal} />
      {newsCategories.map((category, index) => {
        const isSelected = index === selectedChipIndex;
        return (
          <Chip
            key={index}
            onPress={() => (isSelected ? null : onChipPressed(index))}
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
