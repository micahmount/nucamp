import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



export class DishDetail extends Component {

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );

    }

    render(){
        const dish=this.props.dish;
        if (dish != null)
        return (
            <div className="row">
            {this.renderDish(dish)}
            </div>
        );
        else
        return (
            <div></div>
        );

    }



}
export default DishDetail;