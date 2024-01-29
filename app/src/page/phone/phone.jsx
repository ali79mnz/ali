import {PRODUCTSPHONE } from "../../data/data";
import DataPhone from "./DataPhone";


function Phone() {
    return ( 
        <>
        <div>
            {PRODUCTSPHONE.map((proData)=>
            <DataPhone key={proData.id} data={proData}/>
            )}
        </div>
        </>
     );
}

export default Phone;