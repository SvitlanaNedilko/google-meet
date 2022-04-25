import { useState, useEffect, useCallback } from 'react'
import { CardList } from './components/cardList/CardList'
import { BottomActions } from './components/bottomActions/BottomActions'
import { getUsers } from './servises/Api'

import { toast } from 'react-toastify'
import { AxiosResponse } from 'axios'
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material'

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
  const [users, setUsers] = useState<IUser[]>([])

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
        <CardList users={users} />
        <BottomActions summ={users.length} />
      </Box>
    </ThemeProvider>
  )
}

export default App
