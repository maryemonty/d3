import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <p>Libri horror</p>
      <BookList />
      <p>Libri romantici</p>
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
