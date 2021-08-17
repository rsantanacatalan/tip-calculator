import { useState } from "react";
import BillForm from './BillForm';
import TotalBill from './TotalBill';

function TipCalculator(){

    const initialRadio = {
		5: true,
		10: false,
		15: false,
		25: false,
		50: false
	};

    const checkedRadio = {
		5: false,
		10: false,
		15: false,
		25: false,
		50: false
	};

    const [TotalForm, SetTotalForm] = useState(0);
	const [PeopleForm, SetPeopleForm] = useState(1);
    const [Tip, SetTip] = useState(5);
    const [Reset, SetReset] = useState(true);
    const [Radio, SetRadio] = useState(initialRadio);

    console.log(Radio);
    return(
        
        <div className="grid_container">
			
			<BillForm 
                SetTotalForm={SetTotalForm} 
                SetPeopleForm={SetPeopleForm}  
                SetTip={SetTip} 
                PeopleForm={PeopleForm} 
                TotalForm={TotalForm} 
                SetReset={SetReset}
                Radio={Radio}
                checkedRadio={checkedRadio}
                SetRadio={SetRadio}
                

            />
			<TotalBill 
                TotalForm={TotalForm} 
                PeopleForm={PeopleForm} 
                Tip={Tip} 
                Reset={Reset} 
                SetReset={SetReset} 
                SetTotalForm={SetTotalForm} 
                SetPeopleForm={SetPeopleForm}
                initialRadio={initialRadio}
                SetRadio={SetRadio}
            />
		
		</div>
    )
}
export default TipCalculator;