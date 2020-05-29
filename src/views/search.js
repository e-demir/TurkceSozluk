import React from 'react'
import { Button } from 'react-native'
import { Logo } from '../components/icons'
import Search from '../components/search'
import Box from '../components/box'

function SearchView({ navigation }) {
  return (
    <Box>
      <Button
        title="Detaya git"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box py={20}>
        <Logo color="blue" />
      </Box>
      <Box p={10}>
        <Search mt={4} />
      </Box>
    </Box>
  )
}

export default SearchView
