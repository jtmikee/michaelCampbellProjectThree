//Main.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAltV, faBookmark, faComment, faEnvelope, faShare, faUserPlus, faUsers, faUserTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import firebase from './firebase.js'
import { useState, useEffect } from 'react';
import guest from './assets/guest.png'



const Main = () => {

	//setup empty comments array in state
	const [commentsArray, setCommentsArray] = useState([]);

	//setup state for the text input for the comments 
	const [textInput, setTextInput] = useState("");

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
		<main>
			<section className="leftSection">
				<h1>Michael</h1>
				<div className="profileInformation">
					<img src="http://placekitten.com/200/300" alt="Profile Picture" />
					<div>
						<p>He/Him</p>
						<p>28 years old</p>
						<p>Toronto,</p>
						<p>Ontario</p>
						<p>Canada</p>
						<img src="http://www.myspacegens.com/images/online_now/onlinenow.gif" alt="Online Now" />
						<p>Last Login:</p>
						<p>8/24/2008</p>
					</div>
				</div>
				<div className="viewMedia">
					<p>View My:</p>
					<a href="www.google.ca">Pics</a>
					<a href="www.google.ca">Videos</a>
				</div>
				<div className="contactMenu">
					<h3>Contacting Michael</h3>
					<div className="menu">
						<div>
							<FontAwesomeIcon icon={faEnvelope} className="faIcons" />
							<a href="www.google.ca">Send Message</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faShare} className="faIcons" />
							<a href="www.google.ca">Forward to Friend</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faUserPlus} className="faIcons" />
							<a href="www.google.ca">Add to Friends</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faBookmark} className="faIcons" />
							<a href="www.google.ca">Add to Favourites</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faComment} className="faIcons" />
							<a href="www.google.ca">IM / Call</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faUserTimes} className="faIcons" />
							<a href="www.google.ca">Block User</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faUsers} className="faIcons" />
							<a href="www.google.ca">Add to Group</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faArrowsAltV} className="faIcons" />
							<a href="www.google.ca">Rank User</a>
						</div>
					</div>
				</div>
				<div className="urlContainer">
					<h3>MyPlace URL:</h3>
					<a href="www.google.ca">http://www.myplace.com/michaelcampbell</a>
				</div>
				<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=u4FF6MpcsRw' width='285px' height='250px' />
			</section>

			<section className="rightSection">
				<h2>Michael is in your extended network</h2>
				<div className="blogSection">
					<p>Michael's Latest Blog Entry</p>
					<a href="www.google.ca"><span>[</span>Subscribe to this Blog<span>]</span></a>
				</div>
				<div className="viewBlog">
					<a href="www.google.ca"><span>[</span>View All Blog Entries<span>]</span></a>
				</div>
				<div className="aboutMeSection">
					<h3>Michael's Blurbs</h3>
					<div className="aboutMe">
						<h4>About me:</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sed pariatur qui eaque aliquam culpa rerum sunt, dolore quod facilis!</p>
						<h4>Who I'd like to meet:</h4>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos minima id quidem, tempore cupiditate quo excepturi tempora repellat obcaecati?</p>
					</div>
					<div className="topFriends">
						<h3>Michaels Friends Space</h3>
						<p>Michael has <span>248</span> friends</p>
						<div className="topEight">
							<div>
								<h4>Friend</h4>
								<img src="http://placekitten.com/100/100" alt="Top Friend 1" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="http://placekitten.com/100/100" alt="Top Friend 2" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="http://placekitten.com/100/100" alt="Top Friend 3" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="http://placekitten.com/100/100" alt="Top Friend 4" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="http://placekitten.com/100/100" alt="Top Friend 5" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="http://placekitten.com/100/100" alt="Top Friend 6" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="http://placekitten.com/100/100" alt="Top Friend 7" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="http://placekitten.com/100/100" alt="Top Friend 8" />
							</div>

						</div>
					</div>
				</div>
				<div className="commentSection">
					<h3>Michaels Comments</h3>
					<form action="" onSubmit={handleSubmit}>
						<label htmlFor="leaveComment">Displaying All Comments</label>
						<div>
							<textarea placeholder="Leave me a comment!" type="text" name="leaveComment" id="leaveComment" cols="30" rows="10" value={textInput} onChange={handleChange}></textarea>
							{/* <input type="text" id="leaveComment" value={textInput} onChange={handleChange} /> */}
							<button className="addButton">Add Comment</button>
						</div>
					</form>


					{/* map through commentsArray */}
					<ul className="userCommentSection">
						<div className="userComment">
							<img src={guest} alt="guest photo" />
							<li>Omg Michael!! I love your page! You're so handsome and funny 💕💕💕💕💕💕💕 PS #FreeBritney 🌹</li>
						</div>
						{
							commentsArray.map((comment) => {
								return (
									<>
										<div className="userComment">
											<img src={guest} alt="" />
											<li key={comment.commentsKey}>
												{comment.userComment}
											</li>
										<button className="removeButton" onClick={() => { handleClick(comment.key) }}><FontAwesomeIcon icon={faTrashAlt} className="faIcons" /></button>
										</div>
									</>
								)
							})
						}


					</ul>
				</div>


			</section>
		</main>
	)
}

export default Main;