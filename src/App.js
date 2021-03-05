import './App.css';
import firebase from './firebase.js'
import { useState, useEffect } from 'react';

function App() {

  //setup empty comments array in state
  const [ commentsArray, setCommentsArray ] = useState([]);

  //setup state for the text input for the comments 
  const [ textInput, setTextInput ] = useState("");

  //setup useEffect for database
  useEffect(() => {
    const databaseRef = firebase.database().ref();

    databaseRef.on('value', (data) => {

      const commentsData = data.val();

      const commentsEmptyArray = [];

      for (let commentsKey in commentsData) {
        commentsEmptyArray.push({
          key: commentsKey,
          userComment: commentsData[commentsKey]
        })
      }

      setCommentsArray(commentsEmptyArray);

    })

  }, []);

  // input onChange handler
  const handleChange = (event) => {
    setTextInput(event.target.value)
  }
  //form onsubmit handler 
  const handleSubmit = (event) => {
    event.preventDefault();
    const databaseRef = firebase.database().ref();
    databaseRef.push(textInput);
    setTextInput("")
  }

  const handleClick = (commentKey) => {
    const databaseRef = firebase.database().ref();
    databaseRef.child(commentKey).remove();
  }







  return (
    <div className="App">

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="leaveComment">Displaying All Comments</label>
        <input type="text" id="leaveComment" value={textInput} onChange={handleChange}/>
        <button>Add Comment</button>
      </form>


      {/* map through commentsArray */}
      <ul className="commentSection">
        {
          commentsArray.map((comment) => {
            return (
              <>
              <li key={comment.commentsKey}>
                {comment.userComment}
              </li>
              <button onClick={ () => {handleClick(comment.key)}}>Delete Comment</button>
              </>
            )
          })
        }
        <li>Comment One</li>
        <li>Comment Two</li>
        <li>Comment Three</li>

      </ul>
      
    </div>
  );
}

export default App;
