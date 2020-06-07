import React from 'react'
import { StatusBar, Animated } from 'react-native'
import Box from '../components/box'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect} from '@react-navigation/native'
import { YellowBox } from 'react-native';
import SuggestionCard from "../components/suggestionCard"
import SearchHistoryList from '../components/search-history-list'
import HomeSearch from "../components/homeSearch"

YellowBox.ignoreWarnings(['Animated:']);

function SearchView({ navigation }) {
  
  const [isSearchFocused, setSearchFocused] = React.useState(false)
  const [homeData, setHomeData] = React.useState(null)

  const getHomeData = async () => {
    const response = await fetch("https://sozluk.gov.tr/icerik")
    const data = await response.json()
    setHomeData(data)
  }

  React.useEffect(() => {
    getHomeData()
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocused ? 'dark-content' : 'light-content')
    }, [isSearchFocused])
  )

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <Box
      as={SafeAreaView}
      bg={isSearchFocused ? 'softRed' : '#C01A34'}
      flex={1}
    >
      {/* Header  */}
     <HomeSearch onSearchFocus={setSearchFocused} isSearchFocused={isSearchFocused}/>
      {/* content */}
      <Box flex={1} bg="softRed" pt={isSearchFocused ? 0 : 26}>
        {isSearchFocused ? (
          <Box flex={1}>
            <SearchHistoryList data={DATA}/>
          </Box>

        ) : (
            <Box py={40} px={16} flex={1}>
              <SuggestionCard 
                    title="Bir Deyim - Atasözü"
                    onPress={() => navigation.navigate("Detail", {keyword:homeData?.kelime[0].madde})}
                    data={homeData?.kelime[0]}                    
                    />                          
                    <SuggestionCard 
                    title="Bir Deyim - Atasözü"
                    onPress={() => navigation.navigate("Detail", {keyword:homeData?.atasoz[0].madde})}
                    data={homeData?.atasoz[0]}
                    mt={40}
                    />              
            </Box>
          )
        }
      </Box>
    </Box>
  )
}

export default SearchView
