## react-survey-pie 🙌 
- Studypie 사이트의 '라인 파이낸셜 출신 개발자와 리액트로 실무 서비스 제작하기(유동균)' 라는 강좌를 통해 학습한 내용을 정리하였음.
- 학습 기간 : 1. 16(월) ~ 1. 24(화)

## 학습한 프로젝트 명 ❓
- memo-project
- survey-pie
- survey-pie-admin
- survey-pie와 survey-pie-admin 학습을 위해 미리 만들어진 서버 survey-pie-server(https://github.com/hackurity01/survey-pie-server)

## 학습한 내용❓
- 실무에서의 개발 과정, 리액트 개발 과정 고민
- Prettier, eslint를 이용한 편리한 react 개발 방법
- SurveyPie - 기획서, 디자인 가이드 분석, 서비스 설계
- 라우팅 개념, 리액트 라우터의 사용법,
- styled 컴포넌트를 이용한 JS-in-code 컴포넌트 스타일링
- Recoil을 이용한 전역 상태 관리 방법
- surveyPie Admin -기획서 분석, 서비스 설계
- Ant Design과 useSWR
- Redux를 이용한 전역 상태 관리 방법

## memo-project
- react로 구현한 간단한 메모장 웹.<br>
![memo-project](/assets/memo-project.png)
- 간단한 프로그램 설계 및 컴포넌트 구현 및 관리
- useState 이용 - setter함수 및 렌더링 개념 기초
- localStorage 이용
- localStorage.setItem, localStorage.getItem

## survey-pie
- react로 구현한 설문조사 웹.<br>
![survey-pie_1](/assets/survey-pie_1.png)<br>
![survey-pie_2](/assets/survey-pie_2.png)<br>
- 컴포넌트 구조 설계 및 구현, 관리.<br>
![survey-pie-components](/assets/survey-pie-components.png)<br>
- react-router 
<br>주소에 맞게 적절한 페이지를 로드하는 것, history 조작을 이용함.
- react-router-dom(https://reactrouter.com/en/main)
<br>BrowserRouter, Routes, Route
- styled-components(https://styled-components.com/)
```js
const BodyWrapper = styled.div`
background:aqua;
padding: 4px;
`;
```
- 전역 상태 관리 Recoil(https://recoiljs.org/ko/)
<br>atom, selector, useRecoilValue, useRecoilState
- Custom hook
<br>하나 이상의 Hooks를 조합해서 만든 새로운 Hook. 쉽게 말해 hooks를 포함한 함수
- API 연동(서버 연동)
<br>Axios(https://axios-http.com/kr/docs/intro)
<br>get, post, put, delete
- React에서 API 호출 과정
![react-api](/assets/react-api.png)
- React에서 외부 데이터 관리
![react-outside](/assets/react-outside.png)
- 전역 Store에 API 연동
![react-allparts](/assets/react-allparts.png)
- 로컬 path 추출
<br>`window.location.pathname`
- react.Suspense
<br>예외 처리. Suspense 안에 사용하는 데이터가 준비되지 않았을 때 fallback(loading 개념)

## survey-pie-admin
- react로 구현한 설문조사 관리 페이지.<br>
![survey-pie-admin_1](/assets/survey-pie-admin_1.png)<br>
![survey-pie-admin_2](/assets/survey-pie-admin_2.png)<br>
- 컴포넌트 구조 설계 및 구현, 관리. <br>
![survey-pie-admin-components_1](/assets/survey-pie-admin-components_1.png)<br>
![survey-pie-admin-components_2](/assets/survey-pie-admin-components_2.png)<br>
- Ant Design(https://ant.design)
<br>잘 만들어진 UI 라이브러리.
- useSWR(https://swr.vercel.app/ko)
<br>API 데이터를 가져오기 위한 React Hooks.<br>
- useSWR 데이터 fetch 전략<br>
![useSWR](/assets/useSWR.png)
- useSWR Example<br>
![useSWR-example](/assets/useSWR-example.png)<br>
- Redux(https://ko.redux.js.org/introduction/getting-started/)<br>
전역 상태 관리 라이브러리.
![Redux](/assets/Redux.png)<br>
- Redux의 3가지 원칙<br>
1. 신뢰 가능한 단일 출처(Single source of truth)<br>
2. 상태는 읽기 전용(State is read-only)<br>
3. 리듀서는 순수 함수(Changes are made with pure functions)
