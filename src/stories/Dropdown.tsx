import React from 'react';
import './Dropdown.scss';

import { Link } from 'react-router-dom';

/*

Desarrollado tomando inspiración del siguiente proyecto:

https://github.com/briancodex/react-navbar-dropdown


*/
const Content={
  "Transparencia":[
    {
      title: 'TRANSPARENCIA',
      path: '/transparencia',
      cName: 'dropdown-link'
    },
    {
      title: 'MISIÓN, VISIÓN, VALORES',
      path: '/mision',
      cName: 'dropdown-link'
    }
  ],
  "Interesante":[
    {
      title: 'NOTICIAS',
      path: '/noticias',
      cName: 'dropdown-link'
    },
    {
      title: 'WEBS DE INTERÉS',
      path: '/WEBS',
      cName: 'dropdown-link'
    },
    {
      title: 'TALLERES',
      path: '/talleres',
      cName: 'dropdown-link'
    },
    {
      title: 'JORNADAS Y CONGRESOS',
      path: '/jornadas',
      cName: 'dropdown-link'
    }
  ]

  
}



export interface MenuItems {
 
    type: keyof typeof Content;

    
  }


interface DropdownState{
  click:boolean;

}

export class Dropdown extends React.Component<MenuItems,DropdownState>{
    

  public constructor(props:MenuItems){
    super(props);
    this.state={click:false};
    
    
  }

  handleClick = () => this.setState({click:!!!this.state.click}); //si falla, puse el redundante
  public render() {
    
    return (
      <>
        <ul
          onClick={this.handleClick}
          className={this.state.click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {Content[this.props.type].map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => this.setState({click:false})}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  }
  
