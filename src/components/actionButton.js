import React from "react"
import Button from "./button"
import Text from "./text"

function ActionButton({ children, ...props }) {
    return (
        <Button 
        style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2 ,
            },
            shadowOpacity: 0.16,
            shadowRadius: 4,            
          }}
        bg="white"
        px={8}
        borderRadius="full"
        minWidth="actionButton"
        height="actionButton" 
        {...props}
        > 
            {children}
        </Button>
    )
}

export function ActionButtonTitle ({children, ...props}){
    return(
        <Text {...props} mx ={8} color="textLight" fontWeight="bold">{children}</Text>
    )
}

export default ActionButton


