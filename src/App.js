import './App.css';
import MainComponent from './components/MainComponent';
import Nav from './components/Nav';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
function App() {
  return (
    <div>
      <Nav />
      <TodoList />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;
