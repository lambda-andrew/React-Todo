// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

const li = [
  {
    item: "one"
  },
  {
    item:"throw"
  }
]

class li extends react.component {
  constructor(){
    super();
    this.state = {
      words : li
    }

  }
 }

render () {
  return (
    <div>
      {this.state.li.map(i => {
      <Todo li = {i}/> 
    })}
    </div>
  )
}
export default TodoList;