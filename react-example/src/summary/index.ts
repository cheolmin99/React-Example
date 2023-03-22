//# typescript의 데이터 타입
  //? 숫자타입 : number

import { Agent } from "http";

  //? 문자열 타입 : string *소문자s임

  //? 논리 타입 : boolean

  //# typescript의 변수 선언 방식
  //? var, let, const(상수) 나머진 그냥 변수

  //# java에서의 변수 선언
  //? 접근제어자 기타제어자 테이터타입 변수명

  //# typescript에서의 변수 선언
  //? var 변수명; | let 변수명: 데이터 타입;
  var tmp; //지역과 상관없이 쓸 수 있음 에러투성이
  let tmp2: number;
  let tmp4 = 10;

   //# typescript에서의 상수 선언
   //? const 상수명 = 값;
   const tmp3 = 'constant';

   //# typescript에서의 비교 연산자
   let a: any = 10; //any 모든타입을 받을 수 있음
   let b: any = '10';

   //# ==, != : 값만 비교
   // alert(a == b); 값이 같아 ture로 뜸
   
   //!=== ,!== 값과 타입을 비교 (>=== 이런 형태는 존재x)
   // alert(a === b); 

   //# typescript에서의 나눗셈 연산
   let tmp5 = 10 / 3;
   //alert(tmp5);

   //# java에서 객체생성
   //? 접근제어자 기타제어자 클래스 참조변수명 = new 생성자(인자, ...);

   //# typescript에서 객체생성
   //? const 참조변수명[: 클래스명] = new 생성(인자, ...);
   //? const 참조변수명[: 클래스명] = {key:value, ... }
   //? const 참조변수명[: 인터페이스명] = {key:value, ... }

   //# typescript에서 인터페이스를 선언하는 방법
   //? interface 인터페이스명 { 필드명: 타입; ... };
   interface Human {
     name: string;
     age: number;
   }

   const me = { name:'이철민', age:25 };
   const me2: Human = { name:'이철민', age:25 }; 
   // const me3 = { name:'이철민', age:25, gender: '남'};

   //^ typescript 에서는 {}를 배열이아닌 객체의 묶음으로 표현
   //^ {}로 묶어서 객체를 표현하는 방식을 JSON 포멧이라 함 
   //^ 배열의 묶음은 [] 표현

   export default tmp;