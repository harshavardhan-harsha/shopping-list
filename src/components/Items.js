import React, { Component, Fragment } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem, deleteItem, editItem, handleEdit, clearInput, clearItems, handleInput, handleMessage } from "../actions/itemActions";

class Items extends Component {
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.edit) {
      this.props.editItem();
    } else {
      const newItem = this.refs.item.value;
      const isThere = this.props.items.includes(newItem);
      if (isThere) {
        this.props.handleMessage("Item is in the list");
      } else {
        this.props.addItem(newItem);
      }
    }
  };

  onChange = e => {
    this.props.handleInput(this.refs.item.value);
  };

  render() {
    const { items, message, displayItem, edit, clearInput, handleEdit, deleteItem, clearItems } = this.props;
    return (
      <div className="container">
        <br />
        <h1 align="center" className="text-primary">
          Shopping List
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="item">Enter the item</label>
            <input type="text" ref="item" name="item" value={displayItem} onChange={this.onChange} required />
          </div>
          <input type="submit" value={edit ? "Update Item" : "Add Item"} className="btn btn-primary btn-sm" />
          <input type="button" value="clear" onClick={clearInput} className="btn btn-dark btn-sm" />
        </form>
        <div>
          {items.length > 0 ? (
            <Fragment>
              {message && <p>{message}</p>}
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <Item key={i} item={item} i={i} handleEdit={handleEdit} deleteItem={deleteItem} />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4">
                      <button className="btn btn-dark btn-block" onClick={clearItems}>
                        Clear Items
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </Fragment>
          ) : (
            <Fragment>
              <p>No items in the list!!! Add Some..</p>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

Items.propTypes = {
  items: PropTypes.array.isRequired,
  message: PropTypes.element.isRequired,
  edit: PropTypes.bool.isRequired,
  displaItem: PropTypes.element.isRequired,
  current: PropTypes.element.isRequired,

  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  clearItems: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleMessage: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  items: state.items,
  message: state.message,
  edit: state.edit,
  displayItem: state.displayItem,
  current: state.current
});
export default connect(
  mapStateToProps,
  { addItem, editItem, deleteItem, handleEdit, clearInput, clearItems, handleInput, handleMessage }
)(Items);
