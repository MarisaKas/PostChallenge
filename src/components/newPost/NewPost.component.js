import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import './NewPost.styles.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: '1',
        submitted: false
    }

    componentDidMount () {
        // If unauth => this.props.history.replace('/');
        console.log( this.props );
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };

          fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: data.title,
              body: data.body,
              userId: data.author
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => {
            console.log( response ); 
            this.props.history.replace('/'); 
            this.setState( { submitted: true } )
          })
          .then(json => console.log(json))
    }


    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/" />;
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={( event ) => this.setState( { title: event.target.value } )} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={( event ) => this.setState( { content: event.target.value } )} />
                <label>Author</label>
                <select value={this.state.author} onChange={( event ) => this.setState( { author: event.target.value } )}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;