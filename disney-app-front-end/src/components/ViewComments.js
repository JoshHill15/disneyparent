import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { viewReply } from '../actions';

const ViewComments = props => {
    const { id } = useParams();

    useEffect(() => {
        props.viewReply(id);
    },[id])

    return (
        <div>PlaceHolder</div>
    )
};

const mapStateToProps = state => {
    return {
        state
    }
};

export default connect(mapStateToProps, {viewReply})(ViewComments);