import React, { Component } from 'react';
import Iframe from 'react-iframe';


export default class listindust extends Component {
    render() {
        return (
            <div>
                
                <iframe style={{background: '#FFFFFF', border: 'none'}}
                width='340' 
                height='380'
                 src="https://charts.mongodb.com/charts-waterqualityproj-xhifl/embed/charts?id=f641bb65-ef87-45ad-9612-18c7f3ef6366&autorefresh=60&theme=light" >
                 </iframe>

                 <iframe style={{background: '#FFFFFF', border: 'none'}}
                width='340' 
                height='380'
                 src="https://charts.mongodb.com/charts-waterqualityproj-xhifl/embed/charts?id=cb4c657f-0409-4ae8-ba79-77894f01a97a&theme=light" >
                 </iframe>

                 <iframe style={{background: '#FFFFFF', border: 'none'}}
                width='340' 
                height='380'
                 src="https://charts.mongodb.com/charts-waterqualityproj-xhifl/embed/charts?id=28e03472-0d22-4b83-8024-24420edb230d&theme=light" >
                 </iframe>

                 <iframe style={{background: '#FFFFFF', border: 'none'}}
                width='340' 
                height='380'
                 src="https://charts.mongodb.com/charts-waterqualityproj-xhifl/embed/charts?id=a4dbb2b2-2ee6-4be4-ac0e-42432594d98f&theme=light" >
                 </iframe>

             </div>
        )
    }
}