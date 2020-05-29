import { View } from 'react-native';
import React from 'react';
import Button from './button';
import { Search, Bookmark, RotateCcw } from './icons';
import Box from './box';
import theme from '../utils/theme';
 
function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // eslint-disable-next-line operator-linebreak
        const label =
          // eslint-disable-next-line no-nested-ternary
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Arama' ? (
          <Box p={15} bg="white" borderRadius="full" mt={-15}>
            <Button
              borderRadius="full"
              key={label}
              onPress={onPress}
              size={56}
              bg="red"
            >
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={8}
            flexDirection="column"
            height={50}
            flex={1}
            onPress={onPress}
          >
            {label === 'Geçmiş' && <RotateCcw color={theme.colors.textLight} />}
            {label === 'Favoriler' && (
              <Bookmark color={theme.colors.textLight} />
            )}
            <Box size={3} bg={isFocused ? 'red' : 'white'} mt={8} />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
