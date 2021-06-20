/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  View,

  StatusBar,


  useColorScheme,

} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Router from './src/Router';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Router/>
      
    </View>
  );
};

export default App;
