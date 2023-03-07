import React, { useState } from "react";

function RecipeCreate({addRecipes}) {
  const emptyContent = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [content, setContent] = useState(emptyContent);

  const {name, cuisine, photo, ingredients, preparation} = content


  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const handleChange = ({target}) => {
    setContent({...content, [target.name]: target.value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipes({name, cuisine, photo, ingredients, preparation});
    setContent({...emptyContent})
  }

  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input type="text" id="name" name="name" onChange={handleChange} value={name}/>
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input type="text" id="cuisine" name="cuisine" onChange={handleChange} value={cuisine}/>
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input type="text" id="photo" name="photo" onChange={handleChange} value={photo}/>
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea id="ingredients" name="ingredients" onChange={handleChange} value={ingredients}/>
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea id="preparation" name="preparation" onChange={handleChange} value={preparation}/>
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
