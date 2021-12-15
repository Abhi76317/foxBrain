import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Todo() {
    const [todoes, settodoes] = useState(["Todo","Todo","Todo","Todo","Todo"])


    const addTodo=()=>{
        settodoes((preval)=>([...preval,"Todo"]))
    }
    const delTodo=()=>{
        // settodoes((preval)=>([...preval]))
        console.log([...todoes].pop());
    }
    const clrTodo=()=>{
        settodoes([])
    }

    useEffect(() => {
       console.log(todoes);
    })

    return (
        <div>
              <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">All Todoes</span>
                    <div>
                      <Link to={"/home"} className="btn btn-outline-primary me-2" > Go To Home</Link>
                      <button className="btn btn-outline-primary me-2" onClick={addTodo}> Add Todo</button>
                      <button className="btn btn-outline-primary me-2" onClick={delTodo}> Delete Todo</button>
                      <button className="btn btn-outline-primary" onClick={clrTodo}> Clear All</button>
                    </div>
                      </div>
            </nav>




            <div className='d-flex flex-wrap container '>
                {
                    todoes.map((record,index)=>(
                        <span key={index} className='p-3 m-3 rounded rounded-3 border border-secondary'>{record + "-"+(parseInt(index)+1)}</span>
                    ))

                }
           
            

            </div>
        </div>
    )
}
