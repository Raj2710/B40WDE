import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AddUsers from './components/AddUsers';
import Dashboard from './components/Dashboard';
import EditUsers from './components/EditUsers';
import Navs from './components/Navs';
function App() {
  return <>
  <BrowserRouter>
  <Navs/>
    <Routes>
      <Route path='/add-user' element={<AddUsers/>}/>
      <Route path='/edit-user/:id' element={<EditUsers/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
