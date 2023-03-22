import { useState } from 'react'
import KakaoSignIn from './views/KakaoSignIn';
import NaverSignIn from './views/NaverSingIn'

import './App.css'

export default function App() {
     const [view, setView] = useState<string>('');
     return (
          <div>
               <button onClick = {() => setView('naverSignIn')}>네이버 회원가입 화면</button>
               <button onClick = {() => setView('kakaoSignIn')}>카카오 로그인 화면</button>
               <div>
                    {/* {view === 'naverSignIn' && ( <NaverSignIn />)} */}
               {/* 
               //# 삼항 비교 연산자 
               //? 조건에 따라서 참일때의 결과값과 거짓일때의 결과값을 지정해서
               //? 해당하는 경우의 값을 반환
               //? 조건? 참일때의 결과값 : 거짓일 때의 결과값
               */}
               {/* if(조건) {} else { if(조건) {} else {} } */}
               { view === 'naverSignIn' ? (<NaverSignIn />) : 
                    view === 'kakaoSignIn' ? (<KakaoSignIn />) : (<></>)}
               </div>
          </div>
     );
}