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
import Button from "./components/button"
import {MoreHorizontal, Bookmark, ChevronLeft} from './components/icons'

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
      name="Arama"
      component={SearchView}
      options={() => {
        return{
         headerShown:false
        }
      }}
       />
      <HomeStack.Screen
      name="Detail"
      component={DetailView}
      options={({route,navigation})=>{
        return {
          title:(route.params && route.params.title) || "Boş",
          headerStyle:{
            backgroundColor : Theme.colors.softRed,
            shadowColor : "transparent"
          },
          headerLeft: () => (
            <Button
            onPress = {() => {navigation.navigate("Arama")}}
            height="100%"
            px={20}
            >
             <ChevronLeft color={Theme.colors.textDark} />
            </Button>
          ),
          headerRight: () => (
            <Button
            onPress = {() => {navigation.navigate("Arama")}}
            height="100%"
            px={20}
            >
             <MoreHorizontal color={Theme.colors.textDark} />
            </Button>
          )
        }
      }}
       />
    </HomeStack.Navigator>
  )
}

function TabNavigator() {
  return (
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
  )
}

export default TabNavigator
