## react-survey-pie ๐ 
- Studypie ์ฌ์ดํธ์ '๋ผ์ธ ํ์ด๋ธ์ ์ถ์  ๊ฐ๋ฐ์์ ๋ฆฌ์กํธ๋ก ์ค๋ฌด ์๋น์ค ์ ์ํ๊ธฐ(์ ๋๊ท )' ๋ผ๋ ๊ฐ์ข๋ฅผ ํตํด ํ์ตํ ๋ด์ฉ์ ์ ๋ฆฌํ์์.
- ํ์ต ๊ธฐ๊ฐ : 1. 16(์) ~ 1. 24(ํ)

## ํ์ตํ ํ๋ก์ ํธ ๋ช โ
- memo-project
- survey-pie
- survey-pie-admin
- <s>survey-pie์ survey-pie-admin ํ์ต์ ์ํด ๋ฏธ๋ฆฌ ๋ง๋ค์ด์ง ์๋ฒ survey-pie-server(https://github.com/hackurity01/survey-pie-server)</s>

## ํ์ตํ ๋ด์ฉโ
- ์ค๋ฌด์์์ ๊ฐ๋ฐ ๊ณผ์ , ๋ฆฌ์กํธ ๊ฐ๋ฐ ๊ณผ์  ๊ณ ๋ฏผ
- Prettier, eslint๋ฅผ ์ด์ฉํ ํธ๋ฆฌํ react ๊ฐ๋ฐ ๋ฐฉ๋ฒ
- SurveyPie - ๊ธฐํ์, ๋์์ธ ๊ฐ์ด๋ ๋ถ์, ์๋น์ค ์ค๊ณ
- ๋ผ์ฐํ ๊ฐ๋, ๋ฆฌ์กํธ ๋ผ์ฐํฐ์ ์ฌ์ฉ๋ฒ,
- styled ์ปดํฌ๋ํธ๋ฅผ ์ด์ฉํ JS-in-code ์ปดํฌ๋ํธ ์คํ์ผ๋ง
- Recoil์ ์ด์ฉํ ์ ์ญ ์ํ ๊ด๋ฆฌ ๋ฐฉ๋ฒ
- surveyPie Admin -๊ธฐํ์ ๋ถ์, ์๋น์ค ์ค๊ณ
- Ant Design๊ณผ useSWR
- Redux๋ฅผ ์ด์ฉํ ์ ์ญ ์ํ ๊ด๋ฆฌ ๋ฐฉ๋ฒ

## React Project Start
`npx create-react-app my-project`

## memo-project
- react๋ก ๊ตฌํํ ๊ฐ๋จํ ๋ฉ๋ชจ์ฅ ์น.<br>
![memo-project](/assets/memo-project.png)
- ๊ฐ๋จํ ํ๋ก๊ทธ๋จ ์ค๊ณ ๋ฐ ์ปดํฌ๋ํธ ๊ตฌํ ๋ฐ ๊ด๋ฆฌ
- useState ์ด์ฉ - setterํจ์ ๋ฐ ๋ ๋๋ง ๊ฐ๋ ๊ธฐ์ด
- localStorage ์ด์ฉ
- localStorage.setItem, localStorage.getItem

## survey-pie
- react๋ก ๊ตฌํํ ์ค๋ฌธ์กฐ์ฌ ์น.<br>
![survey-pie_1](/assets/survey-pie_1.png)<br>
![survey-pie_2](/assets/survey-pie_2.png)<br>
- ์ปดํฌ๋ํธ ๊ตฌ์กฐ ์ค๊ณ ๋ฐ ๊ตฌํ, ๊ด๋ฆฌ.<br>
![survey-pie-components](/assets/survey-pie-components.png)<br>
- react-router 
<br>์ฃผ์์ ๋ง๊ฒ ์ ์ ํ ํ์ด์ง๋ฅผ ๋ก๋ํ๋ ๊ฒ, history ์กฐ์์ ์ด์ฉํจ.
- react-router-dom(https://reactrouter.com/en/main)
<br>BrowserRouter, Routes, Route, useParams
- eslint-plugin-simple-import-sort(https://github.com/lydell/eslint-plugin-simple-import-sort)
<br>import ์ ๋ ฌ์ ๊ธฐ์ค ์ ๊ณต
- styled-components(https://styled-components.com/)
```js
const BodyWrapper = styled.div`
background: #ffffff;
padding: 4px;
`;
```
- ์ ์ญ ์ํ ๊ด๋ฆฌ Recoil(https://recoiljs.org/ko/)
<br>atom, selector, useRecoilValue, useRecoilState
- Custom hook
<br>ํ๋ ์ด์์ Hooks๋ฅผ ์กฐํฉํด์ ๋ง๋  ์๋ก์ด Hook. ์ฝ๊ฒ ๋งํด hooks๋ฅผ ํฌํจํ ํจ์
- API ์ฐ๋(์๋ฒ ์ฐ๋)
<br>Axios(https://axios-http.com/kr/docs/intro)
<br>get, post, put, delete
- React์์ API ํธ์ถ ๊ณผ์ 
![react-api](/assets/react-api.png)
- React์์ ์ธ๋ถ ๋ฐ์ดํฐ ๊ด๋ฆฌ
![react-outside](/assets/react-outside.png)
- ์ ์ญ Store์ API ์ฐ๋
![react-allparts](/assets/react-allparts.png)
- ๋ก์ปฌ path ์ถ์ถ
<br>`window.location.pathname`
- react.Suspense
<br>์์ธ ์ฒ๋ฆฌ. Suspense ์์ ์ฌ์ฉํ๋ ๋ฐ์ดํฐ๊ฐ ์ค๋น๋์ง ์์์ ๋ fallback(loading ๊ฐ๋)

## survey-pie-admin
- react๋ก ๊ตฌํํ ์ค๋ฌธ์กฐ์ฌ ๊ด๋ฆฌ ํ์ด์ง.<br>
![survey-pie-admin_1](/assets/survey-pie-admin_1.png)<br>
![survey-pie-admin_2](/assets/survey-pie-admin_2.png)<br>
- ์ปดํฌ๋ํธ ๊ตฌ์กฐ ์ค๊ณ ๋ฐ ๊ตฌํ, ๊ด๋ฆฌ. <br>
![survey-pie-admin-components_1](/assets/survey-pie-admin-components_1.png)<br>
![survey-pie-admin-components_2](/assets/survey-pie-admin-components_2.png)<br>
- Ant Design(https://ant.design)
<br>์ ๋ง๋ค์ด์ง UI ๋ผ์ด๋ธ๋ฌ๋ฆฌ.
- useSWR(https://swr.vercel.app/ko)
<br>API ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๊ธฐ ์ํ React Hooks.<br>
- useSWR ๋ฐ์ดํฐ fetch ์ ๋ต<br>
![useSWR](/assets/useSWR.png)
- useSWR Example<br>
![useSWR-example](/assets/useSWR-example.png)<br>
- Redux(https://ko.redux.js.org/introduction/getting-started/)<br>
์ ์ญ ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ.
![Redux](/assets/Redux.png)<br>
- Redux์ 3๊ฐ์ง ์์น<br>
1. ์ ๋ขฐ ๊ฐ๋ฅํ ๋จ์ผ ์ถ์ฒ(Single source of truth)<br>
2. ์ํ๋ ์ฝ๊ธฐ ์ ์ฉ(State is read-only)<br>
3. ๋ฆฌ๋์๋ ์์ ํจ์(Changes are made with pure functions)
- Redux Devtools<br>
Chrome ํ์ฅ ํ๋ก๊ทธ๋จ์ผ๋ก, ๋ก์ปฌ์์ Redux๋ฅผ ํ์คํธ ๊ฐ๋ฅํ ๊ฐ๋ฐ์ ๋๊ตฌ.
- Redux Middleware(https://lunit.gitbook.io/redux-in-korean/advanced/middleware)<br>
- React Devtools<br>
Chrome ํ์ฅ ํ๋ก๊ทธ๋จ์ผ๋ก, ๋ก์ปฌ์์ React๋ฅผ ํ์คํธ ๊ฐ๋ฅํ ๊ฐ๋ฐ์ ๋๊ตฌ. ๋ ๋๋ง ํ์ธ์ ์ ์ฉํจ.
