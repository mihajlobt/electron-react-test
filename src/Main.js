import React from 'react';

class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			inputNum: 0,
			inputValue: []
		};
	}

	addNum(e){
		console.log(e.target.value);
		let state = this.state;
		if (e.target.value !== "0"){
			state.inputValue += e.target.value;
			this.setState({state});
		}
	}

	clearInput(e){
		this.setState({inputValue: ""})
	}

	doOperation(e){
		console.log(eval(this.state.inputValue));
		this.setState({inputValue: eval(this.state.inputValue)})
	}

	render(){

		let numbers = [1,2,3,4,5,6,7,8,9,0,"=","C"];
		let operation = ["+", "-", "/", "*"];
		let numButtons = numbers.map((num)=>{
			let buttonElement;
			if (num === "C"){
				buttonElement = (
					<button onClick={this.clearInput.bind(this)}
							value={num}
							key={num}>{num.toString()}
					</button>
				)
			}else if (num === "="){
				buttonElement = (
					<button onClick={this.doOperation.bind(this)}
							value={num}
							key={num}>{num.toString()}
					</button>
				)
			} else {
				buttonElement = (
				<button onClick={this.addNum.bind(this)}
					value={num}
					key={num}>{num.toString()}
				</button>
				)
			}
				return buttonElement;
		});

		let operationBtns = operation.map((type)=>{
			return (
				<button onClick={this.addNum.bind(this)}
						value={type}
						key={type}>{type.toString()}
				</button>
			);
		});

		return (
			<div className="main-wrapper">
				<div className="buttons-wrapper">
					<input readOnly={true}
						   value={this.state.inputValue}
						   placeholder="0"/>
					{numButtons}
					{operationBtns}
				</div>
			</div>
			)
	}
}

export default Main;
