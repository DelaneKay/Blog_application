import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Search, List } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'

const Header_section = () => {
    function openMenu(){
        document.getElementById('side-menu').style.marginRight = '0px';
        document.body.style.marginRight = '325px';
    }
    
    function closeMenu(){
        document.getElementById('side-menu').style.marginRight = '-325px';
        document.body.style.marginRight = '0';
    }

    return (
        <header className='home-section' id='main' onMouseLeave={()=>closeMenu()}>
            <section id='header' onMouseLeave={()=>closeMenu()}>
                <nav className='navbar py-4' onMouseLeave={()=>closeMenu()}>
                    <div className="container" >
                        <Search id='search'/>
                        <a href="#" className="nav-brand mx-auto">TechLAB</a>
                        <List onMouseOver={()=>openMenu()} id= 'list'/>
                    </div>
                    <div id="side-menu">
                        <ul>
                            <li href=''>Artificial Intelligence</li>
                            <li href=''>Gadgets</li>
                            <li href=''>Robots</li>
                            <li href='' id='iot'>IoT</li>
                        </ul>
                    </div>
                </nav>
            </section>
            <div className="jumbotron text-center" onMouseLeave={()=>closeMenu()}>
                <div className="intro" onMouseLeave={()=>closeMenu()}>
                    <h1>The Future Is finally Here!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header_section

