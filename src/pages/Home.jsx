import React from "react"

import Header from "../component/Header";
import ProfileDetail from "../component/ProfileDetail";

const Home = () => {
    return (
        <div >
            <Header />
            <div className="row mx-2">

                <div className="col-3 bg-secondary" style={{ minHeight: "80vh" }}> <ProfileDetail/></div>

                <div className="col-9">
                    <div  className="text-center">

                        <h1 className="m-3">Welcome</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;