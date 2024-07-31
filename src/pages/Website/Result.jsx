import { useState , useEffect} from "react";

const Result = ({totalQuestions, result, onTryAgain}) => {
    const [name, setName] = useState('');
    const [highScores, setHighScores] = useState([]);
    const [showScores, setShowScores] = useState(false);

    useEffect(() => {
        setHighScores(JSON.parse(localStorage.getItem('highScores')) || []);
    },[])

    const handelSave = () => {
        const score = {
            name,
            score: result.score
        }
        const newHighScores =[...highScores, score].sort((a,b)=>b.score -a.score);
        setHighScores(newHighScores);
        setShowScores(true);
        localStorage.setItem('highScores',JSON.stringify(newHighScores))
    }
    const handelTrayAgain = () => {
        setShowScores(false);
        setHighScores([]);
        onTryAgain();
    }
    return(<div>
         <div className="result">
                    <h3>Result</h3>
                    <p>
                        Total Questions: <span>{totalQuestions
                        }</span>
                    </p>
                    <p>
                        Total Score: <span>{result.score}</span>
                    </p>
                    <p>
                        Correct Answers: <span>{result.correctAnswer}</span>
                    </p>
                    <p>
                        Wrong Answers: <span>{result.WrongAnswers}</span>
                    </p>
                    <button onClick={handelTrayAgain}>Try Again</button>
                    {!showScores ? <>
                        <h3>Enter your name bellow <br/>to save score!</h3>
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name"/>
                        <button onClick={handelSave} >Save</button>
                    </>: <>
                        <table>
                            <thead>
X                                    <tr>
                                        <th>Ranking</th>
                                        <th>Name</th>
                                        <th>Score</th>
                                    </tr>
                            </thead>
                            <tbody>
                               { highScores.map( (highScore,i) => {
                                return (
                                <tr key={`${highScore.score}${highScore.name}${highScore.score}${i}`}>
                                    <td>{i + 1}</td>
                                    <td>{highScore.name}</td>
                                    <td>{highScore.score}</td>
                                </tr>)
                               })
                              }
                            </tbody>
                        </table>
                    </>}
                   
                </div>
    </div>)
}
export default Result;