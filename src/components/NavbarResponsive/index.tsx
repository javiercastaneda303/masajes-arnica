import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {} from '@mui/material' // deuda técnica, hay que meterlos todos aquí
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ShowWidth from '../ShowWidth-px'
import ShowLetersWidth from '../ShowLetersWidth'
export default function NavbarResponsive() {
  const navigate = useNavigate()
  const [t, i18n] = useTranslation('global')
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Button color="inherit" onClick={() => navigate(`service/${i18n.language}`)}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t('header.service')}
            </Typography>
          </Button>
          <Button color="inherit" onClick={() => navigate(`price/${i18n.language}`)}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t('header.price')}
            </Typography>
          </Button>
          <Button color="inherit" onClick={() => navigate(`contact/${i18n.language}`)}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t('header.contact')}
            </Typography>
          </Button>
        </Toolbar>
        <br />
        <ShowWidth />
        <ShowLetersWidth />
      </AppBar>
    </Box>
  )
}
