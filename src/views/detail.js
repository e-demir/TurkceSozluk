import React from "react";
import {SafeAreaView,Text, StatusBar} from "react-native"
import { useFocusEffect } from '@react-navigation/native';
import Box from "../components/box"

export default function DetailView() {

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');      
    }, [])
  );

  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>Detay</Text>
    </Box>
  );
  }

