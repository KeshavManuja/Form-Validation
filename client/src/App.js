import './App.css';
import { Route, Routes } from 'react-router-dom';
import { FormPage } from './pages/form_page';
import { home } from './pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/form' Component={FormPage}/>
      </Routes>
    </div>
  );
}

export default App;
