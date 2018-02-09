
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
            modalView: false,
            bigImage: '',
            select: '',
        };
    }

    refresh() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(album => album.json())
            .then((a) => {
                let b = a.slice(95);
                this.setState({albums: b})
            });
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(photo => photo.json())
            .then((p) => {
                let b = p.slice(4750);
                this.setState({photos: b})
            })
    }

    componentDidMount() {
        this.refresh()
    }

    render() {
        let finallyData = [];
        let album = this.state.albums;
        if(this.state.select !== ''){
            album = album.filter((el)=>{
                let a = el.id.toString();
                let b = this.state.select;
                return a === b;
            });
        }
        for (let i = 0; i < album.length; i++) {
            for (let j = 0; j < this.state.photos.length; j++) {
                if (this.state.photos[j].albumId === album[i].id) {
                    finallyData.push({
                        id: album[i].id,
                        title: album[i].title,
                        img: this.state.photos[j].thumbnailUrl,
                        imgF: this.state.photos[j].url,
                        subtitle: this.state.photos[j].title,
                    });

                }
            }
        }
        let finD = finallyData.map((photo, i) => {
            return (
                <div key={i} className="col-3">
                    <div className="col-8">
                        {/*<small>{photo.id}</small>*/}
                        <h4 className="text-center">{photo.title}</h4>
                        <div className="text-center">
                            <img onClick={() => this.setState({modalView: true, bigImage: photo.imgF})}
                                 className="img_g" alt="Img" src={photo.img}/>
                        </div>
                        <p className="text-center">{photo.subtitle}</p>
                    </div>
                    <br/>
                </div>
            )
        });
        let listF = this.state.albums.map((album, i)=> {
            return(
                 <option key={i} value={album.id}>{album.title}</option>
            )
            });
        console.log('list',listF)
        return (
            <div>
                <Modal open={this.state.modalView} onClose={() => this.setState({modalView: false})} little>
                    <img alt="Img" src={this.state.bigImage}/>
                </Modal>
                <br/>
                <div className="row">
                    <select className="offset-4 col-5 form-control" onChange={(e)=>this.setState({select:e.target.value})}>
                        <option value={''}>All albums</option>
                    {listF}
                    </select>
                </div>
                <br/><br/>
                <div className="row">
                    {finD}
                </div>
            </div>
        )
    }
}

