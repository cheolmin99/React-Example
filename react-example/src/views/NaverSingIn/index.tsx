//? 파일명이 index.확장자 일 경우 해당 파일이 속해 있는 폴더 명으로
//? imfort가 가능 하다.
import InputGroup from 'src/components/InputGroup';
import BirthInputGroup from 'src/components/BirthInputGroup';
import ButtonGroup from 'src/components/ButtonGroup';
import './style.css'

// 한줄 주석 가능
/* 공간 주석 가능 */

// #java-method 생성
//? 접근제어자 기타 제어자 반환타입 메서드명(파라미터) {...}

//# typescript method 생성
//? (1) function 메서드명(파라미터 : [파라미터 타입])[생략가능: 반환타입]{...}
//? (2) 자바스크립트, 타입스크립트는 메서드를 변수로 인식함
//? const 메서드명 = (파라미터[:파라미터 타입])[:반환타입] => {...}

//^(1)
//! React Component는 TypeScript가 기반
function NaverSignIn() {
  //! return에는 하나의 태그만 올 수 있음
  //? 확장자가 .jsx or /txs 일 때
  //? 함수형 컴포넌트의 return에서 ()로 html 태그를 사용할 수 있음
  //? return의 ()안에서 typescript 문법을 사용하고 싶다면 {}를 사용

  /* 네이버 회원가입 페이지 레이아웃 구성 */
  /* containor 레이아웃 */
  return (
    <div>
      {/* 가운데 레이아웃 */}
      <div>
        {/* 로고 레이아웃 */}
        <div id="logo-containor">
          <a id="logo" href="https://www.naver.com">NAVER</a>
        </div>
        {/* 컨테이너 레이아웃*/}
        <div id="containor">
          <div>
            {/* //^함수형 컴포넌트에 매개변수를 전달할 때 html태그에서*/}
            {/* //^html 태그에서 속성 값을 지정하는 방식과 동일하게 사용*/}
            {/* 아이디 레이아웃 */}
            <InputGroup label='아이디' type='text'/>
            {/* 비밀번호 레이아웃 */}
            <InputGroup label='비밀번호' type='password'/>
            {/* 비밀번호 확인 레이아웃 */}
            <InputGroup label='비밀번호 확인' type='password'/>
            {/* 이름 레이아웃 */}
            <InputGroup label='이름' type='text'/>
            {/* 생년월일 레이아웃 */}
            <BirthInputGroup />
            {/* 버튼 레이아웃 */}
            <ButtonGroup />
          </div>
        </div>
      </div>
    </div>
  );
}

//^(2)
const Descrition = () => {
  //^ {} 밑 공간은 typescript를 인식

  //^ return의 ()에는 html태그를 인식
  //^ return () 안에서 typescript를 사용하려면 {}로 해당 구문을 감싸야함

  //^ () 안에서 html 태그를 사용하려면 return()의 괄호 안에 작성
  return (
    <div></div>
  );
}

export default NaverSignIn;


