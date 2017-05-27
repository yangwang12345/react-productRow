import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    var rows = [];
    var lastCategory = null;

    this.props.products.forEach(function(product) {
        // 是否属于筛选结果 是否是有库存
        if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
            return;
        }

        // 按分类显示
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }

        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    }.bind(this));

    return (
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
        </table>
    );
  }
}

