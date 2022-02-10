import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        console.log("i am constructor DISHDETAIL")
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div />
            );
        }
    }

    renderComments(comment) {
        
        if(comment != null) {
            const commlist = this.props.dish.comments.map(comment => {
                return(
                    <div key={comment.id} className="list-unstyled">
                        <li className="mb-4">
                            {comment.comment}
                        </li>
                        <li className="mb-4">
                            -- {comment.author}, {comment.date}
                        </li>
                    </div>                   
                );
            });

            return(
                <div>
                    <h4>Comments</h4>
                    {commlist}
                </div>
            );
    
        }
        else{
            return(
                <div />
            );
        }

    }

    render() {


        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }

}

export default DishDetail;