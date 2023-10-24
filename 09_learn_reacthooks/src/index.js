import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01_不使用Hook/App';
// import App from "./02_计数器实现对比/App";
// import App from "./03_useState的使用/App";

// import App from "./04_useEffect的使用/01_修改标题-class实现"
// import App from "./04_useEffect的使用/02_修改标题-useEffect实现";
// import App from "./04_useEffect的使用/03_清除机制-返回回调函数";
// import App from "./04_useEffect的使用/04_逻辑分离-多个Effect";
// import App from "./04_useEffect的使用/05_执行时机-控制回调执行";
import App from "./05_useContext的使用/App";
// import {ThemeContext, UserContext} from "./05_useContext的使用/context";

import { UserContext, TokenContext } from "./12_自定义Hooks/context"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext.Provider value={{name: "why", level: 99}}>
    <TokenContext.Provider value={'coderwhy'}>
      <App />
    </TokenContext.Provider>
  </UserContext.Provider>
);
/*root.render(
  // <React.StrictMode>
  <UserContext.Provider value={{name: "poison", level: 99}}>
    <ThemeContext.Provider value={{color: "red", size: 30}}>
      <App />
    </ThemeContext.Provider>
  </UserContext.Provider>
  // </React.StrictMode>
);*/
