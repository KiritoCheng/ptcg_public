import React from "react";
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom';
import { Counter } from "./hello/Hello";
// import './App.css';

function App() {
  return (
    <Counter />
    //   <Router>
    //             <div>
    //                 <Route exact path='/' render={() => (
    //                     <>
    //                         <h3>首页</h3>
    //                         <ul>
    //                             <li><Link to='/hello'>hello</Link></li>
    //                             <li><Link to='/book'>BookPage</Link></li>
    //                         </ul>
    //                     </>
    //                 )} />

    //                 <Route path='/hello' render={() => (
    //                     <Hello compiler="TypeScript" framework="React" />
    //                 )} />
    //                 <Route path='/book' component={Book} />
    //             </div>
    //         </Router>
  );
}

export default App;
