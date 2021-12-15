import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isName, isAddress, isEmail, isPassword, isPhone } from "../utils/validation";
export default function ProfileDetail() {

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        country: "",
        gender: "",
        phone_number: "",
        password: "",
        old_password: "",
        isLogin: false
    })
    const [profile, setprofile] = useState("https://images.unsplash.com/photo-1581841899040-8b5e38bae033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwYmFieXxlbnwwfHwwfHw%3D&w=1000&q=80"
    )

    const generateBase64FromImage = (imageFile) => {
        const reader = new FileReader();
        const promise = new Promise((resolve, reject) => {
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (err) => reject(err);
        });
        reader.readAsDataURL(imageFile);
        return promise;
    };


    const fileHandler=async (e)=>{
        const file =e.target.files[0]
        console.log("selected file: ",file);

       const b64=await generateBase64FromImage(file)
       console.log("B64",b64);
       localStorage.setItem("image",b64)
       setprofile(b64)

    }


    const inputHandler = (e) => {
        const { name, value } = e.target
        if (name === "new_password") {
            setData((preval) => ({
                ...preval, "password": value, "conform_password": value
            }))
        } else {
            setData((preval) => ({
                ...preval, [name]: value
            }))
        }
    }

    const validator = () => {
        if (!isName(data.first_name)) {
            // setError("Enter Valid First Name")
            alert("Enter Valid First Name")
            return false;
        }
        else if (!isName(data.last_name)) {
            // setError("Enter Valid Last Name")
            alert("Enter Valid First Name")
            return false;
        }
        else if (!isEmail(data.email)) {
            alert("Enter Valid Email")
            return false;
        }

        else if (!isPhone(data.phone_number)) {
            alert("Enter Valid Phone Number")
            return false;
        }

        else {
            return true;
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("data submitted ", data);
        const profile = JSON.parse(localStorage.getItem("profile"))
        if (validator()) {
            if (profile.password === data.old_password) {
                const strdata = JSON.stringify(data)
                localStorage.setItem("profile", strdata)
                alert("Your data Updated Successfully")

            } else {
                alert("Please enter correct Old password")
            }

        }
    }

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem("profile"))
        setData(profile)
        setprofile(localStorage.getItem("image"))

    }, [])

    return (
        <div className='text-center p-4'>
            <img src={profile} alt=".." width="100px" height={"100px"} className=' rounded rounded-circle' />
            <h2 className="text-white">
                {data.email}
            </h2>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Profile
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <form className="modal-content" action="#" onSubmit={submitHandler}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">your proile</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" >First Name</span>
                                <input type="text" className="form-control" placeholder="First Name" name="first_name" value={data.first_name} onInput={inputHandler} required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" >Last Name</span>
                                <input type="text" className="form-control" placeholder="Last Name" name="last_name" value={data.last_name} onInput={inputHandler} required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" >Email</span>
                                <input type="email" className="form-control" placeholder="Email" name="email" value={data.email} onInput={inputHandler} required />
                            </div>
                            <div className="input-group mb-3 mt-3">
                                <span className="input-group-text" >Phone Number</span>
                                <input type="number" className="form-control" placeholder="Phone Number" name="phone_number" value={data.phone_number} onInput={inputHandler} required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Old Password</span>
                                <input type="password" className="form-control" placeholder="Password" name="old_password" value={data.old_password} onInput={inputHandler} required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" >New Password</span>
                                <input type="password" className="form-control" placeholder="New Password" name="new_password" value={data.password} onInput={inputHandler} required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" >Update Profile</span>
                                <input type="file" className="form-control" placeholder="Update Profile Picture" required onChange={fileHandler}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>





        </div>
    )
}
