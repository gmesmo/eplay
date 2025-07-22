import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : cores.branco};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : 'transparent')};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: ${cores.branco};
  padding: 8px 16px;
  text-decoration: none;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${cores.branco};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: ${cores.branco};
  padding: 8px 16px;
  text-decoration: none;
`
