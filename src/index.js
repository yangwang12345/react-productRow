import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './index.css'
var res=[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"}
];
function createComparisonFunction(propertyName){
    return function(object1,object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        
        if(value1<value2){
            return -1;
        }else if(value1>value2){
            return 1;
        }else{
            return 0;
        }
    }
}
res.sort(createComparisonFunction("category"));
class FilterableProductTable  extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText:'',
			// 仓库有没有库存
			inStockOnly:false
		};
		this.filterTextInput=this.filterTextInput.bind(this)
		this.inStockInput=this.inStockInput.bind(this)
	}
	filterTextInput(filterText) {
		this.setState({
			filterText: filterText
		});
	}
	inStockInput(inStockOnly){
		this.setState({
			inStockOnly: inStockOnly
		});
	}
	render () {
		return (
		  <div className="">
		    <h1>list</h1>
		    <SearchBar 
		    filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextInput={this.filterTextInput}
            onInStockInput={this.inStockInput}/>
		    <ProductTable 
		    products={this.props.data}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            />
		  </div>
		);
	}
};

ReactDOM.render(
  <FilterableProductTable data={res}/>,
  document.getElementById('root')
);
