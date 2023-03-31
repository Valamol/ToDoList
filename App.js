import * as React from 'react';
import {Menu} from "./components/Menu";
import {Liste} from "./components/Liste";
import {useState} from "react";
import {AddConexion} from "./components/AddConexion";
import {Conexion} from "./components/Conexion";


export default function App() {
   const [page, setPage] = useState('conexion');
   if(page === 'menu') {
        return (<Menu setPage={setPage}/>)
    } else if(page === 'liste'){
        return(<Liste setPage={setPage}/>)
    } else if(page === 'adduser'){
       return(<AddConexion setPage={setPage}/>)
   } else if(page === 'conexion'){
       return(<Conexion setPage={setPage}/>)
   } else {
      return(<Menu/>)
   }
}


