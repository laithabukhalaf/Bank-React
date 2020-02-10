import React, { Component } from "react";

class Transaction extends Component {
    // constructor(){
    //     super()
    // }
    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.transactions._id)
        // console.log(this.props.transactions._id)
    }

    render() {
        let t = this.props.transactions
        // console.log(this.props.transactions.id)


        return (
            <div className="transaction" style={{ color: t.amountInput < 0 ? 'red' : 'green' }}>

                <span className="fields"> Amount : {t.amountInput}</span>
                <span className="fields"> Vendor : {t.vendorInput}</span>
                <span className="fields"> Category : {t.categoryInput}</span>

                <button className="remove" onClick={this.deleteTransaction} style={{ color: "red" }}>  Remove Transaction</button>

            </div>

        )

    }


}
export default Transaction