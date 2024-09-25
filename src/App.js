import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AICardWrapper from './pages/indexCard';
import AiImageGenerator from './components/aiImageGenerator';
import AIVideoList from './components/aiVideoGenerator';
import AIPPTList from './components/aiPptGenerator';
import AIPPTViewer from './components/aiPptViewer';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AICardWrapper/>}/>
      <Route path='/ai-image-generator' element={<AiImageGenerator/>}/>
      <Route path='/ai-video-generator' element={<AIVideoList/>}/>
      <Route path='/ai-ppt-generator' element={<AIPPTList/>}/>
      <Route path='/ai-ppt-generator/:pptId' element={<AIPPTViewer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
