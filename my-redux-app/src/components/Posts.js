import React, {Component} from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  
  componentWillMount(){
    this.fetchPosts('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
          this.setState({
            posts: data
          })
        })
        .catch(err => console.log(err))
  }
  
  fetchPosts = async (url) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  }
  
  render() {
    const postItems = this.state.posts.map((post) => {
      return (
        <div key={post.id}>
          <h1> title: {post.title} </h1>
          <p> body: {post.body} </p>
          <hr/>
        </div>
      )
    });

    return (
      <div>
        <h1> Posts </h1>
        {postItems}
      </div>
    )
  }
}

export default Posts;

