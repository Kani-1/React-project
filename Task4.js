import React,{Component} from 'react';
import styles from './demo.module.css';
import "./style.css";
import panda1 from './image/panda1.webp';
import panda2 from './image/panda2.jpg';
import panda3 from './image/panda3.jpg';
import panda4 from './image/panda4.jpg';
class Fruits extends React.Component{
  render(){
    const mystyle={
      color:'red',
      fontFamily:'cursive'
    };
    const ima={
      padding:'10px 30px 0px 10px'
    }
    const ima1={
      padding:'10px 0px 0px 500px'
    }
    const vi={
      padding:'0px 20px 0px 420px '
    }
    return(
      <div>
        <h1 style={{color:'purple',fontFamily:'revert-layer',textAlign:'center'}}><b>Welcome To Buddy Club</b></h1>
        <h2 style={mystyle}>Its about my friends</h2>
        <h3 className='App'><b>HELLO</b></h3>
        <h4 className={styles.heading}><b>All</b></h4>
        <img src={panda1} width="350px" height="250px" style={ima}></img>
        <img src={panda2} width="350px" height="250px" align="top"style={ima1}></img>
        <video width="400" height="350" style={vi} controls loop>
          <source src="./video/vpanda.mp4" type="video/mp4"></source>
        </video>

        <h1 style={vi}>play the video</h1>
        <img src={panda3} width="350px" height="250px" style={ima}></img>
        <img src={panda4} width="350px" height="250px" style={ima1}></img>
        
      </div>
    );
  }
}

class List extends React.Component{
  render(){
    return(
      <ul>
        <li style={{color:'green',fontFamily:'inherit'}}><b>{this.props.data.name}</b></li>
      </ul>

    );
  }
}
export default Task-4;
