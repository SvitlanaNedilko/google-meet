import { useState } from 'react'
import { Badge, Button, Grid, Stack, Typography } from '@mui/material'

import MicIcon from '@mui/icons-material/Mic'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined'
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue'
import CallEndIcon from '@mui/icons-material/CallEnd'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined'

import { Menu } from '../menu/Menu'

interface IBottomActions {
  summ: number
}

export const BottomActions: React.FC<IBottomActions> = ({ summ }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Grid
      container
      mt={2}
      flex={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <Typography color="primary.contrastText">Team meeting</Typography>
      </Grid>

      <Grid item justifyContent="center" columnGap="12px">
        <Stack direction="row" gap={1.5}>
          <Button variant="contained">
            <MicIcon />
          </Button>

          <Button variant="contained">
            <VideocamOutlinedIcon />
          </Button>
          <Button variant="contained">
            <RemoveFromQueueIcon />
          </Button>
          <Button variant="contained">
            <PanToolOutlinedIcon />
          </Button>
          <Button variant="contained">
            <PresentToAllOutlinedIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            <MoreVertOutlinedIcon />
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ paddingX: 3, borderRadius: 100 }}
          >
            <CallEndIcon />
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose} />
        </Stack>
      </Grid>

      <Grid item justifyContent="center">
        <Button>
          <InfoOutlinedIcon />
        </Button>
        <Button>
          <Badge badgeContent={summ} color="primary">
            <GroupOutlinedIcon />
          </Badge>
        </Button>
        <Button>
          <ChatOutlinedIcon />
        </Button>
        <Button>
          <DeviceHubOutlinedIcon />
        </Button>
      </Grid>
    </Grid>
  )
}
