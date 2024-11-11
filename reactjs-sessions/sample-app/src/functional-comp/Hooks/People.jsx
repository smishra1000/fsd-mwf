import { useEffect, useState } from "react"

function People() {
    const [peoples, setPeoples] = useState([])

    const getPeopleData = () => {
        fetch("http://localhost:5000").then((res) => {
            return res.json();
        }).then(function (data) {
            console.log(data)
            setPeoples(data)
        })
    }

    useEffect(() => {
        // code for connect
        getPeopleData();
    }, [])

    return (
        <div>
            <h2>People</h2>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                {peoples.map((item) => {
                    return (
                        <div style={{ width: "100px", height: '100px', padding: '10px', border: '2px solid red' }}>
                            <h2>{item}</h2>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default People