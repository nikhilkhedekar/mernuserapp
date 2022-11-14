import axios from "axios"
import { useState } from "react";

const PutUserData = () => {
    const [userDetails, setUserDetails] = useState({
        _id: "",
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
        const putUserData = await axios.put("https://mernuserapp.herokuapp.com/api/v1/user/userData", userDetails);
        console.log("putUserData", putUserData);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler} >
            <input value={userDetails._id} onChange={onChangeHandler} type="text" name="_id" />
                <input value={userDetails.userName} onChange={onChangeHandler} type="text" name="userName" />
                <input value={userDetails.email} onChange={onChangeHandler} type="email" name="email" />
                <input value={userDetails.contactNo} onChange={onChangeHandler} type="number" name="contactNo" />
                <button type="submit" > Update User </button>
            </form>
        </div>
    )
}

export default PutUserData