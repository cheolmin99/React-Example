import React, { useState } from 'react'
import { Box, Card, Grid, Typography, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

export default function LoginCardView() {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  
  return (
     <Box display='flex' sx={{height: '100%', flexDirection: 'column', justifyContent: 'space-between'}}>
     {/* //? 인풋 공간 */}
     <Box>
       <Typography variant='h5' fontWeight='900'>로그인</Typography>
       <TextField sx={{ mt: '40px' }} fullWidth label="이메일 주소" variant="standard" />

       <FormControl fullWidth variant="standard" sx={{ mt: '40px' }}>
         <InputLabel>비밀번호</InputLabel>
         <Input
           type={showPassword ? 'text' : 'password'}
           endAdornment={
             <InputAdornment position="end">
               <IconButton
                 onClick={() => setShowPassword(!showPassword)}
               >
                 {showPassword ? <VisibilityOff /> : <Visibility />}
               </IconButton>
             </InputAdornment>
           }
         />
       </FormControl>
     </Box>
     {/* //? 버튼 공간 */}
     <Box>
       <Button sx={{mb: '20px'}} fullWidth variant='contained' size='large'>로그인</Button>
       <Typography textAlign={'center'}>신규 사용자 이신가요? <Typography component='span' fontWeight={'900'}>회원가입</Typography></Typography>
     </Box>
   </Box>
  )
}
