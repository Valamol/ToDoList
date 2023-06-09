import * as React from 'react';
import {Menu} from "./components/Menu";
import {Liste} from "./components/Liste";
import {useState} from "react";
import {AddConexion} from "./components/AddConexion";
import {Conexion} from "./components/Conexion";
import {Recherche} from "./components/Recherche";


export default function App() {
   const [page, setPage] = useState('conexion');
   const [user, setUser] = useState('');
   const [userID, setUserID] = useState(null);
   if(page === 'menu') {
        return (<Menu setPage={setPage} user={user} userID={userID}/>)
    } else if(page === 'liste'){
        return(<Liste setPage={setPage} user={user} userID={userID}/>)
    } else if(page === 'adduser'){
       return(<AddConexion setPage={setPage}/>)
   } else if(page === 'conexion'){
       return(<Conexion setPage={setPage} setUser={setUser} setUserID={setUserID}/>)
   } else if(page === 'recherche'){
       return(<Recherche setPage={setPage} />)
   } else {
      return(<Menu/>)
   }
}

