import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components";
import SearchView from "./views/search";
import HistoryView from "./views/history";
import DetailView from "./views/detail";
import FavoriteView from "./views/favorite";
import TabBar from "./components/tab-bar";
import Box from "./components/box";
import Theme from "./utils/theme";
import Button from "./components/button";
import { MoreHorizontal, Bookmark, ChevronLeft } from "./components/icons";
import Navigation from "./navigation";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
