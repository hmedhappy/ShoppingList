import React, { Component } from 'react'
import {Container ,ListGroup , ListGroupItem,Button,UncontrolledCollapse  , CardBody,Card} from 'reactstrap';
import {CSSTransition ,TransitionGroup } from 'react-transition-group';
import { RiTodoLine } from 'react-icons/ri';
import { FaTrash } from 'react-icons/fa';
// import {uniqid as uuid} from 'uniqid';

export default class ShoppingList extends Component {
    state ={
        items :[
            {id: '1',name : 'Eggs',des:"haka w haka"},
            {id: '2',name : 'Milk',des:"haka w haka"},
            {id: '3',name : 'Steak',des:"haka w haka"},
            {id: '4',name : 'Water',des:"haka w haka"},
          {id: '5',name : 'Eggs',des:"haka w haka"},
            {id: '6',name : 'Milk',des:"haka w haka"},
            {id: '7',name : 'Steak',des:"haka w haka"},
            {id: '8',name : 'Water',des:"haka w haka"},
            {id: '9',name : 'Eggs',des:"haka w haka"},
            {id: '10',name : 'Milk',des:"haka w haka"},
            {id: '11',name : 'Steak',des:"haka w haka"},
            {id: '12',name : 'Water',des:"haka w haka"} 
        ],
        isOpen : false 
    }

    toggle = () =>{ this.setState({
        isOpen : !this.state.isOpen 
    }) }
    render() {
        const {items } = this.state ;
        var x ='#';
        return (
            <Container>
                <Button 
                color="dark"
                style={{marginBottom:'2rem'}}
                onClick = { ()=>{
                    const name = prompt('Enter Title');
                    const des = prompt('Enter Todo');
                    if (name) {
                        this.setState(state =>({
                            items : [...state.items,{id: (this.state.items.length + 1).toString(),name,des}]
                        }));
                    }
                }}
                style={{
                    position: 'fixed',
                    marginTop: '-71px',
                    fontSize: '27px'
                }}
                ><RiTodoLine style={{marginBottom: '7px' }}/></Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id,name,des})=>(
                            <CSSTransition key={id} timeout={1000} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className ="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick ={()=>{
                                        this.setState(state =>({
                                            items : state.items.filter(item => item.id !== id)
                                        }))
                                    }}
                                    ><FaTrash/></Button>
                                    {name}
                                    <Button color="primary" id={'b'+id} style={{ marginLeft: '6px',fontSize: '13px',background: 'none',color: 'gray',borderColor: 'black',float :'right' }}>▼</Button>
                                        <UncontrolledCollapse   toggler={'b'+id}>
                                            <Card>
                                            <CardBody>
                                            {des}
                                            </CardBody>
                                            </Card>
                                        </UncontrolledCollapse>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}
