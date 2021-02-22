import React, { useEffect, useState } from "react";
import { useGetData } from "../../custom-hooks";
import { Jumbotron, Button, Container, Card, Col, Row } from "react-bootstrap";
import marvel from "../../assets/img/iron_man.jpg";
import { server_calls } from "../../api";
import { useHistory } from "react-router-dom";

export const Marvels = () => {
  const history: any = useHistory();

  {
    /* creaing history route function*/
  }
  const routeChange = (id?: string, path?: string) => {
  
    history.push({
      pathname: path,
      state: { marvel_id: id },
    });
  };

  let { marvelData, getData } = useGetData();
  console.log("marvelData", marvelData);

  const handleDeleteDrone = (id: any) => {
    server_calls.delete(id);
    getData();
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked the button ${count} times`;
  });
  // }, []) would only do useEffect once

  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Hello Marvel!</h1>
            <p>Here is your current collection of Marvel characters!</p>
            <Button onClick={() => routeChange("", "create")}>
              Create new Marvel Character
            </Button>
          </Jumbotron>
        </Col>
      </Row>

      {/* Row to display Data */}
      <Row>
        <Col>
          <div>
            {marvelData.map((item: any) => (
              <div key="item.id">
                {" "}
                {/* can also type item.id with curly braces */}
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={marvel} />
                  <Card.Body>
                    <Card.Title>
                      {item.name}
                      {/* needs to be in curly braces so it can be displayed on page */}
                    </Card.Title>
                    <Card.Text>{item.character}</Card.Text>
                    <Card.Text>{item.super_power}</Card.Text>

                    <Button variant="danger" onClick = { () => handleDeleteDrone(item.id)}>Delete</Button>
                    <Button variant="primary" onClick = { () => routeChange(item.id, 'update')}>Update</Button>
                    
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

//     <div>

//         <h1>Hello Marvel Characters</h1>
//         <h2>The Count is { count }</h2>
//         <button onClick={ () => setCount(count + 1)}>
//             Click To Add More
//         </button>
//     </div>
// )
// }
