import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  onCityChange: (city: string) => void;
};

export default function Searchbar({onCityChange}: Props) {
  const [text, setText] = useState('');

  function handleCityChange() {
    if (!text) {
      return;
    }

    onCityChange(text);

    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Search for a city..."
        onSubmitEditing={handleCityChange}
        testID="searchCity"
      />

      <TouchableOpacity
        testID="submitButton"
        style={styles.submitButton}
        onPress={handleCityChange}
        disabled={!text}>
        <Text>GO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    paddingTop: 12,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
