import { useEffect, useState } from "react";
import { fetchQuiz } from "../../services/service";
import "./index.scss";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [attempted, setAttempted] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    fetchQuiz()
      .then((res) => {
        if (res.length > 0) {
          const modifiedQuestions = res.map((question) => {
            return {
              ...question,
              optionA: {
                value: question.optionA,
                isSelected: false,
                option: "A",
              },
              optionB: {
                value: question.optionB,
                isSelected: false,
                option: "B",
              },
              optionC: {
                value: question.optionC,
                isSelected: false,
                option: "C",
              },
              optionD: {
                value: question.optionD,
                isSelected: false,
                option: "D",
              },
            };
          });
          setQuestions(modifiedQuestions);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleOptionSelection = (questionId, option) => {
    const newQuestions = questions.map((question) => {
      if (question.questionId === questionId) {
        question.selectedOption = option;
      }
      return question;
    });

    const alreadyAttempted = attempted.find((item) => item === questionId);
    if (!alreadyAttempted) {
      setAttempted([...attempted, questionId]);
    }

    setQuestions(newQuestions);
  };

  const handleQuizSubmit = () => {
    let score = 0;
    questions.forEach((question) => {
      if (question.selectedOption === question.correctOption) score++;
    });
    setTotalScore(score);
  };

  return (
    <div className="main_container">
      <p>Total Attempted: {attempted.length}/{questions.length}</p>
      {totalScore !==0 && (
        <p>
          Total Score: {totalScore}/{questions.length}
        </p>
      )}
      {questions.map((question, index) => {
        return (
          <div key={question.questionId} className="question_container">
            <span>
              {index + 1}. {question.questionText}
            </span>
            <div className="options_container">
              {["A", "B", "C", "D"].map((option) => (
                <div key={`${question.questionId + option}`}>
                  <input
                    type="radio"
                    name={question.questionId} // Add a unique name for the radio button group
                    checked={question.selectedOption === option}
                    onChange={() =>
                      handleOptionSelection(question.questionId, option)
                    }
                  />
                  <label>
                    {option}. {question[`option${option}`].value}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <div>
        <button onClick={handleQuizSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Quiz;
