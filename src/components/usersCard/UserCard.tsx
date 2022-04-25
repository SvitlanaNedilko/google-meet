import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { AxiosResponse } from 'axios'

import { Typography, useTheme, CardMedia } from '@mui/material'

import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined'
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded'

import { CardBody, IconContainer } from './cardComponents'
import { getRandomCat } from '../../servises/Api'

interface IUserCardProps {
  user: IUser
  muted: boolean
  talking: boolean
}

export const UserCard: React.FC<IUserCardProps> = ({
  user,
  muted,
  talking,
}) => {
  const [cat, setCat] = useState<string>('')
  const theme = useTheme()

  const handleClick = () => {
    getRandomCat()
      .then((response: AxiosResponse<{ data: ICat }>) => {
        setCat(response.data.data.photo)
      })
      .catch(() => {
        toast.error('Something went wrong, refresh the page or try again later')
      })
  }

  return (
    <CardBody onClick={handleClick} talking={talking ? 1 : 0}>
      {(talking || muted) && (
        <IconContainer muted={muted ? 1 : 0}>
          {talking && <GraphicEqRoundedIcon fontSize="inherit" />}
          {muted && <MicOffOutlinedIcon fontSize="inherit" />}
        </IconContainer>
      )}

      <Typography
        sx={{
          position: 'absolute',
          bottom: 2,
          left: 4,
        }}
        color="primary.contrastText"
      >
        {user.firstName} {user.lastName}
      </Typography>
      <CardMedia
        component="img"
        height={muted ? '76px' : '100%'}
        image={cat ? cat : user.photo}
        alt={cat ? 'cat' : user.lastName}
        sx={{
          borderRadius: muted ? 100 : 0,
          width: muted ? '76px' : '100%',
        }}
      />
    </CardBody>
  )
}
