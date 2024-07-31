import { Link } from "react-router-dom";
export default function Cours (props) {
    return(<>
            <div className="cousrs">
                <div className="img">
                        <img src={props.img} alt="img"/>
                </div>
                 <h4>dr.{props.teacher}</h4>
                 <h3>{props.title}</h3>
                    <Link to="/cours/grammar">Open Course</Link>
            </div>
        
        </>)
}