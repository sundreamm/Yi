
import './App.css';
import Header from './components/Header';
import AboutMe from './components/aboutMe'; // 假设 AboutMe 是一个组件
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Projects from './components/projects';
import Skills from './components/skill';
import Contact from './components/contact';
import './style/main.css'

function App() {
  return (
    <Router>
      {/* 静态内容部分，将始终显示 */}
      <div className="App">
        {/* <Header /> */}
<div>
        {/* 路由部分，将根据路径不同显示对应的组件 */}
        <Routes>
        <Route path="/Yi" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
     
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          {/* 其他路由 */}
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
