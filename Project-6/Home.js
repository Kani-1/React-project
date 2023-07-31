//import { render } from '@testing-library/react';
import React,{Component} from 'react';
//import styles from './demo.module.css';
import w1 from './image/w1.avif';
class Home extends Component{
    render(){
        return(
            <div>
                <center><h1><b>Shop With Us</b></h1>
            <img src={w1}></img></center>
            </div>
            
        );

    }

}
export default Home;