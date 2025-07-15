import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.verde};
  color: ${cores.branco};

  font-size: ${({ size }) => (size === 'small' ? '10px' : '16px')};
  font-weight: bold;
  padding: ${({ size }) => (size === 'small' ? '4px 6px' : '8px 16px')};
  border-radius: 8px;
  display: inline-block;
`
