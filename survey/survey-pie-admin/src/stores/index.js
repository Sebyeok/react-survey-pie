import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import thunk from './middleware/thunk';
import selectedQuestionIdReducer from './selectedQuestionId/selectedQuestionIdSlice';
import surveyReducer from './survey/surveySlice';

export default configureStore({
  reducer: {
    survey: surveyReducer,
    selectedQuestionId: selectedQuestionIdReducer,
  },
  middleware: (getDefalutMiddleWare) => getDefaultMiddleware().concat(thunk),
});
