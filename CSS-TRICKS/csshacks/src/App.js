import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Elements/Navbar';
import codeback from '../src/Components/img/coding-background.jpeg'

function App() {
  return (
    <div className="App-main">

      <div className="navbar-container-app-main">
        <Navbar />
      </div>

      <main className='main-section'>

        <div className="img-hero-section">

          <div className="image-container">
            <img src={codeback} alt="" />
          </div>

        </div>

        <div className="text-hero-section">

          <div className="text-part">
            <p>Welcome to </p>
            <p>cssHacks</p>
            <p>get free ui elements code</p>
          </div>

          <div className="get-started-button">
            <button>Gets Started</button>
          </div>

        </div>

      </main>


    </div>
  );
}

export default App;
