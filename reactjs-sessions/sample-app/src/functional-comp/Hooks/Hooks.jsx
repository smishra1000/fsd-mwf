import UseEffectHook from "./UseEffectHook"
import UseReducerHook from "./UseReducerHook"
import UseStateHook from "./UseStateHook"

function Hooks(){
    return(
        <div>
            <h3>Hooks Demo</h3>
            {/* <UseStateHook/> */}
            {/* <UseEffectHook/> */}
            <UseReducerHook/>
        </div>
    )
}

export default Hooks