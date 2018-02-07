import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const MyGoogleMapComponent = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: -34.397, lng: 150.644}}
    >
        <Marker
            position={{lat: -34.397, lng: 150.644}}
        />
    </GoogleMap>
));
// const MyGoogleMapComponent = withGoogleMap(props => (
//     <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{lat: -34.397, lng: 150.644}}
//     >
//         <Marker
//             position={{lat: -34.397, lng: 150.644}}
//         />
//     </GoogleMap>
// ));


export default class Users extends React.Component {
    constructor() {
        super();
        this.state = {users:[]};
        this.allUsers = this.allUsers.bind(this);
    };


    allUsers () {
        return this.state.users.map((value, i) => {
            return (
                <div key={i} className="border rounded m-1 my-2 " style={{width: "48%"}}>
                    <div className="d-flex justify-content-center my-1"><h3>{value.name}</h3></div>
                    <hr className="w-50"/>

                    <div className="m-1 d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                            <div className="mx-1"><b>Username:</b> {value.username}</div>
                            <div className="mx-2 px-1 border rounded"><b>ID:</b> {value.id}</div>
                        </div>
                        <div className="mx-1"><b>Email: </b>{value.email}</div>
                    </div>
                    <div className="d-flex justify-content-end mx-1">
                        <div className="mx-1"><b>Phone: </b>{value.phone}</div>
                    </div>
                    <hr className="w-75"/>

                    <div className="m-1">
                        <div className="mx-1">
                            <b>Address: </b>
                            <i>City: </i>{value.address.city}, {value.address.street}, {value.address.suite}. <i>Zip</i> {value.address.zipcode}.
                        </div>
                        <div className="m-1 border rounded d-inline-flex">
                            <b>Geo: </b>( {value.address.geo.lat} ),({value.address.geo.lng}).
                        </div>
                    </div>
                    <hr className="w-75"/>

                    <div className="border rounded m-2">

                        <div className="m-1 d-flex justify-content-center">
                            <h6><b>COMPANY</b></h6>
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
                            <b>Web-site: </b><a href="#">{value.website}</a>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <div  className="d-flex justify-content-center m-3">
                    <h1>Users list</h1>
                </div>
                <div className="d-flex flex-wrap justify-content-between m-2">
                    {this.allUsers()}
                </div>
                <div>
                    <MyGoogleMapComponent containerElement={<div style={{height: '500px'}}/>} mapElement={<div style={{height: '500px'}}/>}/>
                </div>
            </div>
        );
   }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {this.setState({users: data})})
    };
}

