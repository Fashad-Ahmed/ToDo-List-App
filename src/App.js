import React, { Component } from 'react';
import './App.css';
import ButtonLink from './component/top.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      value: ''
    }
  }

  addTodo = () => {
    let obj = { title: this.state.value };
    this.setState({
      // todos: this.state.todos,   setstate--> because of render(each time)
      todos: [...this.state.todos, obj],
      value: ''
    }
    )
  }

  delTodo = (index) => {
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })
  }

  editTodo = (index, val) => {

    // var updatedValue = prompt('Enter Updated Task ');   // by prompt
    // this.state.todos = updatedValue;
    this.state.todos[index].edit = true;                                                    // let obj = { title: this.state.value };
    this.setState({
      todos: this.state.todos
    })
  }

  seeChange = (e, index) => {
    this.state.todos[index].title = e.target.value;
    this.setState({
      todos: this.state.todos
    })
  }

  updateTask = (index) => {
    this.state.todos[index].edit = false;
    this.setState({
      todos: this.state.todos
    })
  }

  removeAll = () => {
    this.setState({
      todos: []
    })
  }

  render() {
    let { todos, value } = this.state;

    return (
      <>
        <div className="container ">
          <ButtonLink /> <br />
          <input className="fi" value={value} onChange={(e) => this.setState({ value: e.target.value })} type="text" placeholder="enter task" />
          <button className="topB" class="btn btn-outline-primary btn-lg" onClick={this.addTodo}> Add Item </button>
          <button className="topB" class="btn btn-outline-danger btn-lg" onClick={this.removeAll}> Delete All </button>
          <section className="contq">   <ul>
            {todos.map((values, i) => {
              return <li key={i} >
                {values.edit ? <input className="sci" value={values.title} type="text" onChange={(e) => this.seeChange(e, i)} /> : values.title}
                <br />
                {values.edit ?
                  <button type="button" class="btn btn-dark" onClick={() => this.updateTask(i)}> Update </button>
                  :
                  <button type="button" class="btn btn-success" onClick={() => this.editTodo(i, values.title)}> Edit </button>
                }
                <button type="button" class="btn btn-danger" onClick={() => this.delTodo(i)}> Delete </button>
              </li>
            })}
          </ul> </section>
        </div>
      </>
    )
  }
}
export default App;