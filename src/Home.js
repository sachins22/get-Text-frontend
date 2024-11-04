import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
import axios from 'axios';

export default function Home() {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');

  async function handleCreation() {
    try {
      await axios.post('http://192.168.43.125:2200/api/Stext', { text: inputText });
      navigation.navigate('LoginScrren', { inputText });
    } catch (error) {
      console.error("Error creating text:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your text:</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Type your text here..."
      />
      <Button title="Next" onPress={handleCreation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
});
