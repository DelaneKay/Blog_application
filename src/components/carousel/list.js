import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { List } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'

const List_icon = () => {
    const [showMenu, setshowMenu] = useState(true);

    function openMenu(showMenu, setshowMenu){
        if (showMenu == true){

            document.getElementById('side-menu').style.marginRight = '0px';
            document.body.style.marginRight = '325px';
            return (
                setshowMenu(showMenu)
            )

        } else if(showMenu == false){

            document.getElementById('side-menu').style.marginRight = '-325px';
            document.body.style.marginRight = '0';
            return (
                setshowMenu(showMenu)
            )
        }
    }

    return (
        <div>
            <List onClick={() => setshowMenu(!showMenu)} id= 'list'/>
        </div>
    )
}

export default List_icon
