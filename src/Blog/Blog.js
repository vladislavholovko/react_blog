import React, { Component } from 'react';
import './Blog.css';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchItems: [],
      searchInput: '',
    };
    this.filterList = this.filterList.bind(this);
  }

  getData(){
    fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => {
    return response.json();
  }).then(data => {
    this.setState({posts: data},()=>console.log("state", this.state.posts));
    })
  }

  componentDidMount() {
    this.getData();
  }

  sortTitle(){
    let posts = this.state.posts;
    posts.sort((a,b)=>{
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    })
    console.log(posts)
    this.setState({posts})
  }

  sortId(){
    let posts = this.state.posts;
    posts.sort((a,b)=>{
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    })
    console.log(posts)
    this.setState({posts})
  }
  
  filterList(e) {
    let inputValue = e.target.value;
    let posts = this.state.posts;
    let searchResult = posts.filter(function(el){
      let searchArr = el.body;
      let res = searchArr.indexOf(inputValue.toLowerCase()) !== -1;
      return res;
    });
  this.setState({
    searchItems:searchResult,
    searchInput:inputValue
  });
  }

  render() {
    let posts = this.state.searchInput === '' ? this.state.posts.map((res,i)=>{
      return(
        <div key={i}>
          <ul>
            {/* <li className="post-text">{res.id}</li> */}
            <li className="post-title">{res.title}</li>
            <li className="post-text">{res.body}</li>  
          </ul>
        </div>
      )
    }) : this.state.searchItems.map((res,i)=>{
      return(
        <div key={i}>
          <ul>
            {/* <li className="post-text">{res.id}</li> */}
            <li className="post-title">{res.title}</li>
            <li className="post-text">{res.body}</li>  
          </ul>
        </div>
      )
    })
    return (
      <div className="Blog">
        <div className="row">  
          <div className="sort-container col-lg-4">
            <h3>Sort posts</h3>
              <button className="id-sort" onClick={() => this.sortId()}>id</button>
              <button className="title-sort" onClick={() => this.sortTitle()}>title</button>
          </div>
          <div className="filter-container col-lg-4">
            <h3>Search for body</h3>
            <input value={this.state.searchInput} type="text" placeholder="Search" onChange={this.filterList}/>
          </div>
          <div className="list-refresh col-lg-4">
            <h3>Refresh list</h3>
            <button className="refresh-button" onClick={() => {
                this.getData()
                this.setState({
                  searchInput:''
                })
              }}>&#128472;</button>
          </div>
        </div>  
        {posts}        
      </div>
    );
  }
}

export default Blog;
