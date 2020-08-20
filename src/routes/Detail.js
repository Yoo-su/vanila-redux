import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const Detail=({toDo})=>{
    return(
        <>
        <h1>{toDo?.text}</h1>
        </>
    );
}

function mapStateToProps(state,ownProps){
    const {
        match:{
            params:{id}
        }
    }=ownProps;
    
    return {toDo:state.find(toDo=>toDo.id===parseInt(id))};
}
export default connect(mapStateToProps) (Detail);