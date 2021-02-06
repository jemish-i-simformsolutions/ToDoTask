import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addToList,addToCompleteList,All,inComplete,Completed} from '../actions/ActionProvider';
import '../Pro.css';
const mapStateToProps=(state)=>{
    return{
        list:state.list,
        count:state.count,
        indicator:state.indicator

    }
}
const mapDispatchToprops=(dispatch)=>{

    return bindActionCreators({addToList,addToCompleteList,All,inComplete,Completed},dispatch);

}


class MainComponent extends React.Component{
    
   indicator=0;
    listElement='';
    addToArray=()=>{
        this.props.addToList(this.listElement);
    }
    completeTask=(val)=>{
        this.props.addToCompleteList(val);
    }
    indicatorAll=()=>{
       this.props.All();
    }
    indicatorCompleted=()=>{
       this.props.Completed();
    }
    indicatorInCompleted=()=>{
        this.props.inComplete();

    }

 
    render(){
        return(
            <Fragment>
            <div id='title'>
            Todo List
            </div>
            <div>
            <input onChange={(event)=>this.listElement=event.target.value} />
            <button id="addbtn" onClick={this.addToArray}>Add Todo</button>
            </div>
            {console.log(this.indicator)}
            <div>
            <ul>
            {
            this.props.list.map((val)=>{
            const style={opacity:val.opacity};
            if(this.props.indicator==0){
            return (
      
             <div key={val.id}>
             <span id='listbtn'style={style} onClick={()=>{this.completeTask(val)}}> {val.status}{val.data}</span>
             </div>
             );
            }
            else if(this.props.indicator==1){
                if(val.opacity==0.3){
                    return (
      
              <div key={val.id}>
              <span id='listbtn'style={style} onClick={()=>{this.completeTask(val)}}> {val.status}{val.data}</span>
              </div>
            );

                }
            }
            else if(this.props.indicator==2){
                if(val.opacity==1){
                    return (
      
              <div key={val.id}>
              <span id='listbtn'style={style} onClick={()=>{this.completeTask(val)}}> {val.status}{val.data}</span>
              </div>
            );

                }
            }
             })
            
             
             }
            
            </ul>
            <span onClick={this.indicatorAll} >all  </span><span onClick={this.indicatorCompleted}>completed  </span><span onClick={this.indicatorInCompleted}>incomplete  </span>
            </div>
            </Fragment>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToprops)(MainComponent);