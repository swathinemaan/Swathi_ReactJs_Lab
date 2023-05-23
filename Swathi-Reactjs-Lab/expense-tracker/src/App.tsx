import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ShowData from './component/ShowData';
import ExpenseTracker from './component/ExpenseTracker';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route
            path="/add"
            element={<ExpenseTracker onTrue={undefined} onClose={undefined} />}
          />
        <Route path="/" element={<ShowData/>}>
        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
