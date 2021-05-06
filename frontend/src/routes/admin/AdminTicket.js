import { Container, Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Button>TEST</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default AdminTicket;

// DB에 이벤트 등록
// 이벤트마다 할인 적용(프론트 변경 필요)
// 지점별로 이벤트 적용 가능
// 이벤트에 따라 가격 할인