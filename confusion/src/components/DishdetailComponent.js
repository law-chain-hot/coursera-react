import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



export class DishDetail extends Component {
    constructor(props) {
        super(props);

        console.log('DishDetail component constructor is invoked');
    }

    componentDidMount() {
        console.log('DishDetail component componentDidMount is invoked');
    }


    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments == null) {
            return (<div></div>)
        }

        // var comments = dish.comments;
        var commentList = comments.map(comment => {
            return (
                <li key={comment.id} >
                    {comment.comment}
                    <br /><br />
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                    <br /><br />
                </li>
            );
        });

        console.log('RenderComments is invoked');

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentList}
                </ul>
            </div>
        );
    }



    render() {
        if (this.props.dish == null) {
            return (<div></div>)
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>

        )

    }

}