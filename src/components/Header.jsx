import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <div className="logo">
                        竞赛管理
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}