import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import "./Settings.css";
import Account from "../../profile/settings/account/Account";
import Card from 'react-bootstrap/Card';

function LeftTabsExample() {
  return (
    <Card>
    <Tab.Container class = "ul.nav.nav-tabs" id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Account</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Followers & Following</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Notifications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="forth">Security</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
          
            {<Account/>}

            </Tab.Pane>
            <Tab.Pane eventKey="second">
               {/* <Sonnet /> */}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </Card>
  );
}


export default LeftTabsExample; 


