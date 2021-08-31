import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import { name as appName } from './app.json'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native';

import styles from './src/styles'
import store from './src/store/index'
import StackScreen from './src/stacks/StackScreen'

export default function App() {
 
  return (
      <Provider store = { store }>
        <PaperProvider>
          <NavigationContainer>
            <SafeAreaView style={styles.main}>
              <StackScreen />
            </SafeAreaView>
          </NavigationContainer> 
        </PaperProvider>
      </Provider>
  );
}


AppRegistry.registerComponent(appName, () => App)