import CardOffer from './Offers';
import { DATAOffer } from '../../AllData/DataOffers';
import Nav from '../../Component/Website/Nav';
    export const  AllOffers = () =>  {
               const dataShow = DATAOffer.map((ele,index) => <CardOffer key={index} image={ele.image} title={ele.title} oldPrice={ele.oldPrice}
               newPrice={ele.newPrice} content={ele.content}
               />)
            
    return (<div className='all-offers'><Nav/>
        <div className=''>
            
            {dataShow}
        </div>
    </div>
     ) }


 


