/* 
import MainComponent from './components/MainComponent';
import Nav from './components/Nav';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
function App() {
  return (
    <div>
      <MainComponent />
      <TodoList />
    </div>
  );
}

export default App;
 */

import React from 'react';

class App extends React.Component{
  constructor(){
      super()
      this.prop = {
          isLoggedIn: false,
      }
  }
  render(){
      let status = "";
      if (this.prop.isLoggedIn === true){
          status = "in";
      } else{ status ="out"}
      return(
          <div>
              <h1>You are currently logged {status}</h1>
          </div>
      )
  }
}

export default App;