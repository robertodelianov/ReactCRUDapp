import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class App extends React.Component {
  constructor(){
    super();
      this.state = {
        products: [],
        editingProduct: ''
      }
  }

  loadData = (data) => {
    const newData = this.state.products.slice();
    if(newData.indexOf(data) >= 0){
      alert('Already exist');
    }else{
    newData.push(data);
  }
    this.setState({ products: newData });
  }

  removeData = (data) => {
    const newData = this.state.products.slice();
    const findData = newData.indexOf(data);
    newData.splice(findData, 1);
    this.setState({ products: newData });
  }

  getEditData = (data) => {
    this.setState({ editingProduct: data })
  }

  editData = (data) => {
    const newData = this.state.products.slice();
    const findData = newData.indexOf(this.state.editingProduct);
    newData.splice(findData, 1, data);
    this.setState({ products: newData ,editingProduct: ''});
  }

  render(){
    return (
      <div className={'containerApp'}>
          <h1 className={'logo'}>My App</h1>
          <List products={this.state.products} removeData={this.removeData} getEditData={this.getEditData} />
          <Form loadData={this.loadData} editingProduct={this.state.editingProduct} editData={this.editData}/>
      </div>
    )
  }
};

class List extends React.Component {
  constructor(){
    super();
  }

  render(){
    const products = this.props.products;
    const list = products.map( (info) => <ListProducts key={info} products={info} removeData={this.props.removeData} getEditData={this.props.getEditData} /> );
    return (
      <div>
       {list}
      </div>
    )
  }
}

class ListProducts extends React.Component {
  constructor(){
    super();
  }

  handleErase = () => {
    this.props.removeData( this.props.products );
  }

  handleEdit = () => {
    this.props.getEditData(this.props.products);
  }

  render(){
    return (
      <div>
        <li className={'products'}><Link to={`/app/${this.props.products}`}>{this.props.products}</Link>
        <button className={'erase'} onClick={this.handleErase} >ERASE</button>
        <button className={'edit'} onClick={this.handleEdit} >EDIT</button>
        </li>
      </div>
    )
  }
}

class Form extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        product: '',
        editingProduct: this.props.editingProduct
      }
  }

  handleSubmit = (e) => {
    if(this.props.editingProduct === ''){
    e.preventDefault();
    this.props.loadData(this.state.product)
    this.setState({ product: ''});
    }else{
      e.preventDefault();
      this.props.editData(this.state.product);
      this.setState({ editingProduct: '', product: ''});
    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
          <input className={'input'} type='text' required placeholder={this.props.editingProduct} value={this.state.product} onChange={ (e) => this.setState({ product: e.target.value })} /><br />
          <button className={this.props.editingProduct !== '' ? 'submitEdit' : 'submit'} type='submit'>{this.props.editingProduct !== '' ? 'EDIT' : 'ADD'}</button>
      </form>
    )
  }
}

export default App;
