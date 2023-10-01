

import { Outlet, Link, useLoaderData, useLocation } from "react-router-dom";
import { getContacts } from "./contact.tsx";

import { FaBeer} from 'react-icons/fa';
import { BiBellOff  } from 'react-icons/bi';
import { FcBusiness, FcBullish, FcBriefcase  } from 'react-icons/fc';


import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";



import React, { useState, useEffect } from "react";
import {SignIn, Logout, GoogleAuth} from "./SignIn.tsx";


export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}

export default function Root() {
    const { contacts } = useLoaderData();
    const { pathname} = useLocation();

    const [users, setUsers] = useState([]);
    //const [newUsers, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "students");


    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);





    const getAllUsers = async () => {
        //const userCollectionRef = collection(db, 'students');
        await getDocs(userCollectionRef).then((querySnapshot) => {
            console.log(querySnapshot.docs);
            const listOfAllUsers =  querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setUsers(listOfAllUsers)
        }).catch((err) => {
            console.error("Sorry can't fetch the docs due to error: ", err);
        })
    }



    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setUsers(users);

    };

    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName });
    };

    // const createUser = async () => {
    //     await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
    // };

    const updateUser = async (id, age) => {
        const userDoc = doc(db, "students", id);
        const newFields = { age: age + 1 };
        await updateDoc(userDoc, newFields);
    };

    const updateUserName = async (id, name) => {
        const userDoc = doc(db, "students", id);
        const newFields = { name: name };
        await updateDoc(userDoc, newFields);
    };

    const deleteUser = async (id) => {


        console.log("ID>>>", id)
        const userDoc = doc(db, "students", id);
        //.console.log("userDoc>>>", userDoc.)
        await deleteDoc(userDoc);
    };

    const deleteUser1 = async (id) => {
        try {
            const documentRef = doc(db, "students", id);
            await deleteDoc (documentRef)
            getAllUsers();
            //window.location.reload();
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {

        getUsers();
        //getAllUsers()


        //addDoc(usersCollectionRef, { name: "newName" });


    }, [])
    console.log("USERS:", users);

    console.log(pathname)

    return (
        <div className={"flex flex-col w-full h-full p-6 bg-white shadow border items-center h-screen w-screen"}>
            <div id="header" className={"flex flex-row justify-around w-full h-full p-6 bg-white shadow border h-screen "}>


                <FaBeer />
                <BiBellOff fontSize={50} />
                <FcBullish className={"text-5xl"}/>
                <div className={"rounded-full flex h-22 w-22 items-center justify-center border border-slate-300 bg-orange-200 "}>
                    <BiBellOff fontSize={20} />
                </div>

                {/*<SignIn/>*/}
                <Logout/>
                <GoogleAuth />

            </div>

            <div id="main> " className={"flex flex-row w-full h-full p-6 bg-white shadow  h-screen w-screen"}>
                <div id="sidebar" className={"flex flex-col p-6 bg-white shadow border w-1/3 h-screen "}>

                    <h1 className={"text-5xl font-bold underline text-slate-900 text-center p-6 "}>
                        React Router Contacts
                    </h1>
                    <div>
                        <form id="search-form" role="search">
                            <input
                                id="q"
                                aria-label="Search contacts"
                                placeholder="Search"
                                type="search"
                                name="q"
                            />
                            <div
                                id="search-spinner"
                                aria-hidden
                                hidden={true}
                            />
                            <div
                                className="sr-only"
                                aria-live="polite"
                            ></div>
                        </form>
                        <form method="post">
                            <button type="submit">New</button>
                        </form>
                    </div>
                    <nav>

                        <p>{contacts.length}</p>

                        {contacts.length ? (
                            <ul>
                                {contacts.map((contact) => (
                                    <li className={"flex flex-row items-center"} key={contact.id}>
                                        <BiBellOff fontSize={30} />
                                        <Link to={`contacts/${contact.id}`}>
                                            {contact.first || contact.last ? (
                                                <>

                                                    {contact.first} {contact.last}
                                                </>
                                            ) : (
                                                <i>No Name</i>
                                            )}{" "}
                                            {contact.favorite && <span>★</span>}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>
                                <i>No contacts</i>
                            </p>
                        )}
                    </nav>

                </div>
                <div id={"details"} className="flex flex-col  p-6 bg-white shadow w-screen h-screen">


                    <h1 className={"text-5xl font-bold underline text-slate-900 text-center p-6 "}>Users</h1>

                    <div className={"flex flex-col justify-center items-center"}>

                        {
                            users.map((user) => (

                                <div className={"content-center text-2xl bg-blend-color-dodge"} key={user.id}>
                                    <p>{user.name}</p>
                                    <p>{user.age}</p>
                                </div>
                            ))

                        }




                        <input
                            placeholder="Name..."
                            onChange={(event) => {
                                setNewName(event.target.value);
                            }}
                        />
                        <input
                            type="number"
                            placeholder="Age..."
                            onChange={(event) => {
                                setNewAge(event.target.value);
                            }}
                        />


                        <button onClick={createUser}> Create User</button>
                        {users.map((user) => {
                            return (
                                <div>
                                    {" "}
                                    <h1>Name: {user.name}</h1>
                                    <h1>Age: {user.age}</h1>
                                    <button
                                        onClick={() => {
                                            updateUser(user.id, user.age);
                                        }}
                                    >
                                        {" "}
                                        Increase Age
                                    </button>

                                    <button
                                        onClick={() => {
                                            const name = prompt("Enter new name");
                                            updateUserName(user.id, name);
                                        }}
                                    >
                                        {" "}
                                        Update Name
                                    </button>


                                    <button
                                        onClick={() => {
                                            deleteUser(user.id);
                                        }}
                                    >
                                        {" "}
                                        Delete User
                                    </button>
                                </div>
                            );
                        })}


                    </div>


                    {/*show details - children of root element here*/}
                    <Outlet />
                </div>
            </div>
            <div id="footer" className={"flex flex-col w-full h-full p-6 bg-white shadow border h-screen "}>
                footer
            </div>
        </div>
    );
}