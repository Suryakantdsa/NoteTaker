import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import SignUP from './Component/SignUP';
import SignIn from './Component/SignIn';
import Home from './Component/Home';
import AddNotes from './Component/AddNotes';
import PrivateComponet from './Component/PrivateComponet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<PrivateComponet/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/addnote' element={<AddNotes/>}/>

        </Route>

        <Route path='/signup' element={<SignUP/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
