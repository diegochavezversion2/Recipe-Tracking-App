import React from "react";

function Recipe({name, cuisine, photo, ingredients, preparation, handleDelete}) {
    return (
        <tr className="content_td">
            <td>{name}</td>
            <td>{cuisine}</td>
            <td>
                <img src={photo} alt=""/>
            </td>
            <td><p>{ingredients}</p></td>
            <td><p>{preparation}</p></td>
            <td><button name="delete" onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}

export default Recipe;