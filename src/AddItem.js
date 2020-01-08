import React from 'react';
import './App.css';

class AddItem extends React.Component{
    
    constructor() {
        super();
        this.state = {Product:{},Qty:0};
    }

    addItem = (e) => {
            e.preventDefault();
            e.target.reset();
            if (this.state.Qty !== 0) {
                let obj = this.props.products.filter(o => (o.name)===this.state.Product);
                let newid = this.props.cartId + 1;
                let item2add = {
                    id:newid,
                    product:obj[0],
                    quantity:this.state.Qty,
                }
                this.props.addToCart(item2add);
            }
            this.setState({Product:{}, 
                           Qty:0});
    }


    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    render () {
            return (
                <div className="container">
                <form onSubmit={this.addItem}>
              
                    <div className ="form-group col-md-4">
                            <label htmlFor= "Qty"> Quantity </label> 
                            <input  type="text" className="form-control" id="Qty" onChange={this.onChange}></input>
                        </div>

                        <div className ="form-group col-md-8">
                            <label htmlFor= "Product"> Product </label> 
                            <select className ="form-control form-control-lg col-md-8" id="Product" onChange={this.onChange}>
                            <option value=" ">Select One</option>
                                {this.props.products.map( (element) => <option key={element.id} value={element.name}>{element.name}</option>)}
                            </select>
                        </div> 
                    
                        <div className="form-group">
                            <input type="submit" value=" ADD " />
                        </div>
                </form>
                </div>
            );
    }
  }

// Write Fucntion Submit Button 
// gET THE SELECTED ELEMENT, get the id 
// get the name, price from proucts for that matches the given id using .filter

export default AddItem;