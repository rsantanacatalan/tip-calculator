function TotalBill({TotalForm, PeopleForm, Tip, Reset, SetReset, SetTotalForm, SetPeopleForm, initialRadio, SetRadio}){

	let TipPerson = ((TotalForm*Tip)/100)/PeopleForm;
	let TotalPerson = TipPerson + TotalForm/PeopleForm
	if(isNaN(TipPerson)) TipPerson = 0;
		//console.log(initialRadio)

	function handleReset(){
		SetReset(true);
		SetTotalForm('');
		SetPeopleForm(1);
		SetRadio(initialRadio);
	}

	return(
		<div className="totalBill">
			<div>
				<div className="total_grid">
					<div className="tipPerson">
						<h3>Tip Amount</h3>
						<span>/ person</span>
					</div>
					<p name="tip">${TipPerson.toFixed(2)}</p>
				</div>
				<div className="total_grid">
					<div className="tipPerson">
						<h3>Total</h3>
						<span>/ person</span>
					</div>
					<p>${TotalPerson.toFixed(2)}</p>
				</div>
			</div>
			<div className="reset_holder">
				<button className="reset"  onClick={handleReset} disabled={Reset ? true : false}> RESET</button>
			</div>	
		</div>
	)
}

export default TotalBill;