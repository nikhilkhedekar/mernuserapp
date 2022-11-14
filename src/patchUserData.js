import axios from "axios"
import { useState } from "react";

const PatchUserData = () => {
    const [userDetails, setUserDetails] = useState({
        _id: "",
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
        const patchUserData = await axios.patch("https://mernuserapp.herokuapp.com/api/v1/user/userData", userDetails);
        console.log("patchUserData", patchUserData);
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler} >
                <input value={userDetails._id} onChange={onChangeHandler} type="text" name="_id" />
                <input value={userDetails.email} onChange={onChangeHandler} type="email" name="email" />
                <input value={userDetails.contactNo} onChange={onChangeHandler} type="number" name="contactNo" />
                <button type="submit" > Update User Info </button>
            </form>
        </div>
    )
}

export default PatchUserData