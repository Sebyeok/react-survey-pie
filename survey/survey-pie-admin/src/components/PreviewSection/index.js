import { useDispatch, useSelector } from 'react-redux';

import { setSelectedQuestionId } from '../../stores/selectedQuestionId/selectedQuestionIdSlice';
import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
} from '../../stores/survey/surveySlice';
import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

function PreviewSection() {
  const questions = useSelector((state) => state.survey.data?.questions || []);
  const selectedQuestionId = useSelector(
    (state) => state.selectedQuestionId.data,
  );
  const dispatch = useDispatch();

  const handleAddQuestion = (type) => {
    dispatch(addQuestion(type));
  };
  const handleMoveUpQuestion = (index) => {
    if (index === 0) {
      return;
    }
    dispatch(moveUpQuestion(index));
  };
  const handleMoveDownQuestion = (index) => {
    if (index === questions.length - 1) {
      return;
    }
    dispatch(moveDownQuestion(index));
  };
  const handleDeleteQuestion = (index) => {
    dispatch(deleteQuestion(index));
  };
  const handleCardClick = (index) => {
    dispatch(setSelectedQuestionId(index));
  };

  return (
    <>
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={() => handleMoveUpQuestion(index)}
          onDownButtonClick={() => handleMoveDownQuestion(index)}
          onDeleteButtonClick={() => handleDeleteQuestion(index)}
          onClick={() => handleCardClick(index)}
          isSelected={selectedQuestionId === index}
        >
          <Body type={question.type} options={question.options} />
        </Card>
      ))}
      <AddButton addQuestion={handleAddQuestion} />
    </>
  );
}
export default PreviewSection;

/*
addQuestion={(type) => {
              dispatch(addQuestion(type));
            }}
            moveUpQuestion={(index) => {
              if (index === 0) {
                return;
              }
              dispatch(moveUpQuestion(index));
            }}
            moveDownQuestion={(index) => {
              if (index === survey.questions.length - 1) {
                return;
              }
              dispatch(moveDownQuestion(index));
            }}
            deleteQuestion={(index) => {
              dispatch(deleteQuestion(index));
            }}
            */
