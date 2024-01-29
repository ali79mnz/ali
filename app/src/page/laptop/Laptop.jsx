
import { PRODUCTSLAPTOP } from "../../dataa/data";
import DataLaptop from "./DataLaptop";


function Laptop() {
    return ( 
        <>
        <div>
            {PRODUCTSLAPTOP.map((proData)=>
            <DataLaptop key={proData.id} laptop={proData}/>
            )}
        </div>
        </>
     );
}

export default Laptop;