import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

//# React를 사용하는 이유!

//# React는 Facebook (현재 meta)에서 개발한 Javascript 웹 라이브러리
//? HTML은 화면에 보여지는 특정한 값이 단 하나만 변경되더라도 페이지 전체를 다시 랜더링 해야하는데
//? React는 화면을 컴포넌트 단위로 분리해서 관리하기 때문에 특정한 값이 바뀌면 해당 값을 
//? 포함하고 있는 컴포넌트만 다시 랜더링 시킴
//? 그러므로 화면이 지속적으로 랜더링 되는 것을 방지할  수 있고
//? 필요한 부분만 랜더링 하여 사용자 권한 (UX)를 증진 시킬 수 있음

//^ 컴포넌트가 리랜더링 되는 기준은 State와 Props


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
