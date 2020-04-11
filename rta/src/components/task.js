import React from 'react';

function Task(props) {
    return (
        <div>
            <form>
                <input type="checkbox" />
                <input type="text" value={props.name} placeholder="Add what todo..." />
                DueDate:<input type="date" />
                <input type="hidden" />
            </form>
        </div>
    );
}
export default Task;