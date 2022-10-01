import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");
  return (
    <Box sx={{ flexGrow: 1 }}>
        {/* position="static" position="sticky"  */}
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Button 
            color="inherit"
            onClick={()=> navigate(`service/${i18n.language}`)}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Servicios
            </Typography>
          </Button>
          <Button color="inherit">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Precio
            </Typography>
          </Button>
          <Button color="inherit">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Contacto
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}