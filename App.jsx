import React, { useState } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Homepage from './components/Homepage/Homepage';
import Sohbet from './components/Sohbet/Sohbet';

const App = () => {
  const [currentPage, setCurrentPage] = useState("giris");
  return (
    <>
      {currentPage === "giris" && <Login setCurrentPage={setCurrentPage} />}
      {currentPage === "kayit" && <Register setCurrentPage={setCurrentPage} />}
      {currentPage === "anasayfa" && <Homepage setCurrentPage={setCurrentPage} />}
      {currentPage === "sohbet" && <Sohbet setCurrentPage={setCurrentPage} />}
    </>
  );
};

export default App;