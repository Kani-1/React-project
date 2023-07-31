
//import Fruit from "./Fruit";
//import Mobile from "./Mobile";
/*import App from "./App";
import styles from './demo.module.css';
import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import FormsValidation from "./FormsValidation";
import SportsForm from "./SportsForm";
import Hooks from "./Hooks";
import Effecthooks from "./Effecthooks";
import Fragment from "./Fragment";
import Rowcreation from "./Rowcreation";*/
//import Cartoon from "./Cartoon";
//import Header from "./Header";
//import HeaderSC from "./HeaderSC";
import Update3 from "./Update3";
import ReactDOM  from 'react-dom';
import SportsForm from "./SportsForm";
//import App from "./App";

ReactDOM.render(<SportsForm/> ,document.getElementById('root'));
/*import React,{Component} from 'react';
import ReactDOM  from 'react-dom';
class Cartoon extends React.Component{
    constructor(props){
        super(props);
        this.state={Ilike:"Tom"}
    }
    static getDerivedStateFromProps(props,state){
      return{like:props.A};
    }
    render(){
        return(
            <h1>This {this.state.Ilike} Cartoon is cool</h1>
        );
    }
}*/


//ReactDOM.render(<HeaderSC favcol="yellow"/> ,document.getElementById('root'));


/*import React from 'react';
import ReactDOM from 'react-dom';
//import Event from'./Event';
//import './index.css';
//import App from './App';
//import Button from'./Button';
//import EffectHooks from'./EffectHooks';
//import Tablecreation3 from './Tablecreation3';
import {BrowserRouter as Router,Route,Routes,Link,Switch}from 'react-router-dom'
import Home from './Home';
import About from'./About';
import Joinus from './Joinus';

const routing=(
  <Router>
    <div>
      <h1>Hello</h1>
      <Routes>
        <Route path="/h"element={<Home/>}/>
        <Route path="/a"element={<About/>}/>
        <Route path="/j"element={<Joinus/>}/>

      </Routes>
    </div>
  </Router>

)
ReactDOM.render(routing,document.getElementById('root'));*/








//var prgm
/*var n=() =>
{
  var a=5;
  if(a==5)
  {
    let a=10;
  }
  document.getElementById ('root').innerHTML=a;
}
n();*/

/*var d=() =>
{
  var a=121;
  var y="divisible by 11";
  var n="not divisible by 11";
  if(a%11==0)
  {
    return(
      document.getElementById('root').innerHTML= y
    )
  }
  else{
    return(
      document.getElementById('root').innerHTML= n
    )
  }
}
d();*/



/*var a= (x) =>
{
  var a=5;
  var b=10;
  var c=a+b+x;
  document.getElementById('root').innerHTML=c;
}
a(30);*/

/*class demo{
  sum()
  {
    var n=222;
    var sum;
    var a;
    while(n>0){
      sum=sum+(n%10);
      a=Math.floor(a/10);
    }
    document.getElementById('root').innerHTML=sum;
  }
}
var mydemo=new demo;
mydemo.sum();*/

/*class demo{
  methodone()
  {
    var a=5;
    var b=10;
    var c=a+b;
    document.getElementById('root').innerHTML=c;
  }
}
var mydemo=new demo();
mydemo.methodone();*/


//ReactDOM.render(<App fruit="Apple"/> ,document.getElementById("root"));
//ReactDOM.render(<Form/> ,document.getElementById("root"));

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();