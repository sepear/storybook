import React from 'react';

import './Navbar.scss';
import { BrowserRouter, Link } from 'react-router-dom';
import {Dropdown} from './Dropdown';

/*

Desarrollado tomando inspiración del siguiente proyecto:

https://github.com/briancodex/react-navbar-dropdown


*/


interface NavbarState{
    click:boolean;
    dropdown:boolean;
  }


export class Navbar extends React.Component<{},NavbarState>{

    public constructor(props:any){
        super(props);
        this.state={click:false, dropdown:false};
        
      }
    handleClick = () => this.setState({click:!!!this.state.click, dropdown:this.state.dropdown}); 
    closeMobileMenu = () => this.setState({click:false, dropdown:this.state.dropdown }); 
    
    onMouseEnter = () => {
        if (window.innerWidth < 960) {
            this.setState({click:this.state.click, dropdown:false}); //si falla, puse el redundante;
        } else {
            this.setState({click:this.state.click, dropdown:true}); //si falla, puse el redundante;
        }
      };
    
    onMouseLeave = () => {
          this.setState({click:this.state.click, dropdown:false});
      };
   
    public render() {
        return (
            <BrowserRouter>
              <nav className='navbar'>
               
               
                <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={this.closeMobileMenu}>
                      INICIO
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='/services'
                      className='nav-links'
                      onClick={this.closeMobileMenu}
                    >
                      TRANSPARENCIA <i className='fas fa-caret-down' />
                    </Link>
                    
                    
                    
            
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='/products'
                      className='nav-links'
                      onClick={this.closeMobileMenu}
                    >
                      ¿QUÉ HACEMOS?
                    </Link>
                  </li>
                  <li className='nav-item'
                      onMouseEnter={this.onMouseEnter}
                      onMouseLeave={this.onMouseLeave}>
                    <Link
                      to='/contact-us'
                      className='nav-links'
                      onClick={this.closeMobileMenu}
                    >
                      INTERESANTE
                    </Link>
                    {(this.state.dropdown) &&(<Dropdown type={"Interesante"}  />)}
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={this.closeMobileMenu}>
                      AYUDANOS
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={this.closeMobileMenu}>
                      DOSSIER REMPS
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={this.closeMobileMenu}>
                      PROYECTOS
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={this.closeMobileMenu}>
                      PERSONAL
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={this.closeMobileMenu}>
                      REPOSITORIO
                    </Link>
                  </li>
                  
                </ul>
               
              </nav>
            </BrowserRouter>
          );
    }
  
  }