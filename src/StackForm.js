import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from 'react-bootstrap'

import { addStack } from './actions';
import stack from './reducers';

export default function StackForm() {

    const dispatch = useDispatch();
    const [title, setTitle] = React.useState("");
    const [cards, setCards] = React.useState([{"prompt": "", "answer": "" }]);

    const onStackAdd = () =>{
        dispatch(addStack({title,cards}));
    }

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...cards];
        list[index][name] = value;
        setCards(list);
    };
     
    const onPromptAdd = () => {
        setCards([...cards, {prompt: "", answer: "" }]);
    };

    const onPromptRemove = (i) => {   
        console.log(i)
        console.log(cards.slice(0,i))     ;
        console.log(cards.slice(i+1))
        setCards([...cards.slice(0,i), ...cards.slice(i+1)]);
    }

    return (
            <Form>
                <Link to="/">ALL STACK</Link>
                <Row sm={12}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={e=>setTitle(e.target.value)} />
                    </Form.Group>
                </Row>
                {
                    cards.map((card, i) =>{
                        return <Row key={i}>
                            <Col sm={1}></Col>
                            <Col sm={5}>
                                <Form.Group>
                                    <Form.Label>Question</Form.Label>
                                    <Form.Control type="text" name="prompt" value={card.prompt} onChange={e=>handleInputChange(e, i)} />
                                </Form.Group>
                            </Col>
                            <Col sm={5}>
                                <Form.Group>
                                    <Form.Label>Answer</Form.Label>
                                    <Form.Control type="text" name="answer" value={card.answer} onChange={e=>handleInputChange(e, i)} />
                                </Form.Group>
                            </Col>
                            <Col sm={1}>
                                {i===cards.length-1 ? <Button className="mt-4 " onClick={onPromptAdd}>+</Button> : <Button className="mt-4" variant="danger" onClick={e=>onPromptRemove(i)}>--</Button>}
                            </Col>
                        </Row>
                    })
                }
                    <Col className="text-center">
                        <Button variant="success" className="px-4 py-2 m-2" onClick={onStackAdd} disabled={!title.length}>Submit Stack</Button>
                    </Col>
            </Form>
    )
}
