import React from "react"
import Box from "./box"
import Text from "./text"
import { SimpleCardContainer, SimpleCardTitle } from "./simpleCardComponent"
import { FlatList } from "react-native"

function SearchHistoryList ({data}) {
    return(
        <FlatList
              style={{ padding: 16 }}
              data={data}
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
    )
}
export default SearchHistoryList