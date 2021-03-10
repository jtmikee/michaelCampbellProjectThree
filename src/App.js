import './App.css';
import Navigation from './Navigation.js'
import Main from './Main.js'
import Footer from './Footer.js'


function App() {

  return (
    <div className="App">
      <div className="wrapper">
      <Navigation />
      <Main/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
