import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { Box, Button, Typography, useTheme } from '@mui/material'
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined'
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded'
import { getRandomCat } from '../../servises/Api'
import { toast } from 'react-toastify'
import { AxiosResponse } from 'axios'
import {
  NoEncryptionGmailerrorredRounded,
  NoEncryptionGmailerrorredTwoTone,
} from '@mui/icons-material'

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
        console.log(response.data.data.photo)

        setCat(response.data.data.photo)
      })
      .catch(() => {
        toast.error('Something went wrong, refresh the page or try again later')
      })
  }

  return (
    <>
      <Card
        onClick={handleClick}
        sx={{
          maxWidth: 345,
          position: 'relative',
          display: 'flex',

          justifyContent: 'center',
          alignItems: 'center',

          height: `calc((100vh - 56px - 4 * ${theme.spacing(2)})/3)`,
          width: `calc((100% - 3 * ${theme.spacing(2)})/4)`,
          backgroundColor: theme.palette.primary.main,
          border: talking ? `3px solid ${theme.palette.info.main}` : 'none',
          // boxShadow:
        }}
        component="li"
      >
        {(talking || muted) && (
          <Box
            sx={{
              position: 'absolute',
              top: 4,
              right: 4,
              height: '20px',
              width: '20px',
              borderRadius: 100,
              backgroundColor: muted ? '#202124' : theme.palette.info.main,
              color: '#fff;',
              fontSize: '15px',

              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {talking && <GraphicEqRoundedIcon fontSize="inherit" />}
            {muted && <MicOffOutlinedIcon fontSize="inherit" />}
          </Box>
        )}

        <Typography
          sx={{
            position: 'absolute',
            bottom: 2,
            left: 4,
            color: 'lightgrey',
          }}
        >
          {user.firstName} {user.lastName}
        </Typography>
        <CardMedia
          component="img"
          height={muted ? '76px' : '100%'}
          image={cat ? cat : user.photo}
          alt="cats"
          sx={{
            borderRadius: muted ? 100 : 0,
            width: muted ? '76px' : '100%',
          }}
        />
      </Card>
    </>
  )
}
