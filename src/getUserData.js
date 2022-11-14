import { useState } from "react"
import axios from "axios";

const GetUserData = () => {
    const [id, setId] = useState('') 
    const onSubmitHandler = async () => {
        const getUserData = await axios.get("https://mernuserapp.herokuapp.com/api/v1/user/userData", { _id: id });
        console.log("getUserData", getUserData);
    }
    return (
        <>
            <input value={id} onChange={(e) => setId(e.target.value)} type="text" />
            <button onClick={onSubmitHandler} > Get User </button>
        </>
    )
}

export default GetUserData