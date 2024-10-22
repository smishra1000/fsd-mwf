import EmployeesList from "./EmployeesList"
import MyPhotos from "./MyPhotos"
import UseEffectHook from "./UseEffectHook"
import UseReducerHook from "./UseReducerHook"
import UseStateHook from "./UseStateHook"

function Hooks(){
    return(
        <div>
            <h3>Hooks Demo</h3>
            {/* <UseStateHook/> */}
            {/* <UseEffectHook/> */}
            {/* <UseReducerHook/> */}
            <EmployeesList/>
            <MyPhotos/>
        </div>
    )
}

export default Hooks