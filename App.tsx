/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PaperProvider, MD3LightTheme,
  MD3DarkTheme, DefaultTheme, Text, adaptNavigationTheme } from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import {
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
};



const Tab = createMaterialBottomTabNavigator();



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <PaperProvider theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
      <NavigationContainer theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={() => <View><Text>Home</Text></View>} />
          <Tab.Screen name="Settings" component={() => <View><Text>Settings</Text></View>} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
