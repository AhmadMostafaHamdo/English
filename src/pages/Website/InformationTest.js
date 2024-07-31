import { Link } from "react-router-dom";
import Nav from "../../Component/Website/Nav";
export default function InformationTest ({onSubmit}) {
    return(<div className="information">
        <Nav/>                      
       <div className="box-info">
            <h1>Welcome</h1>
            <Link to="/test">Start</Link> 
       </div>
    </div>)
} 
