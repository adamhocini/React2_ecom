import React from 'react'
import { Navbar, Hero, Footer } from './components';
import { hero } from './data/travigodata';


const App = () => {

return (
  <>
    <Navbar/>
      <Hero Hero={hero}/>
    <Footer/>
  </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

export default App
