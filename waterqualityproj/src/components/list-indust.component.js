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
        <Link to={"/edit/"+props.industries._id}>edit</Link> | <a href="#" onClick={() => { props.deleteIndustry(props.industries._id) }}>delete</a>
      </td>
    </tr>
  )


export default class listindust extends Component {
    constructor(props) {
        super(props);
    
        this.deleteIndustry = this.deleteIndustry.bind(this)
    
        this.state = {industries: []};}
        componentDidMount() {
            axios.get('http://localhost:5000/industries/')
              .then(response => {
                this.setState({ industries: response.data })
              })
              .catch((error) => {
                console.log(error);
              })
          }

          deleteIndustry(id) {
            axios.delete('http://localhost:5000/industries/'+id)
              .then(response => { console.log(response.data)});
        
            this.setState({
                industries: this.state.industries.filter(el => el._id !== id)
            })
          }

          IndustryList() {
            return this.state.industries.map(currentIndustry => {
              return <Industries industries={currentIndustry} deleteIndustry={this.deleteIndustry} key={currentIndustry._id}/>;
            })
          }
        

    render() {
        return (
            <div>
            <h3>List of Violations</h3>
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
        )
    }
}