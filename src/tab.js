import styles from './home.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentIndex: 0,
      activedArr: [1, 0, 0]
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  
  handleBtnClick(evt) {
    const index = Number(evt.target.dataset.id);
    const arr = [0, 0, 0];

    arr[index] = 1;
    this.setState({ currentIndex: index, activedArr: arr });
  }

  render() {
    const { currentIndex, activedArr } = this.state;
    const linsBtn = ['谷 歌', '百 度', '沪 江'].map((val, i) => {
      return (
        <TabBtns
          key={i}
          btnId={i}
          text={val}
          isActived={!!activedArr[i]}
          onHandleFun={this.handleBtnClick}
        />
      );
    });

    const textContent = ['我是谷歌', '我是百度', '我是沪江'].map((val, i) => {
      return <div key={i} className={styles['text-conten']} >{val}</div>;
    });    

    return (
      <div className={styles.container}>
        <div className={styles['tab-change']}>{linsBtn}</div>  
        {textContent[currentIndex]}
      </div>
    );
  }
}


class TabBtns extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    const { onHandleFun } = this.props;

    typeof onHandleFun !== 'undefined' && onHandleFun(evt);
  }

  render() {
    const { btnId, text, isActived } = this.props;
    const classes = classnames({
      [styles['a-btns']]: true,
      [styles['actived']]: isActived
    });

    return <a className={classes} data-id={btnId} onClick={(evt) => this.handleClick(evt)}>{text}</a>;
  }
}

export default Home;