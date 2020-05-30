import React from 'react'
import { Text, ImageBackground, StatusBar, Animated, View } from 'react-native'
import { Logo } from '../components/icons'
import Search from '../components/search'
import Box from '../components/box'
import bg from '../assets/bg.jpg'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Animated:']);

function SearchView({}) {
  const [isSearchFocused, setSearchFocused] = React.useState(false)
  const [animatedHeight] = React.useState(new Animated.Value(285))

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
      <Box flex={1} bg="white" pt={isSearchFocused ? 0 : 26}>
        {isSearchFocused ? (
 <Box p={30} flex={1}>
 <Text>Öneriler</Text>
</Box>
        ) :  (<Box p={30} flex={1}>
        <Text>History</Text>
      </Box>)}

      </Box>
    </Box>
  )
}

export default SearchView
