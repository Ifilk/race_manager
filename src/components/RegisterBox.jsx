import  Button  from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {InputGroup} from "react-bootstrap";
import {useRef} from "react";

export default function RegisterBox(props) {
    const uname_input = useRef();
    const password_input = useRef();
    const password_input2 = useRef();

    const submit = () => {
        let p = {
            'username': uname_input.current.value,
            'password': password_input.current.value,
            'password2': password_input2.current.value
        }
        // eslint-disable-next-line react/prop-types    
        props.onSubmit(p);
    }

    return (
        <div className="modal show" style={{display: 'block', position: 'initial'}}>
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>注册界面</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                            用户名
                    </InputGroup.Text>
                    <Form.Control
                            ref={uname_input}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            密码
                        </InputGroup.Text>
                        <Form.Control
                            ref={password_input}
                            type="password"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            确认密码
                        </InputGroup.Text>
                        <Form.Control
                            ref={password_input2}
                            type="password"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                </InputGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={submit}>
                    注册
                </Button>
            </Modal.Footer>
        </Modal.Dialog>
        </div>
    )

}

