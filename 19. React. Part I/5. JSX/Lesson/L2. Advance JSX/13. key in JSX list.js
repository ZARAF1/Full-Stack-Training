// Example
<ul>
    <li key="li-01">Example1</li>
    <li key="li-02">Example2</li>
    <li key="li-03">Example3</li>
</ul>


//Example lesson
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person,i) =>
    // expression goes here:

    <li key={'person_'+i}>{person}</li>
);
console.log(peopleLis.toString())
// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById("app"))