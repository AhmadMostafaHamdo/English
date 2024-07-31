import { data } from '../../AllData/Data'
import Cours from './Cours';
import Nav from "../../Component/Website/Nav";
export default function AllCours() {
      const dataShow = data.map((ele,index) => <Cours key={index} img={ele.img} title={ele.title} teacher={ele.teacher}/>)
    return (<><Nav/>
        <div className='all-cours'>
            {dataShow}
        </div>
    </> 
    );
};