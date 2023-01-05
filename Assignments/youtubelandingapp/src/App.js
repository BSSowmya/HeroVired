import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
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
{/* <Route path="/content" exact component={Content}/> */}
</Routes>

</BrowserRouter>
</>

  );
}

export default App;
