
import './App.css';
import Header from './components/Header';
import AboutMe from './components/aboutMe'; // 假设 AboutMe 是一个组件
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainPage';
import Home from './components/home';
import Projects from './components/projects';
import Skills from './components/skill';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      {/* 静态内容部分，将始终显示 */}
      <div className="App">
        <Header />

        {/* 路由部分，将根据路径不同显示对应的组件 */}
        <Routes>
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          {/* 其他路由 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
