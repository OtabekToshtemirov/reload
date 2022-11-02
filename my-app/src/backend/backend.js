import React, { Component } from "react";
import { Col, Container, Row ,Card} from "react-bootstrap";
import axios from "axios";

class Backend extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    post: []
  };

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         this.setState({ user: data });
//       });
//   }
componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
        const post = res.data;
        console.log(res)
        this.setState({post});
    })
}

  render() {
    return (
      <>
        <Container>
          <Row>
            {this.state.post.map((posts) => (
              <Col>
                <Card key={posts.id}>
                  <Card.Header>
                       <p>{posts.title}</p>
                  </Card.Header>
                  <Card.Body>
                      
                        <span>{posts.body}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

      </>
    );
  }
}

export default Backend;
