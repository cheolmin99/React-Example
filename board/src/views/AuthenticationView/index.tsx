import { useState } from 'react'
//? Box 컴포넌트 : mui에서 공간을 할당하는 모든 태그를 포함
//? Grid 컴포넌트 : mui에서 공간을 12등분하여 가로 사이즈에 따라 반응형 웹 개발을 지원
//? Tyoigraphy 컴포넌트 : mui에서 글자를 출력하는 모든 태그를 포함
import { Box, Card, Grid, Typography, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from '@mui/material'
import ContentPasteTwoToneIcon from '@mui/icons-material/ContentPasteTwoTone';
import LoginCardView from './LoginCardView';

export default function AuthenticationView() {
  return (
    <Box sx={{ pr: "120px", pl: "120px" }}>
      <Grid container spacing={2}>
        <Grid item lg={7} sm={12}>
          <Box sx={{ display: "flex", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
            <ContentPasteTwoToneIcon sx={{ fontSize: 40 }} />
            <Typography variant='h4'>환영합니다.</Typography>
            <Typography variant='h4'>HOONS BOARD입니다.</Typography>
          </Box>
        </Grid>
        <Grid item lg={5} sm={12}>
          <Card sx={{ height: "630px", mt: "100px", mb: "80px", pt: "50px", pb: "30px", pl: "50px", pr: "50px" }}>
            <LoginCardView />
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
