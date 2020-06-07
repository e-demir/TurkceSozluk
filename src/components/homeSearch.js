import React from "react"
import Box from "./box"
import { Animated, ImageBackground } from "react-native"
import { Logo } from "./icons"
import bg from '../assets/bg.jpg'
import Search from '../components/search'



function HomeSearch({onSearchFocus, isSearchFocused,}) {

    const [animatedHeight] = React.useState(new Animated.Value(285))

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
      }, [isSearchFocused])

    return(
        <Box as={Animated.View}
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
          <Search onChangeFocus={(status) => onSearchFocus(status)} />
        </Box>
      </Box>
    )
}

export default HomeSearch