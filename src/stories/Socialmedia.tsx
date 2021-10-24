import React from 'react';
import './Socialmedia.scss'
import Button from './Button'
class Socialmedia extends React.Component{
  public render(){
    return(
      <div className="Socialmedia">
        <h1 >Nuestras redes sociales</h1>
        <Button label={"facebook"}backgroundColor={"#3b5998"}/>
        <Button label={"flickr"}  backgroundColor={"#0063dc"}/>
        <Button label={"twitter"} backgroundColor={"#F5F8FA"}/>
        <Button label={"youtube"} backgroundColor={"#FF0000"}/>
      </div>


    )
  }
}

export default Socialmedia;