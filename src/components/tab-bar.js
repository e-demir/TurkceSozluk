import { View, Text, TouchableOpacity } from 'react-native';
import React from "react"
import Button from "./button"
import { Search, Bookmark, RotateCcw } from "./icons"

function TabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
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
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return label === 'Arama' ? (
                    <Button flex={1} onPress={onPress}>
                        <Search/>                      
                    </Button>
                ) : (
                    <Button height={50} flex={1} onPress={onPress}>
                    {label === 'Geçmiş' && <RotateCcw/>}
                    {label === 'Favoriler' && <Bookmark/>}
                    </Button>)
            })}
        </View>
    );
}

export default TabBar