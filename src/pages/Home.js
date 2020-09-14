import React from "react";
import Post from "../components/Post";
import usePosts from "../hooks/usePosts";
import useHover from "../hooks/useHover";

const Home = () => {
  const posts = usePosts();

  const isHovered = useHover("#title");

  return (
    <div className="container">
      <h1 style={{ color: isHovered ? "red" : "black" }} id="title">
        Welcome To Blog!
      </h1>
      {posts.map((post, index) => {
        return (
          <Post
            id={post._id}
            key={index}
            title={post.title}
            author={post.author.name}
            content={post.content}
            isSummary
          />
        );
      })}
    </div>
  );
};

class AddPost extends React.Component{
  render(){
    return (
      <div className="col-md-5">
        <div className="form-area">  
            <form role="form">
            <br styles="clear:both" />
              <div className="form-group">
                <input type="text" className="form-control" id="title" name="title" placeholder="Title" required />
              </div>
              
              <div className="form-group">
              <textarea className="form-control" type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
              </div>
                 
            <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
            </form>
        </div>
      </div>
    )
  }
}

export default Home;
