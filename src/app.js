import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from 'styled-components'
import SearchView from './views/search'
import HistoryView from './views/history'
import DetailView from './views/detail'
import FavoriteView from './views/favorite'
import TabBar from './components/tab-bar'
import Box from './components/box'
import Theme from './utils/theme'

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()

function SearchStack() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Arama" component={SearchView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  )
}

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Arama"
            tabBar={(props) => <TabBar {...props} />}
          >
            <Tab.Screen name="Geçmiş" component={HistoryView} />
            <Tab.Screen name="Arama" component={SearchStack} />
            <Tab.Screen name="Favoriler" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
