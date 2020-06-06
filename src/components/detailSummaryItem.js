import React from "react"
import Box from "./box"
import Text from "./text"

export function DetailSummaryItemContainer({ children, border, ...props }) {
    return (
        <Box bg="white" px={20} py={20} {...props} position="relative">
            {border && (
                <Box
                position="absolute"
                left={12}
                right={12}
                top={0}
                height={1}
                bg="light"                                
                />
            )}
            <Box flexDirection="row">
                <Text 
                    ml={-14} 
                    mr={8}
                    color="textLight">
                        1</Text>
                <Text
                    color="main"
                    fontWeight="bold"
                    fontStyle="italic">
                    İSİM</Text>
            </Box>
            <Box>
                <Box mt={8}>{children}</Box>
            </Box>
        </Box>
    )
}

export function DetailSummaryItemMainText({ children, ...props }) {
    return (
        <Box {...props}>
            <Text fontWeight="600">{children}</Text>
        </Box>
    )
}

export function DetailSummaryItemSecondaryText({ children, ...props }) {
    return (
        <Box {...props}>
            <Text
                ml={10}
                mt={12}
                color="textLight"
                fontWeight="500">{
                    children}</Text>
        </Box>
    )
}