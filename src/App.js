import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import navLeftApi from './api/navLeftApi';
import stepApi from './api/stepApi';
import './App.css';
import BodyContainer from './BodyContainer/BodyContainer';
import NavLeft from './NavLeft/NavLeft';
import ChienDichQuangCao from './pages/ChienDichQuangCao/ChienDichQuangCao';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CreateAccout from './pages/QuanLyQuangCao/CreateAccout';
import LoginFB from './pages/QuanLyQuangCao/LoginFB';
import QuanLyQuangCao from './pages/QuanLyQuangCao/QuanLyQuangCao';
import TopBar from './TopBar/TopBar';

function App() {
  const [menuList, setMenuList] = useState([])
  const [stepList, setStepList] = useState([])

  useEffect(() => {
    const fetchMenuList = async () => {
      const params = {};
      const menus = await navLeftApi.getAll(params);
      setMenuList(menus)
    };

    fetchMenuList();
  }, []);
  useEffect(() => {
    const fetchStepData = async () => {
      const params = {};
      const steps = await stepApi.getAll(params);
      setStepList(steps)
    };

    fetchStepData();
  }, []);

  const config = {
    apiKey: 'AIzaSyAPrI7el5U6uh9l7K-fsIfp0rMehJ3nb2Y',
    authDomain: 'facebook-ads-35e74.firebaseapp.com',
  };
  firebase.initializeApp(config);

  return (
    <div className="App">
      <NavLeft menuList={menuList} />
      <TopBar />
      <div className='pull-left pull-top'>
        <Routes>
          <Route path="/" element={<BodyContainer />} />
          <Route path='/quan-ly-quang-cao' element={<QuanLyQuangCao />} />
          <Route path='/quan-ly-quang-cao/login-fb' element={<LoginFB />} />
          <Route path='/quan-ly-quang-cao/creat-account' element={<CreateAccout stepList={stepList} />} />
          <Route path='/quan-ly-quang-cao/chien-dich-quang-cao' element={<ChienDichQuangCao/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
