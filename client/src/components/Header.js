import React from 'react'
import {Box,Typography,styled} from '@mui/material';
import '../index.css'

const Image=styled('img')({
    height:37
})

const ParentBox=styled(Box)( ({theme})=>({
width:"67.2%",
height:48,
margin: '40px auto 30px auto',
display:"flex",
[theme.breakpoints.down('md')]:{
  display:'none'
}
}));

const Typo=styled(Typography)`
font-size:14px;
color:white;
padding:12px 60px 6.5px 60px ;
`

function Header() {
  return (
    <React.Fragment>
        <ParentBox style={{backgroundColor:'#F44336'}}>
            <Typo>For the best experience use <b>inshorts</b> app on your smartphone</Typo>
            <Box style={{padding:"6px 0px 6px 47px",display:'flex' }}>
                <Image src='https://assets.inshorts.com/website_assets/images/appstore.png' style={{marginRight:22}} alt="appStore_logo" />
                <Image src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="playStore_logo" />
            </Box>
        </ParentBox>
    </React.Fragment>
  )
}

export default React.memo(Header);