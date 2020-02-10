import React, { Component } from 'react'

class BreakDown extends Component {
   
 
    render() {
        let transactions=this.props.transactions
        // console.log(transactions)
        let categoryoutput=transactions.reduce(function(total,obj){
            // console.log(total)
            if(!total[obj.categoryInput]){
                total[obj.categoryInput]=0
            }

            total[obj.categoryInput]+=obj.amountInput
            return total
            
        }, {})
        // console.log(categoryoutput)

        let categories=Object.keys(categoryoutput)
        // console.log(categories)
        return(
            <div className="BreakDown">
                {categories.map(c=><div key={c}> category : {c}  total : {categoryoutput[c]}</div>)}
            </div>
        )
       

            
            



        

       
        
           
    }
}

export default BreakDown
