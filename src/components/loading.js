import styled from 'react-emotion'
import { ds } from '../shared/design_system'

const Loading = styled.span`
  font-family: ${ds.get('type.fonts.alt')};
  font-size: ${ds.fs('base')};
  font-weight: ${ds.fs('base')};
  margin-right: ${ds.get('spacing.s')};
  height: 70px;

  @media (max-width: ${ds.bp('s')}) {
    font-size: ${ds.fs('s')};
    height: auto;
  }
`

export default Loading
