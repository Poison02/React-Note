import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter} from "react-router-dom"
import {Provider} from "react-redux"
import {ThemeProvider} from "styled-components"

import App from '@/App'
import "normalize.css"
import "./assets/css/index.less"
import store from "@/store"
import theme from "@/assets/theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // {/* Suspense用于网络请求时回调函数*/}
  <Suspense fallback="loading">
    {/* Provider用于全局提供store*/}
    <Provider store={store}>
      {/* ThemeProvider用于全局的CSS常量 */}
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App/>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
);
