import SlotsSignIn from './components/login';
import SignUpPage from './components/signup';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AICardWrapper from './pages/indexCard';
import IndexStepper from './pages/indexStepper'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SlotsSignIn/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='*' element={<SlotsSignIn/>}/>
      <Route path='/aiprodcuts' element={<AICardWrapper/>}/>
      <Route path='/questions' element={<IndexStepper/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
