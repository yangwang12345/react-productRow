import React, {
	Component
}
from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.handleFilterTextInputChange=this.handleFilterTextInputChange.bind(this)
		this.handleInStockInputChange=this.handleInStockInputChange.bind(this)
	}
	handleFilterTextInputChange(e) {
		// 输入筛选条件时 将输入加入 props
		this.props.onFilterTextInput(e.target.value);
	}
	handleInStockInputChange(e) {
		// 输入筛选条件时 将输入加入 props
		this.props.onInStockInput(e.target.checked);
	}
	render() {
		return ( 
      <form className="SearchBar">
        <input
          type="text"
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
          placeholder="Search..."
        />
        <br/>
        <input 
          type="checkbox"
          checked={this.props.inStockOnly}
          onChange={this.handleInStockInputChange}
        />
        <label>only show products in stock</label>
      </form>		);
	}
}