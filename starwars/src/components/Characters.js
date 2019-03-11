import React from 'react'

function Characters (props) {
    console.log(props)
    const {characters} = props;
    return (
        <div>
            <p>Name: {characters.name}</p>
            <p>Height: {characters.height} </p>
            <p>Mass: {characters.mass} </p>
            <p>Hair Color: {characters.hair_color} </p>
            <p>Skin Color: {characters.skin_color} </p>
        </div>
    )
}

export default Characters