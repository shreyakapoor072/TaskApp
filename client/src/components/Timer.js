import React from 'react';
import {connect} from 'react-redux';

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {inprogressTime:props.time};
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.increaseTime(),
          60000
        );
    }
    increaseTime() {
        this.setState((prevState)=>({inprogressTime:prevState.inprogressTime + 60}));
        this.props.dispatch({type:'update_time',value:this.state.inprogressTime,id:this.props.id});
      }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    render() {
        
        return(
            <p className="mt-2 mb-1 text-success">InProgress for {this.props.time} secs</p>
        )
    }
}

export default connect()(Timer);