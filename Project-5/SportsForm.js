import React from 'react';
import ReactDOM from 'react-dom';
class SportsForm extends React.Component{
    constructor(){
        super();
        this.state=
        {username:"",age:null,errmsg:"",fees:""};
    }
    uservalue=(event)=>
    {
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n=="age"){
            if(v!=""&&!Number(v))
            {
                err=<strong>invalid, must be a number</strong>
            }
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
    formsubmit=(event)=>
    {
        event.preventDefault();
        alert("your name"+this.state.username);
    }

    fees=(event)=>
    {
        var fee;
        let n=event.target.Sports.value;
        if(n=="Tennis"){
            fee=500;
        }
        this.setState({fees:fee});
    }

    render()
    {
        return(
            <form>
                <h1><b>SPORTS REGISTRATION</b></h1><br></br>
                Select sport:<select name="sports" id="sports" onSelect={this.fees}>
                    <option value="Cricket">Cricket</option>
                    <option value="Hockey">Hockey</option>
                    <option value="Tennis">Tennis</option>
                </select><br></br><br></br>
                Name:<input type="text" name="username" onChange={this.uservalue} /><br></br><br></br>
                Mobile number:<input type="number" name="mobile" onChange={this.uservalue}></input><br></br><br></br>
                Address: <input type="text" name="address"></input><br></br><br></br>
                Fees:  <input type="number" name="fees"></input>


                <h1>My age is {this.state.age}</h1>
                Enter your age:<input type="text" name="age" onChange={this.uservalue}/><br></br>
                {this.state.errmsg}
                <button type="submit" name="submit" onClick={this.uservalue}></button>
            </form>
        )
    }
}
export default SportsForm;