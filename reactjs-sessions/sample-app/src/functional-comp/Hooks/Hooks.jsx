import EmployeesList from "./EmployeesList"
import MyPhotos from "./MyPhotos"
import PropsDrilling from "./PropsDrilling"
import UseContextHookDemo from "./UseContextHook"
import UseEffectHook from "./UseEffectHook"
import UseReducerHook from "./UseReducerHook"
import UseRefHookDemo from "./UseRefHookDemo"
import UseStateHook from "./UseStateHook"

function Hooks(){
    return(
        <div>
            <h3>Hooks Demo</h3>
            {/* <UseStateHook/> */}
            {/* <UseEffectHook/> */}
            {/* <UseReducerHook/> */}
            {/* <EmployeesList/>
            <MyPhotos/> */}
            {/* <UseRefHookDemo/> */}
            {/* <PropsDrilling age="60"/> */}
            <UseContextHookDemo age="60"/>
        </div>
    )
}

export default Hooks