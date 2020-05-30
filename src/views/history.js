import React from "react";
import {StatusBar,Text} from "react-native"
import { useFocusEffect } from '@react-navigation/native';
import Box from "../components/box";




export default function HistoryView() {

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');      
    }, [])
  );

    return (
      <Box as={SafeAreaView} flex={1}>
        <Text>Geçmiş</Text>
      </Box>
    );
  }

