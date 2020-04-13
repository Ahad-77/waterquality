import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Industries = props => (
    <tr>
      <td>{props.industries.industry_name}</td>
      <td>{props.industries.crn}</td>
      <td>{props.industries.irn}</td>
      <td>{props.industries.category}</td>
      <td>{props.industries.no_violations}</td>
      <td>{props.industries.location}</td>
      <td>{props.industries.status}</td>
      <td>{props.industries.industry_status}</td>
      <td>
      <Link to={"/edit/"+props.industries._id}>edit</Link> 
      </td> 

    </tr>
  )

export default class Violations extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeFine = this.onChangeFine.bind(this);        
        this.onChangename_of_industry_visited = this.onChangename_of_industry_visited.bind(this);        
        this.onChangeapproved_status = this.onChangeapproved_status.bind(this);        
        this.onChangelocation = this.onChangelocation.bind(this);        
        this.onChangeprev_violations = this.onChangeprev_violations.bind(this);        
        this.onChangeviolated_param = this.onChangeviolated_param.bind(this);        
        this.onSubmit = this.onSubmit.bind(this);        


        this.state = {
            fine: 0 ,
            name_of_industry_visited:'',
            prev_violations:0,
            location:'',
            approved_status:'',//violated or not violated
            violated_param:'',
            industry_name:[],
            //industinfo:[]
            industries: [],
           
        }
    }
    

    componentDidUpdate() {//list of industries info before determining the violation
        axios.get('http://localhost:5000/Industries/')
          .then(response => {
            this.setState({ industries: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
      
    componentDidMount(){//selecting industries name
        axios.get('http://localhost:5000/Industries/')
        .then(response=>{
            if(response.data.length > 0){
                this.setState({
                    industry_name: response.data.map(name_of_industry_visited=>name_of_industry_visited.industry_name),
                    name_of_industry_visited: response.data[0].name_of_industry_visited,
                    

                })
            }
        })
    }




    onChangeFine(e) {
        this.setState({
            fine: e.target.value
        });
    }
    onChangename_of_industry_visited(e) {
        this.setState({
            name_of_industry_visited: e.target.value
        });
    }
    
    onChangeprev_violations(e) {
        this.setState({
            prev_violations: e.target.value
        });
    }
    onChangelocation(e) {
        this.setState({
            location: e.target.location 
        });
    }
    onChangeapproved_status(e) {
        this.setState({
            approved_status: e.target.value
        });
    }
    onChangeviolated_param(e) {
        this.setState({
            violated_param: e.target.value
        });
    }
        onSubmit(e) {
            e.preventDefault();
          
           const violation = {
             name_of_industry_visited: this.state.name_of_industry_visited,
             prev_violations: this.state.prev_violations,
             location: this.state.location,
             approved_status: this.state.approved_status,
             violated_param: this.state.violated_param,
             fine: this.state.fine,
            
            }

            console.log(violation);
            
       axios.post('http://localhost:5000/Violations/add', violation)
       .then(res => console.log(res.data));
        
    }


    IndustryList() {
        return this.state.industries.map(currentIndustry => {
          return <Industries industries={currentIndustry}  key={currentIndustry._id}/>;
        })
      }

    render() {
        return (
            <div style={{marginTop: 10}}>

            <div>
            <h3>List of Industries</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name of Industry </th>
                  <th>Commercial registration number</th>
                  <th>International registration number</th>
                  <th>Category</th>
                  <th>Number of Violations</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Industry Status</th>
                </tr>
              </thead>
              <tbody>
                { this.IndustryList() }
              </tbody>
            </table>
          </div>
            
            <h3>Add Fine for Violation:</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                    <label>Industry Name: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.name_of_industry_visited}
                        onChange={this.onChangename_of_industry_visited}>
                        {
                            this.state.industry_name.map(function(industry_name){
                                return <option 
                                  key={industry_name}
                                  value={industry_name}>{industry_name}
                            </option>
                            })
                        }
                        </select>
                </div>
                <div className="form-group"> 
                    <label>Fine: </label>
                    <input  type="number"
                            className="form-control"
                            value={this.state.fine}
                            onChange={this.onChangeFine}
                            />
                </div>
                <div className="form-group">
                <h4>Approve Violation:</h4>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="Approving" 
                                id="Approving1" 
                                value="Approved"
                                checked={this.state.approved_status==='Approved'} 
                                onChange={this.onChangeapproved_status}
                                />
                        <label className="form-check-label">Approved</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="Approving" 
                                id="Approving2" 
                                value="Rejected" 
                                checked={this.state.approved_status==='Rejected'} 
                                onChange={this.onChangeapproved_status}
                                />
                        <label className="form-check-label">Rejected</label>
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Approve Violation" className="btn btn-primary" />
                </div>
                
            </form>
        </div>
    )
        
    }
}
