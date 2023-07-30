# react 주요 개념
jsx : 새로운 언어( javascript + xml:html )


# 기존의 javascript, html 과의 차이점 
1. class 속성 => className 
    태그, 컴포넌트(여러분들이 만든 태그:함수)
2. 작업하면 자동으로 갱신
    HMR(Hot Module Replace) : F5 리플레쉬 없이 자동으로 모듈 바꿔주는 기능 

    다양한 변수 사용법 
    2-1. state : 컴포넌트내에서 사용하는 변수, 화면을 갱신하고 싶을때 사용하는 변수
    2-2. props : 속성, 변수로 전달  
    <img src="경로"  alt="설명" class="img" id="img" data-title="설명">
    <Img title="속성값">
    2-3. context : props 전역으로 설정 해서 사용 

3. hook : 함수
   useState
   useContext
   useRef
   useEffect
4. 사용자 정의 hook   

# 컴포넌트(태그를 리턴하는 함수)
확장자를 .js,  .mjs, .jsx 를 사용할 수 있고 
import할 때는 확장자를 생략가능
첫글자는 반드시 대문자 사용(html은 전부소문자)
대부분의 컴포넌트는 단일 태그로 사용
그룹역활을 하는 컴포넌트는 쌍으로 이루어 사용

# extention
##    ES7

- rfc : 함수형 컴포넌트 export 내장
- rfce : 함수형 컴포넌트 export 별도 선언
- rafc : 화살표 함수 컴포넌트 export 내장
- rafce : 화살표 함수 컴포넌트 export 별도 선언
- rcc : 클래스형 컴포넌트

# 크롬 브라우저에 설치하는 개발 도구 
react development tools
각종 컴포넌트, state, props, context 확인할 수 있는 도구 

# react event handler 
1. <button onMouseOver={ 파라미터가 없는 함수명 }>마우스오버</button>
2. <button onMouseOver={ ()=>{함수(파라미터)} }>마우스오버</button>
2. <button onMouseOver={ ()=>함수(파라미터) }>마우스오버</button>