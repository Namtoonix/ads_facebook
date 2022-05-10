import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import navLeftApi from './api/navLeftApi';
import './App.css';
import NavLeft from './NavLeft/NavLeft';

function App() {
  const [menuList, setMenuList] = useState('')

  const showContentPage = (routes) => {
    if (!routes) return null;
    return routes.map((route, index) => (
      <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    ));
  };
  useEffect(() => {
    const fetchMenuList = async () => {
      const params = {};
      const menus = await navLeftApi.getAll(params);
      setMenuList(menus)
    };

    fetchMenuList();
  }, []);
  return (
    <div className="App">
      <NavLeft menuList={menuList} />
    </div>
  );
}

export default App;
