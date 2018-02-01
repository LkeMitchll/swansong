import styled from 'react-emotion'
import { ds } from '../shared/design_system'

const Loading = styled.span`
  font-family: ${ds.get('type.fonts.base')};
  font-size: ${ds.fs('base')};
  font-weight: ${ds.get('type.fontWeight.base')};
  margin-right: ${ds.get('spacing.s')};
`

export default Loading
