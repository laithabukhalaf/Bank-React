import React, { Component } from "react";

import Transaction from "./Transaction";

class Transactions extends Component{
   

    render(){
        let transactions=this.props.transactions
        
        
        return(
            <div className="transactions">
                
                {transactions.map(t => (<Transaction deleteTransaction={this.props.deleteTransaction}transactions={t} />
          
          
        ))}
        
            </div>
        )
    }
}


export default Transactions