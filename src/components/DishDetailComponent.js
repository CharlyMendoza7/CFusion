import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';



    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
        
        if(comments != null) {
            const commlist = comments.map(comment => {
                return(
                    <div key={comment.id} className="list-unstyled">
                        <li className="mb-4">
                            {comment.comment}
                        </li>
                        <li className="mb-4">
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
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

    const DishDetail = (props) => {

        if(props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.dish.comments} />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div />
            ); 
        }

    }



export default DishDetail;