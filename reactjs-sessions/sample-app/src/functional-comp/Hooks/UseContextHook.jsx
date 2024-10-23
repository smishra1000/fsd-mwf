import { createContext, useContext } from "react"
const ageContext = createContext()

function Component1() {
    return (
        <div>
            <h4>Component 1</h4>
            <Component2 />
        </div>
    )
}


function Component2() {
    return (
        <div>
            <h4>componenet2</h4>
            <Component3 />
        </div>
    )
}


function Component3() {
    const age = useContext(ageContext)
    //const age = useContext(ageContext)
    console.log(age)
    return (
        <div>
            <h4>componenet3</h4>
            <h4>age recievde from props drillling is {age}</h4>
        </div>
    )
}

function Component4() {
    const age = useContext(ageContext)
    return (
        <div>
            <h4>component4</h4>
            <h4>age in component4 {age}</h4>
        </div>

    )
}

function UseContextHookDemo(props) {
    return (
        <ageContext.Provider value={props.age}>
            <div>
                <h4>Props drilling demo</h4>
                <Component1 />
            </div>
        </ageContext.Provider>

    )
}

export default UseContextHookDemo
