import Blogs from "./class-based/Blogs";
import Employee from "./class-based/Employee";
import EventHandling from "./class-based/EventHandling";
import FormHandling from "./class-based/FormHandling";
import HeaderBar from "./class-based/HeaderBar";
import LifeCycleDemo from "./class-based/LifeCycleDemo";
import MyResume from "./class-based/MyResume";
import User from "./class-based/User";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./pages/Navbar";
import Company from "./functional-comp/Company";
import Hooks from "./functional-comp/Hooks/Hooks";
function App() {
  return (
    <div className="App container-fluid">
      {/* <div>
        <div className='user-card'>
          <div style={{ background: "yellow", width: '120px', height: '100px' }}></div>
        </div>
        <h3>test1</h3>
        <h3>email:test1@gmail.com</h3>
      </div> */}
      {/* <Employee/>
      <User/>
      <User></User> */}
      {/* {User()} */}

      {/* <HeaderBar/>
      <MyResume/> */}
      {/* <User name="sameer" age="20" address="hyd"/> */}
      {/* <Blogs/> */}

      {/* <EventHandling/> */}
      {/* <LifeCycleDemo age={20}/> */}
      {/* <FormHandling/> */}
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="aboutus" element={<Aboutus />}></Route>
          <Route path="contactus" element={<Contactus />}></Route>
          <Route path="formhandling" element={<FormHandling />}></Route>
          <Route path="blogs" element={<Blogs />}></Route>
          <Route path="functions" element={<Company />}></Route>
          <Route path="hooks" element={<Hooks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;