import './App.css';
import bgImage from './assets/bg-light.png';

function App() {
  return (
    <div className='App'>
      <div
        className='Background'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        Test
      </div>
    </div>
  );
}

export default App;
