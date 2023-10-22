import React from 'react'
import {Link, NavLink, useNavigate, useRoutes} from "react-router-dom"
import routes from "./router";
/*import Home from "./pages/Home"
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import HomeRecommend from "./pages/HomeRecommend";
import HomeRanking from "./pages/HomeRanking";
import HomeSongMenu from "./pages/HomeSongMenu";
import Category from "./pages/Category";
import Order from "./pages/Order";
import Detail from "./pages/Detail";
import User from "./pages/User";*/

export function App(props) {
  const navigate = useNavigate()
  function navigateTo(path) {
    navigate(path)
  }
  return (
    <div className="app">
      <div className="header">
        <span>Header</span>
        <div className="nav">
          <NavLink to="/home" style={({isActive}) => ({color: isActive ? "red" : ""})}>首页</NavLink>
          <NavLink to="/about" style={({isActive}) => ({color: isActive ? "red" : ""})}>关于</NavLink>

          <Link to="/login">登录</Link>
          <button onClick={e => navigateTo("/category")}>分类</button>
          <span onClick={e => navigateTo("/order")}>订单</span>
          <Link to="/user?name=poison&age=18">用户</Link>
        </div>
        <hr/>
      </div>
      <div className="content">
        {/* 配置映射关系 */}
        {/*<Routes>
          <Route path='/' element={<Navigate to="/home"/>}/>
          <Route path='/home' element={<Home/>}>
            <Route path='/home' element={<Navigate to='/home/recommend'/>}/>
            二级路由
            <Route path='/home/recommend' element={<HomeRecommend/>}/>
            <Route path='/home/ranking' element={<HomeRanking/>}/>
            <Route path='/home/songmenu' element={<HomeSongMenu/>}/>
          </Route>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/user' element={<User/>}/>
           '*'表示通配符
          <Route path='*' element={<NotFound/>}/>
        </Routes>*/}
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <hr/>
        Footer
      </div>
    </div>
  );
}

export default App;
