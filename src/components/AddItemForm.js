import React from "react";
import PropTypes from "prop-types";

class AddItemForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imgRef = React.createRef();

  static propTypes = {
    addItem: PropTypes.func
  };

  createItem = event => {
    // 1.  stop the form from submitting
    event.preventDefault();
    const item = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imgRef.current.value
    };
    this.props.addItem(item);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="item-edit" onSubmit={this.createItem}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Available!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          name="image"
          ref={this.imgRef}
          type="text"
          placeholder="image"
        />
        <button type="submit">+ Add item</button>
      </form>
    );
  }
}

export default AddItemForm;
