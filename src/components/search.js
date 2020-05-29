import React from 'react'
import { Keyboard } from 'react-native'
import Box from './box'
import { Search, RotateCcw } from './icons'
import Input from './input'
import theme from '../utils/theme'
import Text from './text'
import Button from './button'

function SearchBox() {
  const [isFocused, setFocus] = React.useState(false)
  const [value, setValue] = React.useState('')

  const onCancel = () => {
    Keyboard.dismiss()
    setFocus(false)
  }

  const onFocus = () => {
    setFocus(true)
  }

  const onClear = () => {
    setValue('')
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9
          }}
          bg="white"
          color="textDark"
          borderWidth={1}
          borderColor={isFocused ? '#D1D1D1' : 'transparent'}
          height={56}
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor="textMedium"
          borderRadius="normal"
          pl={53}
          onFocus={onFocus}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <Button position="absolute" left={14} top={14}>
          <Search color={theme.colors.textMedium} />
        </Button>
        {value.length > 0 && (
          <Button onPress={onClear} position="absolute" right={14} top={14}>
            <RotateCcw color={theme.colors.textMedium} />
          </Button>
        )}
      </Box>
      {isFocused && (
        <Button px={15} height={56} onPress={onCancel}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  )
}

export default SearchBox
