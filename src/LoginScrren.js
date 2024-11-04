import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

export default function LoginScreen() {
  const [gtext, setGtext] = useState('');

async function textHandle() {
  try {
    const response = await fetch('http://192.168.43.125:2200/api/Gtext');
    const result = await response.json();
    console.log(result); // Check the structure of your data
    // Access the nested text field
    setGtext(result.data.text);
  } catch (error) {
    console.error("Error fetching text:", error);
    setGtext("Failed to fetch text");
  }
}

  return (
    <View style={styles.container}>
      <Button title='handleText' onPress={textHandle} />
      <Text style={styles.text}>{gtext}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginTop: 20,
  },
});
