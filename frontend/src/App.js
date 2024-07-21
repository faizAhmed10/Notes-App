import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import NotePage from './pages/NotePage';
import CreateNote from './pages/CreateNote'
import MobileHeader from './components/MobileHeader'
function App() {
  return (
      <Router>   
      <div className='app '> 
      {window.innerHeight <= 700 ? <Header/> : null}    
        
        <Routes>
        <Route path="/" element={<NotesListPage/>} />
        <Route path="/notes/:id" element={<NotePage/>}/>
        <Route path='/create-note' element={<CreateNote/>}/>
        </Routes>
        </div>
    </Router>
  );
}

export default App;
