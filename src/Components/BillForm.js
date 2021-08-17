function BillForm({ SetTotalForm, SetPeopleForm, SetTip, PeopleForm, TotalForm, SetReset, Radio, checkedRadio, SetRadio}) {

	
	function handleTotal(e) {
		SetTotalForm(parseFloat(e.target.value));
		SetReset(false);
	}

	function handleTip(e) {
		SetTip(e.target.value);
		SetReset(false);
	
		
	}

	function handleRadio(e){
		//SetRadio
		SetRadio({ ...checkedRadio, [e.target.value]:true})
		
	}

	function handlePeople(e) {
		SetPeopleForm(parseFloat(e.target.value));
		SetReset(false);
	}

	//console.log(Radio)
	return (
		<div className="bill">
			<h4>Bill:</h4>
			<div className="">
				<span>
					<img alt=" " src="/icon-dollar.svg"></img>
				</span>
				<input
					name="inputTotal"
					className="inputForm"
					type="number"
					placeholder="0"
					onChange={handleTotal}
					value={TotalForm}
				/>
			</div>
			<h4>Select Tip %</h4>
			<div className="inputForm btn_grid">
				<input
					id="5tip" 
					name="radioTip" 
					type="radio" 
					value="5" 
					onClick={handleTip}
					onChange={handleRadio}
					checked={Radio[5]}
				/>
				<label className="btn" htmlFor="5tip">5%</label>

				<input 
					id="10tip" 
					name="radioTip" 
					type="radio" 
					value="10" 
					onClick={handleTip} 
					onChange={handleRadio}
					checked={Radio[10]}
				/>
				<label className="btn" htmlFor="10tip">10%</label>

				<input 
					id="15tip" 
					name="radioTip"
					type="radio" 
					value="15" 
					onClick={handleTip}
					onChange={handleRadio}
					checked={Radio[15]}
				/>
				<label className="btn" htmlFor="15tip">15%</label>

				<input 
					id="25tip" 
					name="radioTip" 
					type="radio" 
					value="25" 
					onClick={handleTip}
					onChange={handleRadio} 
					checked={Radio[25]}
				/>
				<label className="btn" htmlFor="25tip">25%</label>

				<input 
					id="50tip" 
					name="radioTip" 
					type="radio" 
					value="50" 
					onClick={handleTip}
					onChange={handleRadio}
					checked={Radio[50]}
				/>
				<label className="btn" htmlFor="50tip">50%</label>

				<input placeholder="Custom" type="text" className=""></input>
			</div>

			<h4>Number of People</h4>
			<div className="">
				<span>
					<img alt=" " src="/icon-person.svg"></img>
				</span>
				<input
					name="inputPeople"
					className=""
					placeholder="0"
					type="number"
					onChange={handlePeople}
					value={PeopleForm}
				/>
			</div>
		</div>
	)
}

export default BillForm;