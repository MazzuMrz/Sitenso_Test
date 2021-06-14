import React, { Suspense, lazy } from "react"
import ReactDOM  from "react-dom"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { Layout } from "./utility/context/Layout"
import { store } from "./redux/storeConfig/store"
import Spinner from "./components/@vuexy/spinner/Fallback-spinner"
import { Router, Route, browserHistory } from 'react-router';
import "./index.scss"
import "./@fake-db"
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App"



// configureDatabase()
ReactDOM.render(
  
    <Provider store={store}>
        <HashRouter>
      <Suspense fallback={<Spinner />}>
        <Layout>
            <App />
        </Layout>
      </Suspense>
       </HashRouter>
    </Provider>,
 
  document.getElementById("root")
)

