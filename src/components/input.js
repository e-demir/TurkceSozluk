import styled from 'styled-components'
import { TextInput} from 'react-native'
import theme from "../utils/theme"
import {
  compose,
  color,
  size,
  typography,    
  space,
  borderRadius,
  shadow
} from 'styled-system'

const Input = styled(TextInput ).attrs(props => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || "#999" 
}))(
  compose(    
    space,
    color,
    size,
    typography,
    borderRadius,
    shadow
  )
)

export default Input
