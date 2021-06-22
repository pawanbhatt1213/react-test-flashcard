import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

import { stacks } from "./mocks/mock";
import { setStock, setStocks } from "./actions/index";


export default function StackList(){

        const dispatch = useDispatch();

        const stackList = useSelector(state => state?.stacks)
        
        React.useEffect(()=>{
            if(stackList.length==0)
                dispatch(setStocks(stacks));
        }, []);

        return (
            <>
            <Link to="/newStack">ADD NEW STACK</Link>
            {
                stackList?.map((stack, i)=>{
                    return (
                        <Link to="/stack" key={i} >
                            <Card body className="my-2" onClick={()=>dispatch(setStock(stack))}>
                                {stack.title}
                            </Card>
                        </Link>
                    )
                })            
            }
            </>
        )
    
}
