import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';

export default function StackCard({card}) {
    const {prompt, answer} = card;
    const [visible, setVisible] = React.useState(false);
    return (
        <Card body className="my-2" onClick={() => setVisible(!visible)}>
            <Row>
                <Col>
                    {prompt}
                </Col>
                {visible && 
                    <Col sm="auto">
                        {answer}
                    </Col>
                }
            </Row>
        </Card>
    )
}
