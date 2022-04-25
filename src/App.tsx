import './App.css'
import { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import { UserCard } from './components/usersCard/UserCard'
import { Menu } from './components/menu/Menu'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import MicIcon from '@mui/icons-material/Mic'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined'
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import CallEndIcon from '@mui/icons-material/CallEnd'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import {
  Badge,
  Box,
  Button,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { getRandomCat, getUsers } from './servises/Api'
import { Axios, AxiosResponse } from 'axios'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3c4043',
      contrastText: '#fff;',
    },
    secondary: {
      main: '#212121',
    },
    info: {
      main: '#42a5f5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
        sizeMedium: {
          minWidth: '40px',
          minHeight: '40px',
          padding: 0,
        },
        sizeSmall: {
          minWidth: '20px',
          padding: 0,
        },
        textSizeMedium: {
          color: '#fff;',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          top: -4,
          right: -4,
        },
      },
    },
  },
})

function App() {
  const [spacing, setSpacing] = useState(2)
  const [users, setUsers] = useState<IUser[]>([])
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const getAllUsers = useCallback(() => {
    getUsers()
      .then((response: AxiosResponse<{ data: { users: IUser[] } }>) => {
        setUsers(response.data.data.users)
      })
      .catch(() => {
        toast.error('Something went wrong, refresh the page or try again later')
      })
  }, [])

  useEffect(() => {
    getAllUsers()
  }, [getAllUsers])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: '#202124',
          minHeight: '100vh',
          maxHeight: '100vh',
          padding: 2,
        }}
      >
        <Stack
          direction="row"
          gap={2}
          component="ul"
          m={0}
          p={0}
          flexWrap="wrap"
        >
          {users?.length > 0 &&
            users.map((user, index) => (
              <UserCard
                user={user}
                key={user.id}
                muted={index === 5}
                talking={index === 3}
              />
            ))}
        </Stack>

        <Grid
          sx={{
            flexGrow: 1,
          }}
          container
          mt={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography
              sx={{
                color: 'lightgrey',
              }}
            >
              Team meeting
            </Typography>
          </Grid>
          <Grid item justifyContent="center" columnGap="12px">
            <Stack direction="row" gap={1.5}>
              <Button variant="contained" size="medium" color="primary">
                <MicIcon />
              </Button>

              <Button variant="contained" size="medium" color="primary">
                <DeleteIcon />
              </Button>
              <Button variant="contained" size="medium" color="primary">
                <VideocamOutlinedIcon />
              </Button>
              <Button variant="contained" size="medium" color="primary">
                <PanToolOutlinedIcon />
              </Button>
              <Button variant="contained" size="medium" color="primary">
                <PresentToAllOutlinedIcon />
              </Button>
              <Button
                onClick={handleClick}
                variant="contained"
                size="medium"
                color="primary"
              >
                <MoreVertOutlinedIcon />
              </Button>
              <Button
                variant="contained"
                size="medium"
                color="error"
                sx={{ paddingX: 3, borderRadius: 100 }}
              >
                <CallEndIcon />
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose} />
            </Stack>
          </Grid>

          <Grid item justifyContent="center">
            <Button size="medium" color="primary">
              <InfoOutlinedIcon fontSize="medium" />
            </Button>
            <Button size="medium" color="primary">
              <Badge badgeContent={users.length} color="primary">
                <GroupOutlinedIcon fontSize="medium" />
              </Badge>
            </Button>
            <Button size="medium" color="primary">
              <ChatOutlinedIcon fontSize="medium" />
            </Button>
            <Button size="medium" color="primary">
              <PresentToAllOutlinedIcon fontSize="medium" />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default App
