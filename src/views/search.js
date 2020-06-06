import React from 'react'
import { ImageBackground, StatusBar, Animated, FlatList, ActivityIndicator } from 'react-native'
import { Logo } from '../components/icons'
import Search from '../components/search'
import Box from '../components/box'
import bg from '../assets/bg.jpg'
import Text from "../components/text"
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'
import { YellowBox } from 'react-native';
import { CardContainer, CardTitle, CardSummary } from '../components/card'
import { SimpleCardContainer } from "../components/simpleCardComponent"
import { SimpleCardTitle } from "../components/simpleCardComponent"

YellowBox.ignoreWarnings(['Animated:']);

function SearchView({ navigation }) {
  const [isSearchFocused, setSearchFocused] = React.useState(false)
  const [animatedHeight] = React.useState(new Animated.Value(285))
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

  React.useEffect(() => {
    if (isSearchFocused) {
      Animated.timing(animatedHeight, {
        toValue: 52 + 32,
        duration: 320,
      }).start()
    } else {
      Animated.timing(animatedHeight, {
        toValue: 285,
        duration: 320,
      }).start()
    }
  }, [isSearchFocused, animatedHeight])

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
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={animatedHeight}
      >
        {!isSearchFocused && (
          <Box
            as={ImageBackground}
            source={bg}
            style={{ width: '100%', height: '100%' }}
          >
            {/*  logo */}
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo color="white" width={120} />
            </Box>
          </Box>
        )}

        {/* search */}
        <Box
          p={16}
          width="100%"
          position="absolute"
          left={0}
          bottom={isSearchFocused ? 0 : -42}
        >
          <Search onChangeFocus={(status) => setSearchFocused(status)} />
        </Box>
      </Box>

      {/* content */}
      <Box flex={1} bg="softRed" pt={isSearchFocused ? 0 : 26}>
        {isSearchFocused ? (
          <Box flex={1}>
            <FlatList
              style={{ padding: 16 }}
              data={DATA}
              keyExtractor={item => item.id}
              ListHeaderComponent={
                <Text color="textLight" mb={10}>
                  SON ARAMALAR</Text>}
              renderItem={({ item }) => (
                <Box py={6}>
                  <SimpleCardContainer>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardContainer>
                </Box>
              )}
            />
          </Box>

        ) : (
            <Box py={40} px={16} flex={1}>
              <Box>
                <Text color="textLight">Bir kelime</Text>

                <CardContainer
                  mt={10}
                  onPress={() => navigation.navigate("Detail", { title: "on para" })}
                >
                  {homeData ? (
                    <>
                      <CardTitle>{homeData?.kelime[0].madde}</CardTitle>
                      <CardSummary>{homeData?.kelime[0].anlam}</CardSummary>
                    </>

                  ):(
                    <ActivityIndicator/>
                  )}
                </CardContainer>
              </Box>

              <Box mt={40}>
                <Text color="textLight">Bir deyim - Atasözü</Text>

                <CardContainer
                  mt={10}
                  onPress={() => navigation.navigate("Detail", { title: "Siyem siyem ağlamak" })}
                >
                  
                  {homeData ? (
                    <>
                      <CardTitle>{homeData?.atasoz[0].madde}</CardTitle>
                      <CardSummary>{homeData?.atasoz[0].anlam}</CardSummary>
                    </>

                  ):(
                    <ActivityIndicator/>
                  )}
                </CardContainer>
              </Box>
            </Box>
          )
        }
      </Box>
    </Box>
  )
}

export default SearchView
