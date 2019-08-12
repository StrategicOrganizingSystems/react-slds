import React, { Component } from 'react';
import remove from 'lodash.remove';
import Icon from './Icon';
import Svg from './Svg';

class MenuItem extends Component{
  constructor(props){
  	super(props);

  	this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){

    if(this.props.handleChange){
      this.props.handleChange(e);
    }
  }

  render(){
    const { name, value, isCheck } = this.props;
    return (
      <li className="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" >
          <span className="slds-truncate" title={ value }>
            <input
              type="checkbox"
              checked={ isCheck }
              value={ name }
              onChange={ this.handleChange }  />
            { value }</span>
        </a>
      </li>
    );
  }
}



class Menu extends Component {
  constructor(props){
  	super(props);
    this.state = {
      value: []
    };
  	this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    // console.log(e.value, e.checked);
    const value = this.state.value;
    if(e.target.checked){
      if(!value.includes(e.target.value)){
        value.push(e.target.value);
      }
    }
    if(!e.target.checked){
      remove(value,n => n===e.target.value );
    }

    if(this.props.handleChange){
      this.props.handleChange({
        value
      });
    }

  }

  renderItem(){
    const { options } = this.props;
    return options.map(({ name, value, isCheck}, i)=>(
      <MenuItem key={ i }
        name={ name }
        value={ value }
        isCheck={ isCheck || null}
        handleChange={ this.handleChange } />
    ));

  }

  render(){
    const { label, isOpen } = this.props;
    let isOpenClass = '';
    if( isOpen ){
      isOpenClass = 'slds-dropdown-trigger_click slds-is-open';
    }


    return (
      <div className={`slds-dropdown-trigger ${ isOpenClass }`}>
        <button className="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" title={ label || null }>
          <span> <label>{ label }asdasd </label>
            <Svg variant="utility" icon="down" className="slds-button__icon slds-float_right"/>
          </span>
          <span className="slds-assistive-text">{ label || null }</span>
        </button>
        <div className="slds-dropdown slds-dropdown_left">
          <ul className="slds-dropdown__list" role="menu">
            { this.renderItem() }

          </ul>
        </div>
      </div>

    );
  }

}


export default  Menu;
