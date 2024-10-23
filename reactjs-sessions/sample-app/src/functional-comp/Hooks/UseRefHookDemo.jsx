import { useRef } from "react"
function UseRefHookDemo() {
    const inputRef = useRef(null)
    const changeFocus = () => {
        console.log(inputRef)
        inputRef.current.focus();
        inputRef.current.style.background = "red"

    }

    const changeBackground = () => {
        let box = document.getElementById("box1")
        box.style.background = "green"
    }
    
    return (
        <div>
            <h4>use ref hook demo hook</h4>
            <input type="text" ref={inputRef} id="box1" />
            <button onClick={() => changeFocus()}>change focus</button>
            <button onClick={() => changeBackground()}>change background</button>
        </div>
    )
}

export default UseRefHookDemo