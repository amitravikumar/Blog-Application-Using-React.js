import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Post from "../components/Post";
import { Button } from "reactstrap";
import handleTitleChange from "./components/Post";
import handleSubjectChange from "./components/Post";

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/Blog';

const PostPage = () => {
  const [post, setPost] = useState({});

  const { params } = useRouteMatch();
  const { goBack } = useHistory();

<div className="form-group">
  <input type="text" onChange={this.handleTitleChange} className="form-control" id="title" name="title" placeholder="Title" maxlength="35" required />
<div/>
 
<div className="form-group">
  <textarea className="form-control" onChange={this.handleSubjectChange} type="textarea" id="subject" placeholder="Subject" maxlength="200" rows="8"></textarea>
<div/>


  useEffect(() => {
    fetch(`https://sfcbc.csb.codesandbox.io/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.post);
      });
  },[params]);

  return (
    <>
      <Button onClick={goBack}>Back</Button>
      <Post
        id={post._id}
        author={post.author?.name}
        title={post.title}
        content={post.content}
      />
    </>
  );
};

constructor(props) {
  super(props);
  this.handleTitleChange = this.handleTitleChange.bind(this);
  this.handleSubjecChange = this.handleSubjectChange.bind(this);
  this.state = {
    title:'',
    subject:''
  };
}

addPost(){
  axios.post('/Postpage', {
    title: this.state.title,
    subject: this.state.subject
  })
  .then(function (response) {
    console.log('response from add post is ',response);
    hashHistory.push('/')
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = {
    addPost: function(title, subject, callback){
        MongoClient.connect(url, function(err, db) {
            db.collection('post').insertOne( {
                "title": title,
                "subject": subject
            },function(err, result){
                assert.equal(err, null);
                console.log("Saved the blog post details.");
                if(err == null){
                    callback(true)
                }
                else{
                    callback(false)
                }
            });
        });
    }
}

export default PostPage;
