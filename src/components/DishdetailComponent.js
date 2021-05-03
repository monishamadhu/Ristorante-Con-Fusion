import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({dish}) {
        if (dish != null) {
            if (dish.comments) {
                return (
                    <div>
                        <h4>Comments</h4>
                        {(dish.comments).map((com) => {
                            return (
                                <ul key={com.id} className="list-unstyled">
                                    <li>{com.comment}<br />
                                        --{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}
                                    </li>
                                </ul>
                            );
                        })}
                    </div>
                );
            } else {
                return (
                    <div></div>
                );
            }
        } else {
            return (
                <div></div>
            );
        }
    }

    const Dishdetail = (props) => {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.dish}/>
                </div>
            </div>
        );
    }

export default Dishdetail;