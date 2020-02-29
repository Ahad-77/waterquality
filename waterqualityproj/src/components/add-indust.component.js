import React, { Component } from 'react';
import axios from 'axios';

export default class addindust extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeIndustryName = this.onChangeIndustryName.bind(this);
        this.onChangecrn = this.onChangecrn.bind(this);
        this.onChangeirn = this.onChangeirn.bind(this);
        this.onChangecategory = this.onChangecategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = ({
            industry_name: '',
          //commercial registration number crn
            crn: '',
         //international registration number irn
            irn: '',
            category: ''
           
        });
    }
    onChangeIndustryName(e) {
        this.setState({
            industry_name: e.target.value
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

        onSubmit(e) {
            e.preventDefault();

          const Industries = {
           industry_name: this.state.industry_name,
           crn: this.state.crn,
           irn: this.state.irn,
           category: this.state.category   }

            console.log(Industries);

        axios.post('http://localhost:5000/Industries/add', Industries)
        .then(res => console.log(res.data));
             
        this.setState({
            industry_name: '',
          //commercial registration number crn
            crn: '',
         //international registration number irn
            irn: '',
            category: ''
           
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
