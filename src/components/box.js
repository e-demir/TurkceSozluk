import styled from 'styled-components'
import {View} from 'react-native'
import {compose, color, size } from 'styled-system'

const Box = styled(View)(compose(
    color,
    size
    ));

export default Box