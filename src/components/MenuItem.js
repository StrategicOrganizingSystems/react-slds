import React, { Component } from 'react';

class MenuItem extends Component{
  constructor(props){
  	super(props);
    this.state = {
      isCheck: this.props.isCheck || false
    };
  	this.handleChange = this.handleChange.bind(this);
  	this.checkbox = null;


  }

  handleChange(e){

    if(this.props.handleChange){
      this.props.handleChange(e);
    }
    console.log(e.target.value, e.target.checked);
    this.setState({
      isCheck: e.target.checked
    });
  }

  renderCheckbox(){

    const { withCheckbox, name } = this.props;
    const { isCheck } = this.state;

    if( withCheckbox ){
      return (
        <input
          type="checkbox"
          checked={ isCheck }
          value={ name }
          ref={node => this.checkbox = node}
          onChange={ this.handleChange }  />
      );
    }
    return null;
  }

  render(){
    const {  value } = this.props;
    return ( 
      <li className="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0)" role="menuitem" onClick={ () => { this.checkbox.click(); } } >
          <span className="slds-truncate" title={ value }>
            { this.renderCheckbox() } &nbsp;
            { value }</span>
        </a>
      </li>
    );
  }
}

export default MenuItem;
