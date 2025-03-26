import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Outlayer from "./Outlayer.jsx"
import { createBrowserRouter,createRoutesFromChildren,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Home from "./components/Home.jsx";
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Github,{useinfo} from './components/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Outlayer />,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"About",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlayer></Outlayer>}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route
      loader={useinfo}
      path="Github" element={<Github />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
