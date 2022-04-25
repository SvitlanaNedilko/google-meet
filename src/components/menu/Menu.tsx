import * as React from 'react'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import MuiMenu from '@mui/material/Menu'

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

import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined'
import InterestsIcon from '@mui/icons-material/Interests'
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue'
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined'
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined'

interface IMenuProps {
  anchorEl: HTMLElement | null
  open: boolean
  onClose: () => void
}

export const Menu: React.FC<IMenuProps> = ({ anchorEl, open, onClose }) => {
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
        sx={{ marginBottom: '8px' }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <BorderColorOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Дошка для конференцій"
              secondary="Відкрити файл jam"
            />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <RadioButtonCheckedOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Зіписувати зустріч</ListItemText>
          </MenuItem>
          <Divider />

          <MenuItem>
            <ListItemIcon>
              <DashboardTwoToneIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Змінити макет</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FullscreenTwoToneIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Повноекранний режим</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AutoAwesomeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Застосувати візуальні ефекти</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ClosedCaptionOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Увімкнути субтитри</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <PhoneForwardedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              Використовувати телефон для передачі звуку
            </ListItemText>
          </MenuItem>
          <Divider />

          <MenuItem>
            <ListItemIcon>
              <SmsFailedOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Повідомити про проблему</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ReportOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Повідомити про порушення</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <YoutubeSearchedForIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Вирішення проблем і довідка</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Налаштування</ListItemText>
          </MenuItem>
        </MenuList>
      </MuiMenu>
    </>
  )
}
