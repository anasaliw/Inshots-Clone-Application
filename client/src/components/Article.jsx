import React, { useState } from 'react'
import { useEffect } from 'react'
import { getData } from '../api'
import {Card,CardContent,styled,Grid,Typography} from '@mui/material'
import '../App.css'
function Article() {
useEffect(()=>{
fetchData();
},[])

const [news,setNews]=useState([]);

const fetchData=async()=>{
   const res= await getData();
   setNews(res.data); 
   console.log('Data is fetched')
}

const Image=styled('img')({
    height:268,
    width:'95%',
    objectFit:'cover',
    borderRadius:5,

})

const Component=styled(Card)`
    margin-bottom:20px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    width:67.2%;
    margin: 20px auto 10px auto;
    height:auto;
`

const Title=styled(Typography)`
    font-weight:700;
    margin-bottom:5px;
`
const SubTitle=styled(Typography)`
    font-size:13px;
    margin-bottom:5px;
`



  return (
    <React.Fragment>
        {
            news.map(data=>(
        <Component key={data.url}>
            <CardContent>
                <Grid container>
                    <Grid lg={5} sm={5} xs={12} item>
                        <Image src={data.url} alt="" />
                    </Grid>
                    <Grid lg={7} sm={7} xs={12} item>
                        <Title>
                            {data.title}
                        </Title>
                        <SubTitle><b>short</b> by {data.author} / {new Date(data.timestamp).toDateString()}</SubTitle>
                        <Typography>{data.description}</Typography>
                        <Typography
                        style={{fontSize:14,marginTop:25}}
                        >read more at
                        <a href={data.link} target="_blank" style={{textDecoration:'none'}}> {data.publisher}</a>
                            </Typography>
                    </Grid>

                </Grid>
            </CardContent>
        </Component>

            ))
        }
    </React.Fragment>
  )
}

export default React.memo(Article)