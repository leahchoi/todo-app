import React, {Component} from 'react';
import AddItem from './add_item';
import TodoList from './todo_list';

class Home extends Component {
    componentDidMount(){
        this.props.getList();
    }
    render(){
        console.log('Props:', this.props)
        const {add, list}= this.props;

        return (
            <div>
                <h1 className='center'>To Do List</h1>
                <AddItem add={add} />
                <TodoList list={list} />
            </div>
        )
    }
}

export default Home;
