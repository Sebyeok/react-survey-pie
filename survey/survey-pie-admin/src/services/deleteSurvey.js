import axios from 'axios';

function deleteSurvey(surveyID) {
  return axios
    .delete(`/surveys/${surveyID}`)
    .then(() => alert('삭제되었습니다.'));
}

export default deleteSurvey;
