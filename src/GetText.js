import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';



export default function GetText() {

  const [text, setText] = useState('');

  async function textHandle() {
    try {
      const response = await axios.get('http://192.168.43.125:2200/api/Gtext');
      setText(response.data.text); // Assuming the response contains text in the 'text' field
    } catch (error) {
      console.error("Error fetching text:", error);
      setText("Failed to fetch text");
    }
  }

  return (
    <View style={styles.container}>
      <Button title='handleText' onPress={textHandle} />
      <Text style={styles.text}>{text}</Text>
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
    color: '#333',
    marginTop: 20, // Added margin for better spacing
  },
});
