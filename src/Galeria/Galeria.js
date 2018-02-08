import React from 'react';
import Modal from "react-responsive-modal";
import './style.css';

export default class Galeria extends React.Component {
    constructor() {
        super();
        this.state = {
            albums: [],
            photos: [],
            finallyData: [],
            modalView:false,
            bigImage:''
        };
    }

    sortTitle(){
        let albums = this.state.albums;
        albums.sort((a,b)=>{
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            return 0;
        });
        console.log(albums);
        this.setState({finD:albums})
    }

    refresh(){
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(album => album.json())
            .then((a)=>{
                let b=a.slice(95);
                this.setState({albums:b})
            });
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(photo => photo.json())
            .then((p)=>{
                let b = p.slice(4750);
                this.setState({photos:b})
            })
    }

    componentDidMount() {
        this.refresh()
    }
    render() {
        let finallyData = [];
        for (let i = 0; i < this.state.albums.length; i++) {
            for (let j = 0; j < this.state.photos.length; j++) {
                if (this.state.photos[j].albumId === this.state.albums[i].id) {
                    finallyData.push({
                        // id: this.state.albums[i].id,
                        title: this.state.albums[i].title,
                        img: this.state.photos[j].thumbnailUrl,
                        imgF: this.state.photos[j].url,
                        subtitle: this.state.photos[j].title,
                    });

                }
            }
        }
        console.log(finallyData);
        let finD = finallyData.map((photo , i)=>{
            return(
                <div key={i} className="col-3">
                    <div className="col-8">
                        {/*<small>{photo.id}</small>*/}
                        <h4 className="text-center">{photo.title}</h4>
                        <div className="text-center">
                        <img onClick={()=> this.setState({modalView:true, bigImage:photo.imgF})} className="img_g"  alt="Img" src={photo.img}/>
                        </div>
                        <p className="text-center" >{photo.subtitle}</p>
                    </div>
                    <br/>
                </div>
            )
        });
        return (
            <div>
                <Modal open={this.state.modalView} onClose={()=> this.setState({modalView:false})} little>
                    <img  alt="Img" src={this.state.bigImage}/>
                </Modal>
                <br/>
                <div>
                    <button onClick={()=>this.sortTitle()} className="btn btn-light col-5">Filter</button>
                    <button onClick={()=>this.refresh()}  className="btn btn-light offset-2 col-5">Refresh</button>
                </div>
                <br/><br/>
                <div className="row">
                    {finD}
                </div>
            </div>
        )
    }
}
