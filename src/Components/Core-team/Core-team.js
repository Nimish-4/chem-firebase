import React from 'react'
// import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import teams_List from './team-list.json'

const Team = () => {
    return (
        <div className="container my-3">
            <h1>
                ---Our Team---
            </h1>
            <div className="row">
                {
                    teams_List.devlopers.map((details) => {
                        return (
                            <div className="col-md-4" key={details.roll}>
                                <CardGroup>
                                    <Card style={{ width: "18rem"}}>
                                        <Card.Img variant="top"  height="220px" src={!details.img ? "https://www.cumbria.ac.uk/media/staff-profile-images/staff_profile_-generic_350x350px.png" : details.img} />
                                        <Card.Body>
                                            <Card.Title> {details.Name}</Card.Title>
                                            <Card.Text>
                                                {details.bio}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Team;