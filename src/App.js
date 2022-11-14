import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'
import './App.css';

function App() {
  let data = {
    earningsMonthly:"40,000",
    earningsAnnual:"2,40,000",
    taskCompletion:"40",
    pendingRequests:"18"
  }
  return <div id='wrapper'>
  <SideBar/>
  <Dashboard data={data}/>
  </div>
}

export default App;
