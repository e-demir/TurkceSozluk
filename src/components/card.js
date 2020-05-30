import React from "react";
import Box from "./box";
import Text from "./text"
import Button from "./button"

export function CardTitle ({children}) {
    return(
    <Text
    fontSize={18}
    fontWeight="bold"
    >
        {children}</Text>
    )
}

export function CardContainer ({children, ...props}) {
    return(
    <Button        
    py={16}  
    px={12}
    bg= "white"
    borderRadius= "normal"
    {...props}
    >
        <Box flex={1} borderLeftWidth={3} borderLeftColor="light" pl={12}>
            {children}
        </Box>                
    </Button>
    )
}

export function CardSummary ({children}) {
    return(
    <Text
    fontSize={14}    
    color="textMedium"
    mt={8}
    >
        {children}</Text>
    )
}
