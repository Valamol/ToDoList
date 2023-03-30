import * as React from 'react';
import {Menu} from "./components/Menu";
import {Liste} from "./components/Liste";
import {useState} from "react";

export default function App() {
   const [page, setPage] = useState('menu');
   if(page === 'menu') {
        return (<Menu setPage={setPage}/>)
    } else if(page === 'liste'){
        return(<Liste setPage={setPage}/>)
    } else {
      return(<Menu/>)
   }
}


