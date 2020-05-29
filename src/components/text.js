import styled from 'styled-components'
import { Text as T } from 'react-native'
import {
  compose,
  color,
  size,
  typography,    
  space
} from 'styled-system'

const Text = styled(T)(compose(    
    space,
    color,
    size,
    typography))

export default Text
