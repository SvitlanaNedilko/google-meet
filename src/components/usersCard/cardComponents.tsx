import { Box, Card, styled } from '@mui/material'

export const CardBody = styled(Card)<{ talking: 0 | 1 }>`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;

  height: ${({ theme }) => `calc((100vh - 56px - 4 * ${theme.spacing(2)})/3)`};
  width: ${({ theme }) => `calc((100% - 3 * ${theme.spacing(2)})/4)`};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: ${({ talking, theme }) =>
    talking ? `3px solid ${theme.palette.info.main}` : 'none'};
`

export const IconContainer = styled(Box)<{ muted: 0 | 1 }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing(0.5)};
  right: ${({ theme }) => theme.spacing(0.5)};
  height: 20px;
  width: 20px;
  border-radius: 100px;
  background-color: ${({ muted, theme }) =>
    muted ? theme.palette.secondary.main : theme.palette.info.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-size: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`
