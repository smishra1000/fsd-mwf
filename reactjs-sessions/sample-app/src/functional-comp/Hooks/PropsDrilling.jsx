function Component1(props){
    return(
        <div>
            <h4>Component 1</h4>
            <Component2 age={props.age}/>
        </div>
    )
}


function Component2(props){
    return(
        <div>
            <h4>componenet2</h4>
            <Component3  age={props.age}/>
        </div>
    )
}


function Component3(props){
    console.log("props in component 3",props)
    return(
        <div>
            <h4>componenet3</h4>
            <h4>age recievde from props drillling is {props.age}</h4>
        </div>
    )
}

function PropsDrilling(props){
    console.log("props in props drilling ",props)
    return(
        <div>
            <h4>Props drilling demo</h4>
            <Component1 age={props.age}/>
        </div>
    )
}

export default PropsDrilling
