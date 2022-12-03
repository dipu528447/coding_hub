import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Courses from './Components/Courses/Courses';
import { router } from './Routes/Routes';
// import NavBar from './Components/NavBar/NavBar';


export const UserContext =createContext();
export const ThemeContext =createContext(false)
export const LoadingContext=createContext();
function App() {
  const [user,setUser]=useState({})
  const [theme,setTheme]=useState(false)
  const [loading,setLoading]=useState(true);  
  return (
    <UserContext.Provider value={[user,setUser]}>
      <ThemeContext.Provider value={[theme,setTheme]}>
        <LoadingContext.Provider value={[loading,setLoading]}>
        <div className="App">
          <RouterProvider router={router}>
            <Main></Main>
          </RouterProvider>
        </div>
        </LoadingContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
    
  );
}

export default App;
