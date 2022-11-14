import { useState } from "react"
import axios from "axios";

const DeleteUserData = () => {
    const [id, setId] = useState('') 
    const onSubmitHandler = async () => {
        const deleteUserData = await axios.delete("http://localhost:8080/api/v1/user/userData", { _id: id });
        console.log("deleteUserData", deleteUserData);
    }
    return (
        <>
            <input value={id} onChange={(e) => setId(e.target.value)} type="text" />
            <button onClick={onSubmitHandler} > Delete User </button>
        </>
    )
}

export default DeleteUserData