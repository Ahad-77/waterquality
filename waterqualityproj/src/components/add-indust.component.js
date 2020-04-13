import React, { Component } from 'react';
import axios from 'axios';

export default class addindust extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeIndustryName = this.onChangeIndustryName.bind(this);
        this.onChangecrn = this.onChangecrn.bind(this);
        this.onChangeirn = this.onChangeirn.bind(this);
        this.onChangecategory = this.onChangecategory.bind(this);
        this.onChangeIndustStatues = this.onChangeIndustStatues.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeNo_Violations = this.onChangeNo_Violations.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = ({
            industry_name: '',
          //commercial registration number crn
            crn: '',
         //international registration number irn
            irn: '',
            category: '',
            industry_status:'',
            location:'',
            status:'',
            no_violations:''
           
        });
    }
    onChangeIndustryName(e) {
        this.setState({
            industry_name: e.target.value
        });
    }

    onChangeIndustStatues(e) {
        this.setState({
            industry_status: e.target.value
        });
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }

    onChangecrn(e) {
        this.setState({
            crn: e.target.value
        });
    }

    onChangeirn(e) {
        this.setState({
            irn: e.target.value
        });
    }
       

        onChangecategory(e) {
            
            this.setState({
                category: e.target.value
            });
        }
        onChangeStatus(e) {
            
            this.setState({
                status: e.target.value
            });
        }
        onChangeNo_Violations(e) {
            
            this.setState({
                no_violations: e.target.value
            });
        }

        onSubmit(e) {
            e.preventDefault();

          const Industries = {
           industry_name: this.state.industry_name,
           crn: this.state.crn,
           irn: this.state.irn,
           category: this.state.category,
           industry_status: this.state.industry_status,
           location: this.state.location ,
           status:this.state.status,
           no_violations:this.state.no_violations }

            console.log(Industries);

        axios.post('http://localhost:5000/Industries/add', Industries)
        .then(res => console.log(res.data));
             
        this.setState({
            industry_name: '',
          //commercial registration number crn
            crn: '',
         //international registration number irn
            irn: '',
            category: '',
            industry_status:'',
            location:'',
            status:'',
            no_violations:''
           
        })
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>Add New Industry</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Industry Name: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.industry_name}
                            onChange={this.onChangeIndustryName}
                            />
                </div>
                <div className="form-group">
                    <label>Commercial registration number: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.crn}
                            onChange={this.onChangecrn}
                            />
                </div>
                <div className="form-group">
                    <label>International registration number: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.irn}
                            onChange={this.onChangeirn}
                            />
                </div>
                <div className="form-group"> 
                    <label>Number of Violations: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.no_violations}
                            onChange={this.onChangeNo_Violations}
                            />
                </div>
                <div className="form-group"> 
                    <label>Status: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangeStatus}
                            />
                </div>
                <div className="form-group"> 
                    <label>Industry Current Status: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.industry_status}
                            onChange={this.onChangeIndustStatues}
                            />
                </div>
                <div className="form-group"> 
                    <label>Location of Industry: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.location}
                            onChange={this.onChangeLocation}
                            />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="Category" 
                                id="Category1" 
                                value="1"
                                checked={this.state.category==='1'} 
                                onChange={this.onChangecategory}
                                />
                        <label className="form-check-label">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="Category" 
                                id="Category2" 
                                value="2" 
                                checked={this.state.category==='2'} 
                                onChange={this.onChangecategory}
                                />
                        <label className="form-check-label">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="Category" 
                                id="Category3" 
                                value="3" 
                                checked={this.state.category==='3'} 
                                onChange={this.onChangecategory}
                                />
                        <label className="form-check-label">3</label>
                    </div>
                </div>


                <div className="form-group">
                    <input type="submit" value="Add Industry" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
        
    }
}
