import { useState } from "react";
import { resultInitialState } from "./QuizQ";
import AnswersTimer from "./AnswerTimer";
import Nav from "../../Component/Website/Nav";
import Result from "./Result";
const Quiz = ({questions}) => {
    
    const [currentQuestions, setCurrentQuestions] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);
    const[result, setResult] = useState(resultInitialState);
    const [inputAnswer, setInputAnswer] = useState('')
    const {question, choices, correctAnswer, type} = questions[currentQuestions];
    const [showResult, setShowResult] = useState(false);
    const [showAnswerTimer, setShowAnswerTimer] = useState(true);
    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if(answer === correctAnswer){
            setAnswer(true);
        } else {
            setAnswer(false);
        }  
    }
    const onClickNext = (finalAnswer) => {
        setAnswerIdx(null);
        setShowAnswerTimer(false);
        setResult((prev) => 
            finalAnswer 
            ? {
                ...prev,
                score: prev.score + 5,
                correctAnswer: prev.correctAnswer + 1
            } : {
                ...prev,
                WrongAnswers: prev.WrongAnswers + 1
            }
        );
        if(currentQuestions !== questions.length -1) {
            setCurrentQuestions((prev) => prev + 1);
        } else {
            setCurrentQuestions(0);
            setShowResult(true);
        }
        setTimeout(() => {
            setShowAnswerTimer(true);
        })
    };
    const onTryAgain = () => {
        setResult(resultInitialState);
        setShowResult(false);
    }
    const handelTimeUp = () => {
        setAnswer(false);
        onClickNext(false);
    }
    const handelInputChange = (evt) => {
        setInputAnswer(evt.target.value);
        if(evt.target.value === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    }
    const getAnswerUI  = (type) => {
        if(type==='FIB') {
            return <input value={inputAnswer} onChange={handelInputChange}/>
        }
        return( <ul>
                     {
     
                         choices.map((answer, index) => (
                             <li 
                             onClick={() => onAnswerClick(answer, index)}
                             key={answer}
                             className={answerIdx === index ? "selected-answer": null}
                             >
                                 {answer}
                             </li>
                         ))}
                 </ul>);
    }
    return (
        <>
            <Nav/>
        <div className="quiz-content">
        <div className="quiz-container">

            {!showResult ? (
                 <>
                {showAnswerTimer && <AnswersTimer duration={20} onTimeUp={handelTimeUp}/>}
                 <span className='active-question-no' >{currentQuestions + 1}</span>
                 <span className='total-question' >/{questions.length}</span>
                 <h2>{question}</h2>
                
                {getAnswerUI(type)}
                 <div className="footer">
                     <button onClick={() =>onClickNext(answer)} disabled={answerIdx === null && !inputAnswer}>
                         {currentQuestions === questions.length - 1 ? "Finish" : "Next"}
                     </button>
                 </div>
                 </>) :
                    (<Result result= {result} 
                    onTryAgain={onTryAgain}
                    totalQuestions= {questions.length}/>)
                 }
           

        </div> 
        </div>
    </>);
};
export default Quiz;