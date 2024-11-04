import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

// import file
import Home from '@/src/Home';
import GetText from '@/src/GetText';
import LoginScrren from '@/src/LoginScrren';

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginScrren" component={LoginScrren} />
        <Stack.Screen name="GetText " component={GetText} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
