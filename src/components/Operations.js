import React, { Component } from "react";


class Operations extends Component {
  constructor() {
    super();
    this.state = {

      amountInput: "",
      vendorInput: "",
      categoryInput: ""
    };
  }

  cleanState() {
    this.setState({ amountInput: "" });
    this.setState({ vendorInput: "" });
    this.setState({ categoryInput: "" });
  }

  handleChange = e => {
    const target = e.target;
    let value = target.type === "number" ? parseInt(target.value) : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  balance = () => {
    let total = 0
    this.props.transactions.forEach(t => (total += t.amountInput))
    return total

  }

  pushtoState = (event) => {
    let x = { ...this.state }
    let name = event.target.name
    //   console.log(name)
    if (name === "Withdraw") {
      x.amountInput = x.amountInput * -1


    }

    // this.props.pushtoState(x)
    // console.log(x)
    this.props.updateTransactions(x)
    this.cleanState()
  }



  render() {
    let Color2
    this.balance() < 500 ? Color2 = 'red' : Color2 = 'green'


    return (
      <div className='operations'>
        <div className='header'>
          please input : Amount, vendor And category

                </div>

        Amount:<input name="amountInput" type="number" className="input" value={this.state.amountInput} onChange={this.handleChange}></input>

        vendor:<input name="vendorInput" type="text" className="input" value={this.state.vendorInput} onChange={this.handleChange}></input>

        category:<input name="categoryInput" type="text" className="input" value={this.state.categoryInput} onChange={this.handleChange}></input>

        <div className='balance' style={{ color: Color2 }}>your balance is:{this.balance()} </div>
        <button name="Deposit" onClick={this.pushtoState} style={{ backgroundColor: "green" }} > Deposit</button>
        <button name="Withdraw" onClick={this.pushtoState} style={{ backgroundColor: "red" }}> Withdraw</button>
      </div>
    )



  }



}
export default Operations;