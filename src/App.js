import logo from './logo.svg';
import './App.css';
import Dashboard from './screens/Authenticated/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './screens/Authenticated/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/updateuser/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
