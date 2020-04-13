import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Violations = props => (
    <tr>
      <td>{props.violations.name_of_industry_visited}</td>
      <td>{props.violations.prev_visitation}</td>
      <td>{props.violations.location}</td>
      <td>{props.violations.approved_status}</td>
      <td>{props.violations.violated_param}</td>
      <td>{props.violations.fine}</td>
      <td>
        <Link to={"/edit/"+props.violations._id}>edit</Link> | <a href="#" onClick={() => { props.deleteViolation(props.violations._id) }}>delete</a>
      </td>
    </tr>
  )


export default class violationlist extends Component {
    constructor(props) {
        super(props);
    
        this.deleteViolation = this.deleteViolation.bind(this)
    
        this.state = {violations: []};}
        componentDidMount() {
            axios.get('http://localhost:5000/violations/')
              .then(response => {
                this.setState({ violations: response.data })
              })
              .catch((error) => {
                console.log(error);
              })
          }

          deleteViolation(id) {
            axios.delete('http://localhost:5000/violations/'+id)
              .then(response => { console.log(response.data)});
        
            this.setState({
                violations: this.state.violations.filter(el => el._id !== id)
            })
          }

          ViolationList() {
            return this.state.violations.map(currentViolation => {
              return <Violations violations={currentViolation} deleteViolation={this.deleteViolation} key={currentViolation._id}/>;
            })
          }
        

    render() {
        return (
            <div>
            <h3>List of Violations</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name of Industry Visited</th>
                  <th>Prevouis Visitation</th>
                  <th>Location</th>
                  <th>Approved Status</th>
                  <th>Violated Parameters</th>
                  <th>Fine</th>
                </tr>
              </thead>
              <tbody>
                { this.ViolationList() }
              </tbody>
            </table>
          </div>
        )
    }
}