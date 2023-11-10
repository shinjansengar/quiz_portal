import Quiz from "../../components/Quiz";

const QuizPage = () =>{
    return(
        <div className="quiz_container">
            <h1 style={{textAlign:'center'}}>Please Attempt your quiz</h1>
            <Quiz/>   
        </div>
    )  
};

export default QuizPage;