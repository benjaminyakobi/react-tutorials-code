//17+18+19
import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Benyamin', 'Danit', 'Ilay', 'Ilay']
    const nameList = names.map((name, index) => <h2 key={index}>index: {index}, {name}</h2>)
    return <div>{nameList}</div>

    const persons = [
        {
            id: 1,
            name: 'Benjamin',
            age: 29,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Danit',
            age: 28,
            skill: 'Cook'
        },
        {
            id: 3,
            name: 'Ilay',
            age: 1,
            skill: 'Eat & Sleep'
        }
    ]
    /*  "key" property is essential when creating list of elements
        "key" must be a UNIQUE property for each item in the new list.
        "key" props are not accessible in the child component
    */
    // const personList = persons.map(person => (<Person key={person.id} person={person}></Person>))


}

export default NameList
