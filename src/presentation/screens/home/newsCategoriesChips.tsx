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
      showsHorizontalScrollIndicator={false}>
      <View style={styles.paddingHorizontal} />
      {newsCategories.map((category, index) => (
        <Chip
          onPress={() => onChipPressed(index)}
          selected={selectedChips[index]}
          showSelectedCheck={true}
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
    width: 'auto',

    paddingTop: 10,
  },
  chip: {
    marginEnd: 10,
    backgroundColor: '#e8e8e8',
  },
  paddingHorizontal: {
    width: 20,
  },
});

export default NewsCateoriesChips;
