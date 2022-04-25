import Divider from '@mui/material/Divider'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import MuiMenu from '@mui/material/Menu'

import ListItemIcon from '@mui/material/ListItemIcon'
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone'
import FullscreenTwoToneIcon from '@mui/icons-material/FullscreenTwoTone'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ClosedCaptionOutlinedIcon from '@mui/icons-material/ClosedCaptionOutlined'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded'
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined'
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor'
import { Alert, Snackbar } from '@mui/material'
import { useState } from 'react'

interface IMenuProps {
  anchorEl: HTMLElement | null
  open: boolean
  onClose: () => void
}

export const Menu: React.FC<IMenuProps> = ({ anchorEl, open, onClose }) => {
  const [message, setMessage] = useState('')

  const onClick = (text: string) => {
    setMessage(text)
  }

  const handleClose = (event: any, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setMessage('')
  }

  return (
    <>
      <MuiMenu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuList>
          <MenuItem onClick={() => onClick('Дошка для конференцій')}>
            <ListItemIcon>
              <BorderColorOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Дошка для конференцій"
              secondary="Відкрити файл jam"
            />
          </MenuItem>
          <MenuItem onClick={() => onClick('Зіписувати зустріч')}>
            <ListItemIcon>
              <RadioButtonCheckedOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Зіписувати зустріч</ListItemText>
          </MenuItem>
          <Divider />

          <MenuItem onClick={() => onClick('Змінити макет')}>
            <ListItemIcon>
              <DashboardTwoToneIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Змінити макет</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => onClick('Повноекранний режим')}>
            <ListItemIcon>
              <FullscreenTwoToneIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Повноекранний режим</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => onClick('Застосувати візуальні ефекти')}>
            <ListItemIcon>
              <AutoAwesomeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Застосувати візуальні ефекти</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => onClick('Увімкнути субтитри')}>
            <ListItemIcon>
              <ClosedCaptionOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Увімкнути субтитри</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() =>
              onClick('Використовувати телефон для передачі звуку')
            }
          >
            <ListItemIcon>
              <PhoneForwardedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              Використовувати телефон для передачі звуку
            </ListItemText>
          </MenuItem>
          <Divider />

          <MenuItem onClick={() => onClick('Повідомити про проблему')}>
            <ListItemIcon>
              <SmsFailedOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Повідомити про проблему</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => onClick('Повідомити про порушення')}>
            <ListItemIcon>
              <ReportOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Повідомити про порушення</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => onClick('Вирішення проблем і довідка')}>
            <ListItemIcon>
              <YoutubeSearchedForIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Вирішення проблем і довідка</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => onClick('Налаштування')}>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Налаштування</ListItemText>
          </MenuItem>
        </MenuList>
      </MuiMenu>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        color="warning"
        open={!!message}
        onClose={handleClose}
        message={message}
        autoHideDuration={4000}
      >
        <Alert onClose={handleClose} severity="info">
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}
