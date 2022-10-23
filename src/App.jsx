
import bgIMG from './assets/bgIMG.png'
import './index.css'
import LoginPage from './pages/LoginPage';
import Router from './router/Router';
function App() {
  return (
    <div className="App">
      <img className='bg' src={bgIMG}/>
      <Router/>
    </div>
  );
}

export default App;
