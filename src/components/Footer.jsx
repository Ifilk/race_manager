import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {GitHubLogo} from "./github_logo.jsx";

export default function Footer() {
    return (
    <>
        <footer style={{
            paddingTop: '10px',
            paddingBottom: '10px',
            display: 'block',
            background: 'var(--bs-gray-100)'
        }}>
            <Container fluid>
                <Row className="justify-content-md-center ">
                    <Col md="auto" className="align-content-center">
                        Ifilk<GitHubLogo /><a href="https://github.com/Ifilk">github</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
    )
}