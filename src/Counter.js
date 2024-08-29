import React, { useState } from 'react'

const Counter = () => {

    const [profileInfo, setProfileInfo] = useState({
        name: 'Ahmed Osama',
        age: 28,
        location: 'Mansoura',
    })

    // var counter = 0;

    // const [counter, setCounter] = useState(0)

    // function increment() {
    //     var newCounter = counter + 1;
    //     setCounter(newCounter)
    //     console.log(counter);
    // }

    // function decrement() {
    //     var newCounter = counter - 1;
    //     setCounter(newCounter)
    //     console.log(counter);
    // }

    // return (
    //     <div>
    //         <span style={{ display: "block", fontSize: "30px" }}>{counter}</span>

    //         <button onClick={increment}>Increment +</button>
    //         <button onClick={decrement}>Decrement -</button>
    //     </div>
    // )

    function changeLocation() {
        if (selectValue === "Select Location") {
            setProfileInfo({
                ...profileInfo,
                location: "Egypt"
            });
        } else if (selectValue === "Select Name") {
            setProfileInfo({
                ...profileInfo,
                name: "Moaaz"
            });
        } else if (selectValue === "Select Age") {
            setProfileInfo({
                ...profileInfo,
                age: 30
            });
        }
    }

    let [selectValue, setSelectValue] = useState('Select Location');

    function changeSelection(e) {
        console.log(e);
        setSelectValue(e.target.value)
    }

    return (
        <div>
            <h2>{profileInfo.name}</h2>
            <p>{profileInfo.age}</p>
            <p>{profileInfo.location}</p>

            <select value={selectValue} onChange={changeSelection}>
                <option value="Select Location">Select Location</option>
                <option value="Select Name">Select Name</option>
                <option value="Select Age">Select Age</option>
            </select>
            <button onClick={changeLocation}>Move To Egypt</button>
        </div>
    );
}

export default Counter