import React from "react";
import {View,Button} from "react-native"
import Box from '../components/box'
import { Bookmark } from '../components/icons'


function SearchView({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
        title="Detaya git"
        onPress={() => navigation.navigate('Detail')}
      />            
      </View>
    );
  }

  export default SearchView;
