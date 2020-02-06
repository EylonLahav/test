import React from 'react';
import {useState} from 'react'

//ex1
// export default function MultiInput(props) {
//     const[input1, setInput1] = useState("type somthing...");

//     function handleChangeText(e) {
//         setInput1(e.target.value);
//     }

//     return(
//         <div>
//             <p>
//             <input type="text" value={input1} onChange={handleChangeText} />
//             </p>
//             <p>
//             <input type="text" value={input1} onChange={handleChangeText} />
//             </p>
//             <p>
//             <input type="text" value={input1} onChange={handleChangeText} />
//             </p>
//             <p>
//             <input type="text" value={input1} onChange={handleChangeText} />
//             </p>
//         </div>
        
//     );
// }

//ex2
export default function ConvertTimeUnit(props) {
    const[seconds , setSeconds] = useState("Enter a number of seconds...")
    const[minutes , setMinutes] = useState("Enter a number of minutes...")
    const[hours , setHours] = useState("Enter a number of hours...")

    function handleChange(e) {
        seconds = setSeconds(e.target.value);
        minutes = setMinutes(e.target.value);
        hours = setHours(e.target.value);

    }

    return (
        <div>
            <p>
                <label>seconds :</label>
                <input type = {Number} value = {seconds} onChange={handleChange}/>
            </p>
        </div>
    );
}