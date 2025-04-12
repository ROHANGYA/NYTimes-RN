import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';

type NewsSearchBarProps = {
  autoFocus?: boolean;
  onSubmit: (searchInput: string) => void;
};

function NewsSearchBar({
  autoFocus = false,
  onSubmit,
}: NewsSearchBarProps): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Searchbar
      placeholder="Search for an article here ..."
      onChangeText={setSearchQuery}
      value={searchQuery}
      onSubmitEditing={event => {
        onSubmit(searchQuery);
      }}
      onClearIconPress={event => {
        onSubmit('');
      }}
      theme={{colors: {primary: '#000000'}}}
      style={styles.searchBar}
      autoFocus={autoFocus}
      inputStyle={styles.searchBarInput}
    />
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 14,
    backgroundColor: '#e8e8e8',
    height: 40,
  },
  searchBarInput: {
    textAlignVertical: 'center',
    alignSelf: 'center',
  },
});

export default NewsSearchBar;
