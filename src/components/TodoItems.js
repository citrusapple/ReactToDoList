import React from 'react';
/* function TodoItems(props){
    console.log(props);
    return(
        <div>
            <input type="checkbox" checked={props.things.completed}>
            </input>
            <ul>{props.things.text}</ul> 
        </div>
    );
} */

class TodoItems extends React.Component {
    render() {
        return(
            <div>
                <input type="checkbox" checked={this.props.things.completed}>
                </input>
                <ul>{this.props.things.text}</ul> 
            </div>
        )
    }
}

export default TodoItems