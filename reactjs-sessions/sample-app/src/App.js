import Blogs from "./class-based/Blogs";
import Employee from "./class-based/Employee";
import EventHandling from "./class-based/EventHandling";
import HeaderBar from "./class-based/HeaderBar";
import LifeCycleDemo from "./class-based/LifeCycleDemo";
import MyResume from "./class-based/MyResume";
import User from "./class-based/User";
function App() {
  return (
    <div className="App">
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
      <LifeCycleDemo age={20}/>
    </div>
  );
}

export default App;