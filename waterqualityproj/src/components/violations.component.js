import React, { Component } from 'react';
import axios from 'axios';

export default class Violations extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeFine = this.onChangeFine.bind(this);        


        this.state = ({
            fine: '' 
        });
    }
    
    onChangeFine(e) {
        this.setState({
            fine: e.target.value
        });
    }

        onSubmit(e) {
            e.preventDefault();
          
           const Violation = {
             fine: this.state.fine }

            console.log(Violation);

        axios.post('http://localhost:5000/violations/add', Violation)
        .then(res => console.log(res.data));
        
             
        this.setState({
            fine: ''
           
        })
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>Add Fine for Violation</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Fine: </label>
                    <input  type="number"
                            className="form-control"
                            value={this.state.fine}
                            onChange={this.onChangeFine}
                            />
                </div>
                <div className="form-group">
                    <input type="submit" value="Approve Violation" className="btn btn-primary" />
                </div>
                
            </form>
        </div>
    )
        
    }
}
