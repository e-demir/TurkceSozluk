import styled from 'styled-components'
import {View} from 'react-native'
import {compose, color, size,borderRadius,flexbox, space } from 'styled-system'

const Box = styled(View)(
    compose(
    flexbox,
    space,
    color,
    size,
    borderRadius
    ));

export default Box