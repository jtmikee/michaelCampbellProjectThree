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










  return (
    <div className="App">


      {/* map through commentsArray */}
      <ul className="commentSection">
        {
          commentsArray.map((comment) => {
            return (
              <li key={comment.commentsKey}>
                {comment.userComment}
              </li>
            )
          })
        }

      </ul>
      
    </div>
  );
}

export default App;
