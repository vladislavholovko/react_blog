import React from 'react';
import {MyGoogleMapComponent} from './Map';

export default class ImportUsers extends React.Component {
    constructor() {
        super();
        this.state = {users:[]};
        this.allUsers = this.allUsers.bind(this);
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {this.setState({users: data})})
    };

    allUsers () {
        return this.state.users.map((value, i) => {
            return (
                <div key={i} className="border rounded m-1 my-2 " style={{width: "32%", backgroundColor: "#e2e2e2"}}>
                    <div className="d-flex justify-content-center">
                        <img src="http://somnienghr.com/images/employees/icon-user.png" className="border border-secondary rounded-circle m-2 w-25 h-25" />
                    </div>
                    <div className="d-flex justify-content-center my-1"><h3>{value.name}</h3></div>
                    <hr className="w-50"/>

                    <div className="m-1 d-flex flex-row justify-content-between">
                        <div className="mx-1"><b>Username:</b> {value.username} 	&#x2714;</div>
                        <div className="mx-1"><b>&#x2709; </b>{value.email}</div>
                    </div>
                    <div className="m-1 d-flex flex-row justify-content-between">
                        <div className="mx-1 border rounded"><b>ID:</b> {value.id}</div>
                        <div className="mx-1"><b>&#x260f; </b>{value.phone}</div>
                    </div>
                    <hr className="w-75"/>

                    <div className="m-1">
                        <div className="mx-1">
                            <b>Address: </b>
                            <i>City: </i>{value.address.city}, {value.address.street}, {value.address.suite}. <i>Zip</i> {value.address.zipcode}.
                        </div>
                        <div className="m-1 border rounded d-inline-flex">
                            <b>&#x261e; Geo: </b>( {value.address.geo.lat} ),({value.address.geo.lng}).
                        </div>
                    </div>
                    <hr className="w-75"/>

                    <div className="m-2">
                        <div className="m-1 d-flex justify-content-center">
                            <h6><b><u>COMPANY</u></b></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h4><b>{value.company.name}</b></h4>
                        </div>
                        <div className="d-flex justify-content-center">
                            <i>"{value.company.catchPhrase}"</i>
                        </div>
                        <hr className="w-25"/>
                        <div className="m-2">
                            <b>Direction of activity: </b> {value.company.bs} .
                        </div>
                        <div className="d-flex justify-content-end m-2">
                            <b>&#9993; : </b><a href="#">{value.website}</a>
                        </div>
                    </div>
                </div>
            );
        })
    }


    render() {
        let geolist=[];
        this.state.users.map(value => {
            let info = {
                lat : value.address.geo.lat,
                lng : value.address.geo.lng,
                name : value.name
            };
            return geolist.push(info);
        });

        return (
            <div>
                <div  style={{backgroundColor: "#d6d6d6"}} className="d-flex justify-content-center border m-3">
                    <h1>Users list</h1>
                </div>
                <div className="d-flex flex-wrap justify-content-between m-2 ">
                    {this.allUsers()}
                </div>
                <hr/>
                <div  style={{backgroundColor: "#d6d6d6"}} className="d-flex justify-content-center border m-3">
                    <h1>User account map</h1>
                </div  >
                <div className="mx-auto mb-3 w-75">
                    <MyGoogleMapComponent geolist = {geolist} containerElement={<div style={{height: '700px'}}/>} mapElement={<div style={{height: '700px'}}/>}/>
                </div>
                <br/><br/>
            </div>
        );
    }
}
