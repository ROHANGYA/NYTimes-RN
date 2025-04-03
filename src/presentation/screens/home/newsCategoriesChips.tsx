import {ScrollView, StyleSheet, View} from 'react-native';

import {Chip} from 'react-native-paper';
import NewsCategories from '../../../domain/entities/enums/newsCategories';
import {useState} from 'react';

function NewsCateoriesChips(): React.JSX.Element {
  const newsCategories = Object.entries(NewsCategories);
  let [selectedChips, setSelectedChip] = useState(
    newsCategories.map(category => false),
  );

  function onChipPressed(index: number) {
    const chipState = selectedChips.map((_, chipIndex) => chipIndex === index);
    setSelectedChip(chipState);
  }

  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewItemGap}>
      <View style={styles.paddingHorizontal} />
      {newsCategories.map((category, index) => (
        <Chip
          key={index}
          onPress={() => onChipPressed(index)}
          selected={selectedChips[index]}
          showSelectedCheck={true}
          textStyle={styles.chipText}
          compact={true}
          style={styles.chip}>
          {category[1]}
        </Chip>
      ))}
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
