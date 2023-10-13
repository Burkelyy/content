import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Activation } from './components/activation/Activation';
import { Articles } from './components/articles/Articles';
import { Header } from './components/header/Header';
import { SignIn } from './components/signIn/SignIn';
import { SignUp } from './components/signUp/SignUp';
import { getUser } from './redux/action_creators';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/menu/Menu';
import { Blogs } from './components/blogs/Blogs';
import { SelectedArticle } from './components/articles/SelectedArticle';
import { SelectedBlog } from './components/blogs/SelectedBlog';
import './App.scss';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('jwtAccess');
    if (token) {
      dispatch(getUser());
    } else {
      const { pathname } = window.location;
      if (pathname !== '/signin' && pathname !== '/signup') {
        window.location.href = '/signin';
      }
    }
  }, [localStorage.getItem('jwtAccess')]);
  return (
    <div className="App">
      <Header />
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element = {
              <div className='home-page'>
                  <h1 className="home-page-title">Welcome to Blogologo</h1>
                  <img className="home-page-img" src={require('./image/home-page-img.png')}/> 
              </div>} 
            />
            <Route path='signin' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='activate'>
              <Route path='*' element={<Activation />}  />
            </Route>
            <Route path='articles'>
              <Route index element = {<Articles />} />
              <Route path=':id' element = {<SelectedArticle />} />
            </Route>
            <Route path='blogs'>
              <Route index element = {<Blogs />} />
              <Route path=':id' element = {<SelectedBlog />} />
            </Route>       
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;