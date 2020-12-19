import logo from '../shared/images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://github.com/TurtleWolfe/fccCookBook"
          target="_blank"
          rel="noopener noreferrer"
          title="fccCookBook"
        >
          {/* fccCookBook */}
          <span className="App-hammer">
            <img src={logo} className="App-logo" alt="logo" />
          </span>
        </a>
        <a
          className="App-link"
          href="https://www.twitch.tv/videos/836894977"
          target="_blank"
          rel="noopener noreferrer"
          title="This Episode on Twitch I build a template for my freeCodeCamp projects, with FontAwesome & Analytics"
        >
          <i className="fab fa-twitch"></i> This Episode on Twitch <i className="fab fa-twitch"></i>
        </a>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine"
          target="_blank"
          rel="noopener noreferrer"
          title=" Random Quote Machine"
        >
          <i className="fas fa-quote-left"></i> Random Quote Machine <i className="fas fa-quote-right"></i>
        </a>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer"
          target="_blank"
          rel="noopener noreferrer"
          title="Markdown Previewer"
        >
          <i className="fab fa-markdown"></i> Markdown Previewer <i className="fab fa-markdown"></i>
        </a>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator"
          target="_blank"
          rel="noopener noreferrer"
          title="JavaScript Calculator"
        >
          <i className="fas fa-calculator"></i> JavaScript Calculator <i className="fas fa-calculator"></i>
        </a>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine"
          target="_blank"
          rel="noopener noreferrer"
          title="Drum Machine"
        >
          <i className="fas fa-drum"></i> Drum Machine <i className="fas fa-drum"></i>
        </a>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clockhttps://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock"
          target="_blank"
          rel="noopener noreferrer"
          title="25 + 5 Clock"
        >
          <i className="fas  fa-hourglass-start"></i> 25 + 5 Clock <i className="fas  fa-hourglass-half"></i>
        </a>
      </header>
    </div>
  );
}

export default App;
