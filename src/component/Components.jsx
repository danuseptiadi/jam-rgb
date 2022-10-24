import React, { Component } from "react";
import './style.css';

class Timer extends Component{
    constructor(props){
        super(props)
        this.state ={
            jam: new Date().getHours(),
            menit: new Date().getMinutes(),
            detik: new Date().getSeconds()
        }
    }
componentDidMount(){
    this.addInterval = setInterval( () => this.increase(),1000);
}
componentWillUnmount(){
    clearInterval(this.addInterval);
}

increase(){
    this.setState((state,props)=>({
        jam: new Date().getHours(),
        menit: new Date().getMinutes(),
        detik: new Date().getSeconds()
    }))
}

    render(){
        return(<div className="wrapper">
        <div className="main-div main-div1">
          <h1>{this.state.jam}</h1>
        </div>
        <div className="main-div main-div2">
          <h1> : </h1>
        </div>
        <div className="main-div main-div3">
          <h1>{this.state.menit}</h1>
        </div>
        <div className="main-div main-div2">
          <h1> : </h1>
        </div>
        <div className="main-div main-div1">
          <h1>{this.state.detik}</h1>
        </div>
      </div>
      );
    }
}


class Components extends Component{
    render(){
        return (
            <Timer/>
        );
    }
}

export default Components;