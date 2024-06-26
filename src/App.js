import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About"
import { RootLayout } from "./layouts/RootLayout";
import { HelpLayout } from "./layouts/HelpLayout";
import { Faq } from "./pages/help/Faq";
import { Contact } from "./pages/help/Contact";
import { NoPage } from "./pages/NoPage";
import {CareersLayout} from "./layouts/CareersLayout"
import  Careers, {careersLoader } from "./pages/careers/Careers";
import  CareerDetails, {careerDetailsLoader}  from "./pages/careers/CareerDetails";
const router= createBrowserRouter(
  createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="help" element={<HelpLayout />}>
            <Route path="faq" element={<Faq />}/>
            <Route path="contact" element={<Contact />}/>
          </Route>
          <Route path="careers" element={<CareersLayout/>}>
            <Route index element={<Careers />} loader={careersLoader} />
            <Route path=":id" element={<CareerDetails />} loader={careerDetailsLoader} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
