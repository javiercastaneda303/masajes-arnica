import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import './style.css'
import ShowWidth from '../ShowWidth-px'
import ShowLetersWidth from '../ShowLetersWidth'
export default function ButtonAppBar() {
  const navigate = useNavigate()
  const [t, i18n] = useTranslation('global')
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
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
        <p className="rojo">aaaaaaaaa</p>
      </AppBar>
    </Box>
  )
}
