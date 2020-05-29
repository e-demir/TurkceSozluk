import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchView from "./views/search"
import HistoryView from "./views/history"
import DetailView from "./views/detail"
import FavoriteView from "./views/favorite"
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './components/tab-bar';
import Box from "./components/box"

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function SearchStack() {
  return (
      <HomeStack.Navigator>
      <HomeStack.Screen name="Arama" component={SearchView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (    
     <Box flex={1} as= {SafeAreaView}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Arama" tabBar={props => <TabBar {...props} />}>        
        <Tab.Screen name="Geçmiş" component={HistoryView} />
        <Tab.Screen name="Arama" component={SearchStack} />        
        <Tab.Screen name="Favoriler" component={FavoriteView} />
      </Tab.Navigator>                  
      </NavigationContainer>
      </Box>    
  );
}

export default App;
