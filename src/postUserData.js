import axios from "axios"
import { useState } from "react";

const PostUserData = () => {
    const [userDetails, setUserDetails] = useState({
        userName: "",
        email: "",
        contactNo: 0
    });
    const onChangeHandler = e => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        });
    }
    const onSubmitHandler = async e => {
        e.preventDefault();
        const postUserData = await axios.post("http://localhost:8080/api/v1/user/userData", userDetails);
        console.log("postUserData", postUserData);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler} >
                <input value={userDetails.userName} onChange={onChangeHandler} type="text" name="userName" />
                <input value={userDetails.email} onChange={onChangeHandler} type="email" name="email" />
                <input value={userDetails.contactNo} onChange={onChangeHandler} type="number" name="contactNo" />
                <button type="submit" > Add User </button>
            </form>
        </div>
    )
}

export default PostUserData