import React from 'react'

const ItemDropdown = (props) => {
  return <option value={props.product.id}>{props.product.name}</option>
}

export default ItemDropdown
