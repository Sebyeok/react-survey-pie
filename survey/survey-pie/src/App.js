import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import ServeyPage from './pages/ServeyPage';

function App() {
  return (
    <AppWrapper>
      <BOX>
        <Routes>
          <Route path="/done/:surveyId" element={<CompletionPage />} />
          <Route path="/survey/:surveyId" element={<ServeyPage />}>
            <Route path=":step" element={<ServeyPage />} />
          </Route>
        </Routes>
      </BOX>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const BOX = styled.div`
  width: 700px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

/*

"/survey" 추가로 필요한 것 : 설문ID
http://www.surveypie.com/survey?id=abc123
http://www.surveypie.com/survey/abc123

*/
export default App;
