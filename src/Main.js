//Main.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faArrowsAltV, faBookmark, faComment, faEnvelope, faShare, faUserPlus, faUsers, faUserTimes } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
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
					<a href="#">Pics</a>
					<a href="#">Videos</a>
				</div>
				<div className="contactMenu">
					<h3>Contacting Michael</h3>
					<div className="menu">
						<div>
							<FontAwesomeIcon icon={faEnvelope} className="faIcons" />
							<a href="#">Send Message</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faShare} className="faIcons" />
							<a href="#">Forward to Friend</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faUserPlus} className="faIcons" />
							<a href="#">Add to Friends</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faBookmark} className="faIcons" />
							<a href="#">Add to Favourites</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faComment} className="faIcons" />
							<a href="#">IM / Call</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faUserTimes} className="faIcons" />
							<a href="#">Block User</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faUsers} className="faIcons" />
							<a href="#">Add to Group</a>
						</div>

						<div>
							<FontAwesomeIcon icon={faArrowsAltV} className="faIcons" />
							<a href="#">Rank User</a>
						</div>
					</div>
				</div>
				<div className="urlContainer">
					<h3>MyPlace URL:</h3>
					<a href="#">http://www.myplace.com/michaelcampbell</a>
				</div>
			</section>

			<section className="rightSection">
				<h2>Michael is in your extended network</h2>
				<div>
					<p>Michael's Latest Blog Entry</p>
					<a href="#">[Subscribe to this Blog]</a>
				</div>
				<a href="#">View All Blog Entries</a>
				<div>
					<h3>Michael's Blurbs</h3>
					<div>
						<h4>About me:</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sed pariatur qui eaque aliquam culpa rerum sunt, dolore quod facilis!</p>
						<h4>Who I'd like to meet:</h4>
					</div>
					<div>
						<h3>Michaels Friends Space</h3>
						<p>Michael has <span>NUMBER</span> friends</p>
						<div>
							<div>
								<h4>Friend</h4>
								<img src="#" alt="Top Friend 1" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="#" alt="Top Friend 2" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="#" alt="Top Friend 3" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="#" alt="Top Friend 4" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="#" alt="Top Friend 5" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="#" alt="Top Friend 6" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="#" alt="Top Friend 7" />
							</div>
							<div>
								<h4>Friend</h4>
								<img src="#" alt="Top Friend 8" />
							</div>

						</div>
					</div>
				</div>


			</section>
		</main>
	)
}

export default Main;