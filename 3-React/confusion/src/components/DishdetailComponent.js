import React, { Component } from 'react';


export class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishDetail: null
        };
    }

    render(){
        if (this.props.dish != null)
        return (
            <div className="row">
            </div>
        );
        else
        return (
            <div></div>
        );
    }

}
export default DishDetail;