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

    renderComments(comments) {
        if (comments != null)
        return(
            <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
            {comments.map((item) => {
                return (
                
                    <li key={item.id}>{item.comment} <br/>
                    -- {item.author}, {item.date}</li>
                );
            })}
            </ul>
            </div>
        );
        else
            return(
                <div></div>
            );
    }

    render(){
        const dish=this.props.dish;
        if (dish != null) {
            const comments=this.props.dish.comments
        return (
            <div className="row">
            {this.renderDish(dish)}
            {this.renderComments(comments)}
            </div>

            );
        }
        else
        return (
            <div></div>
        );

    }



}
export default DishDetail;