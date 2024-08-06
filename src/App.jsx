import "./App.css";
import Layout from "./componant/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./componant/Home/Home";
import About from "./componant/About/About";
import Portfolio from "./componant/Portfolio/Portfolio";
import Contact from "./componant/Contact/Contact";
import Error from "./componant/Error/Error";
function App() {
  let Route = createBrowserRouter([{
    path:"",element:<Layout/>, children:[
        {index:true, element:<Home/>},
        {path:"About", element:<About/>},
        {path:"Portfolio", element:<Portfolio/>},
        {path:"Contact", element:<Contact/>},
        {path:"*", element:<Error/>},
    ]
}])
  return (
    <>
    <RouterProvider router={Route}></RouterProvider>
    </>
  );
}

export default App;
