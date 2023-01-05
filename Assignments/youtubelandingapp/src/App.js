import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Card from './components/content/Card';
import Content from './components/content/Content';
import Header from './components/header/Header';


function App() {
  return (
<>
<Header> </Header>
<Content></Content>
<BrowserRouter>
<Routes>
<Route path="/" exact component={App}/>
<Route path ="/link" exact component={Card}/>
</Routes>

</BrowserRouter>
</>

  );
}

export default App;
