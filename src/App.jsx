import React from 'react'
import {
     createRoutesFromElements,
     createBrowserRouter,
     Route,
     RouterProvider,

} from "react-router-dom";
import RootLayout from './layout/RootLayout';
import Home from './componant/home/Home';
import About from './componant/about/About';
import Skills from './componant/skills/Skills';
import Contact from './componant/contact/Contact';
import Portfolio from './componant/portfolio/Portfolio';

const App = () => {
     const router = createBrowserRouter(
          createRoutesFromElements(
               <Route element={<RootLayout />} >
                    <Route path='/' element={< Home />} />
                    <Route path='/about' element={< About />} />
                    <Route path='/skills' element={< Skills />} />
                    <Route path='/contact' element={< Contact />} />
                    <Route path='/portfolio' element={< Portfolio />} />
               </Route>


          )
     );
     return (
          <div>
               <RouterProvider
                    router={router} />
          </div>
     )
}

export default App