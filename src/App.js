import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Transactions from "./components/Transactions";
import Breakdown from './components/BreakDown';
import Operations from "./components/Operations";
import axios from 'axios';



class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions:[],
      // balance:Number
      // id:Number
      

    };
  }
  
  

  // pushtoState=(obj)=>{
  //   let x=[...this.state.transactions]
  //   x.push(obj)  
  //   this.setState({
  //     transactions:x
  //   })
  // }

  componentDidMount(){
    axios.get('http://localhost:4000/transactions')
    .then(response =>{this.setState({transactions:response.data})
    })
    .catch(error =>{console.log(error)})
  }

   getTransaction(){
    return  axios.get('http://localhost:4000/transactions')
    
  }

   updateTransactions=async(transaction)=>{
    //  console.log(transaction)
    await axios.post('http://localhost:4000/transaction',transaction)
    let response=await this.getTransaction()
    // console.log(response)
    this.setState({transactions:response.data})
  }

 


    deleteTransaction=async(id)=>{
      // console.log(id)
     await axios.delete(`http://localhost:4000/transaction/${id}`)
     

     let response=await this.getTransaction()
     this.setState({transactions:response.data})
   }
  
    


 

  render(){
    
    return(
      <Router>
        <div className="App"> <h2 style={{backgroundColor:"white"}}>Bank App</h2>
          <div className="main-links">
         <div>
           <Link className="main-links" to="/transactions">
              Transactions
            </Link> </div> 
            <div> 
            <Link className="main-links" to="/operations">
              Operations
            </Link>
            </div> 
            <div> 
            <Link className="main-links" to='/Breakdown'>
              Breakdown
            
            </Link>
            </div> 
            
          </div>

          <Route
            path="/operations"
            exact 
            render={() => (
              <Operations
        
                // pushtoState={this.pushtoState}
                updateTransactions={this.updateTransactions}
               
                transactions={this.state.transactions}
                getTransaction={this.getTransaction}
                deleteTransaction={this.deleteTransaction}
               
               
              />
            )}
          />

           <Route
            path="/transactions"
            exact
            render={() => (
              <Transactions
                deleteTransaction={this.deleteTransaction}
                transactions={this.state.transactions}
                
              />
            )}
          />

          <Route path="/BreakDown"
          exact 
          render={()=>(
            <Breakdown
            transactions={this.state.transactions}/>
          )}>

          </Route>

         

          
          




        </div>



      </Router>
    )
    
   
    
  }




  
}


export default App;
