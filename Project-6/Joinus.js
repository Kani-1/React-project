import React from 'react';


class Joinus extends React.Component{
    constructor(){
        super();
        this.state={username:""}
        this.state={PhoneNumber:""}
    }
    uservalue=(event)=>
    {
        this.setState(
            {username:event.target.value}
        );
    }
    uservalue1=(event)=>
    {
        this.setState(
            {age:event.target.value}
        );
    }
    render()
    {
        return(
            <form>
                <h1>Hello this is {this.state.username}</h1>
                Enter your name:<input type="text" name="username" onChange={this.uservalue}/>
                
                Enter your PhoneNumber:<input type="number" name="age" onChange={this.uservalue1}/>
            </form>
        )

    }
}
export default Joinus;