//Main.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAltV, faBookmark, faComment, faEnvelope, faShare, faUserPlus, faUsers, faUserTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import firebase from './firebase.js'
import { useState, useEffect } from 'react';
import guest from './assets/guest.png'
import alyssa from './assets/alyssa.jpg'
import christina from './assets/christina.jpg'
import kyra from './assets/kyra.jpg'
import lauren from './assets/lauren.jpg'
import hannah from './assets/hannah.jpg'
import katie from './assets/katie.jpg'
import amanda from './assets/amanda.jpg'
import ehsan from './assets/ehsan.jpg'
import michael1 from './assets/michael1.jpg'
import michael2 from './assets/michael2.jpg'




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
					<img className="profilePhoto" src={michael2} alt="Profile" />
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
					<a href="https://unsplash.com/s/photos/chihuahua">Pics</a>
					<a href="https://www.youtube.com/watch?v=1cpU0S_4wRI">Videos</a>
				</div>
				<div className="contactMenu">
					<h3>Contacting Michael</h3>
					<div className="menu">
						<div>
							<FontAwesomeIcon icon={faEnvelope} className="faIcons" />
							<a href="#comment">Send Message</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faShare} className="faIcons" />
							<a href="#comment">Forward to Friend</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faUserPlus} className="faIcons" />
							<a href="#comment">Add to Friends</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faBookmark} className="faIcons" />
							<a href="#comment">Add to Favourites</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faComment} className="faIcons" />
							<a href="#comment">IM / Call</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faUserTimes} className="faIcons" />
							<a href="#comment">Block User</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faUsers} className="faIcons" />
							<a href="#comment">Add to Group</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faArrowsAltV} className="faIcons" />
							<a href="#comment">Rank User</a>
						</div>
					</div>
				</div>
				<div className="urlContainer">
					<h3>My URL:</h3>
					<a href="https://codelikemike.dev/">https://codelikemike.dev</a>
				</div>
				<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=u4FF6MpcsRw' width='285px' height='250px' />
			</section>

			<section className="rightSection">
				<h2>Michael is in your extended network</h2>
				<div className="blogSection">
					<p>Michael's Latest Blog Entry</p>
					<a href="https://jtmikee.medium.com/"><span>[</span>Subscribe to this Blog<span>]</span></a>
				</div>
				<div className="viewBlog">
					<a href="https://jtmikee.medium.com/the-climb-242056929537"><span>[</span>View All Blog Entries<span>]</span></a>
				</div>
				<div className="aboutMeSection">
					<h3>Michael's Blurbs</h3>
					<div className="aboutMe">
						<h4>About me:</h4>
						<p>My name is Michael and I'm a Front End Web Developer! 💻 Currently attending Juno College and I'm apart of Cohort 31. I have a chihuahua named Chai who has claimed me as her life partner. I wanted to recreate a MySpace page for myself to soothe my nostalgic itch I constantly have. <span>Click around</span> and find some of the things I've created or things I enjoy.  </p>
						<h4>Who I'd like to meet:</h4>
						<p className="rainbow">You!! <span>Please leave a comment down below.</span> Let me know what you think of my page, any recommendations of your favourite things, your favourite nostalgic memory or anything else you'd like.
						<span> </span>
							<span className="red">K</span>
							<span className="orange">E</span>
							<span className="yellow">E</span>
							<span className="green">P</span>
							<span> </span>
							<span className="blue">I</span>
							<span className="indigo">T</span>
							<span> </span>
							<span className="blue">K</span>
							<span className="green">I</span>
							<span className="yellow">N</span>
							<span className="orange">D</span>
							<span className="red">!</span>
						 ⭐️ </p>
					</div>
					<div className="topFriends">
						<h3>Michaels Friends Space</h3>
						<p>Michael has <span>248</span> friends</p>
						<div className="topEight">
							<div>
								<h4>Ehsan</h4>
								<img src={ehsan} alt="Top Friend 1" />
							</div>
							<div>
								<h4>Alyssa</h4>
								<img src={alyssa} alt="Top Friend 2" />
							</div>
							<div>
								<h4>Hannah</h4>
								<img src={hannah} alt="Top Friend 3" />
							</div>
							<div>
								<h4>Lauren</h4>
								<img src={lauren} alt="Top Friend 4" />
							</div>
							<div>
								<h4>Christina</h4>
								<img src={christina} alt="Top Friend 5" />
							</div>
							<div>
								<h4>Kyra</h4>
								<img src={kyra} alt="Top Friend 6" />
							</div>
							<div>
								<h4>Amanda</h4>
								<img src={amanda} alt="Top Friend 7" />
							</div>
							<div>
								<h4>Katie</h4>
								<img src={katie} alt="Top Friend 8" />
							</div>

						</div>
					</div>
				</div>
				<div className="commentSection" id="comment">
					<h3>Michaels Comments</h3>
					<form action="" onSubmit={handleSubmit}>
						<label htmlFor="leaveComment">Displaying All Comments</label>
						<div>
							<textarea placeholder="Leave me a comment!" type="text" name="leaveComment" id="leaveComment" cols="30" rows="10" maxlength="200" value={textInput} onChange={handleChange}></textarea>
							{/* <input type="text" id="leaveComment" value={textInput} onChange={handleChange} /> */}
							<button className="addButton">Add Comment</button>
						</div>
					</form>


					{/* map through commentsArray */}
					<ul className="userCommentSection">
						<div className="userComment">
							<img src={guest} alt="guest" />
							<li>Omg Michael!! I love your page! You're so handsome and funny 💕💕💕💕💕💕💕 PS #FreeBritney 🌹</li>
						</div>
						<div>
							<p className="firstDate">Wed Mar 10 2021</p>
						</div>
						{
							commentsArray.map((comment) => {
								const date = new Date();
								return (
									<>
										<div className="userComment">
											<img src={guest} alt="guest" />
											<li key={comment.commentsKey}>
												{comment.userComment}
											</li>

											
										</div>
										<div className="date">
											<p>{date.toDateString()}</p>
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