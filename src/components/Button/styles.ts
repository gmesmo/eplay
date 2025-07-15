import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 2px solid ${cores.branco};
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
