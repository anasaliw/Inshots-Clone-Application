import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Box, AppBar,Toolbar,IconButton,styled} from '@mui/material';

const Image=styled('img')({
    height:57,
    margin:'auto',
    paddingRight:72,
})

function Navbar() {
  return (
    <React.Fragment>
        <Box>
            <AppBar position='static'>
                <Toolbar  style={{backgroundColor:'white',height:72}} >
                    <MenuIcon style={{color:'black', height:32,width:32}}/>
                    <Image src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' alt="inShots_logo" />
                </Toolbar>
            </AppBar>
        </Box>
    </React.Fragment>
  )
}

export default React.memo(Navbar);