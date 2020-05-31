import React from "react";
import Text from "./text"
import Button from "./button"

export function SimpleCardTitle({ children }) {
    return (
        <Text
            fontSize={16}
            fontWeight="bold"            
        >
            {children}</Text>
    )
}

export function SimpleCardContainer({ children, ...props }) {
    return (
        <Button
            p={16}           
            bg="white"
            borderRadius="normal"
            justifyContent="flex-start"
            {...props}
        >
            {children}
        </Button>
    )
}

