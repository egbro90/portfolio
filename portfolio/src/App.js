import { useState, useRef } from 'react';

// 라이브러리
import { Routes, Route } from 'react-router-dom';

// 컴포넌트
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from "./page/Main";
import Intro from './page/Intro';
import List from './page/List';
import Skill from './page/Skill';

// 스토어
import DarkTheme from './store/DarkTheme';

// 스타일
import './css/common.scss';
import './css/font.scss'

const App = () => {
  const { dark, handleTheme } = DarkTheme();
  const Wrapper = useRef();
  return (
    <div id="wrapper" className={dark ? 'dark' : null} ref={Wrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/intro' element={<Intro />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/Skill' element={<Skill />}></Route>
      </Routes>
      <Footer Wrapper={Wrapper} />
    </div>
  )
}
  


export default App;
