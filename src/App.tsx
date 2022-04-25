import { useState, useEffect, useCallback } from 'react'
import {
  Box,
  createTheme,
  CssBaseline,
  styled,
  ThemeProvider,
} from '@mui/material'
import { toast } from 'react-toastify'
import { AxiosResponse } from 'axios'

import { CardList } from './components/cardList/CardList'
import { BottomActions } from './components/bottomActions/BottomActions'
import { getUsers } from './servises/Api'

import theme from './theme/theme'

const appTheme = createTheme(theme)

const AppContainer = styled(Box)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  min-height: 100vh;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing(2)};
`

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
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppContainer>
        <CardList users={users} />
        <BottomActions summ={users.length} />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
