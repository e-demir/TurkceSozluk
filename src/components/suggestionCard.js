import React from  "react"
import Box from "./box"
import Text from "./text"
import {CardContainer,CardSummary,CardTitle} from "./card"
import {ActivityIndicator} from "react-native"
import LoaderText from "./loaderText"

function SuggestionCard ({title, onPress, data, ...props})  {
    return(
        <Box {...props}>
                <Text color="textLight">{title}</Text>

                <CardContainer
                  mt={10}
                  onPress={onPress}
                >
                  {data ? (
                    <>
                      <CardTitle>{data.madde}</CardTitle>
                      <CardSummary>{data.anlam}</CardSummary>
                    </>
                  ):(
                    <Box>
                      <LoaderText />
                      <LoaderText width={180} mt={7} />   
                    </Box>
                  )}
                </CardContainer>
              </Box>
    )
}

export default SuggestionCard