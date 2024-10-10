import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import Navber from "./Navber";


const Users = () => {
    const loadedUsers = useLoaderData();
    let count =1;

     const [users,setUsers]=useState(loadedUsers);

     const handleDelete = id =>{
        console.log(id);
        //jodi hit hoy tobe aga jiggas korbe j sure kinna ,
        // jodi sure hoy delete korbai toba fetch kora oi id ta  remove marte hoba

        fetch(`http://localhost:5000/user/${id}`,{
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            //jodi delete hoy toba console a dekhlai pabo deleted count ar akta man dibe
            if(data.deletedCount>0){
                console.log('deleted successfully !!!')
                //just delete korlai hoba na sata k abar ui thaka sorano lagbe sai kai ta nichic
                const remainingUsers= users.filter(user => user._id !==id);
                setUsers(remainingUsers);
            }
        })

     }

    return (

        <>
        <Navber></Navber>
        <div>
            <h2>details about the users: {loadedUsers.length} </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>serial </th>
                            <th>email</th>
                            <th>Loin in time</th>
                            <th>Last log at</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>   
                        {
                            // loadedUsers.map(user => <tr key={user._id}>
                            users.map(user => <tr key={user._id}>
                                <th >{count++ }</th>
                                <td>{user.email}</td>
                                <td> {user.creationTime}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td className="flex gap-5"> 

                                    <button onClick={()=>handleDelete(user._id)}>
                                        <AiTwotoneDelete  className="text-red-500"/> delete 
                                    </button> 

                                     <button><GrUpdate className="text-green-700" /> update</button>
                                </td>
                               
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default Users;