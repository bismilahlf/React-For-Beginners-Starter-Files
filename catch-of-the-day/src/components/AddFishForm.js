import React from "react";

class AddFishForm extends React.Component {

  createFish = (event) => {
    event.preventDefault();
    console.log("Fish");
  }

  render() {
    return (
    <form class="fish-edit" onSubmit={this.createFish}>
      <input name="name" type="text" placeholder="Name"/>
      <input name="price" type="text" placeholder="Price"/>
      <select name="status">
        <option value="available">Fresh</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea name="desc" type="text" placeholder="Desc"/>
      <input name="image" type="text" placeholder="Image"/>
      <button type="submit">+ Add Fish</button>
    </form>
    );
  }
}

export default AddFishForm;
