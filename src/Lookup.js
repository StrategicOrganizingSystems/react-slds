import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {uniqueId, startCase, camelCase} from 'lodash';
import Svg from './components/Svg';
import { createClassName, isDefined } from './utils';
// add later
// Displaying Options Based On User Input
const LookupId = `-id-${ uniqueId() }`;

/* Icon for Item */
const Icon = props => {
  if(props.variant !== '' || props.icon !== ''){
    return <Svg className="slds-icon slds-icon_small" variant={ props.variant }  icon={ props.icon } />;
  }
  return null;
};
/* Item */

export const Item = props => {

  function markText(string, mark) {


    if(mark !== null && mark.trim().length > 0){
      const strArr = string.split(new RegExp(`(${mark})`, 'ig'));
      return strArr.map((ea, i) => {
        if(ea.toLowerCase() === mark.toLowerCase()){
          return <mark key={`match${i}`}>{ea}</mark>;
        } 
        return ea;
          
      });
    }
    return string;


  }

  const id = `option-${ props.index }`;

  const className = createClassName(
    'slds-media',
    'slds-listbox__option',
    'slds-listbox__option_entity',
    'slds-listbox__option_has-meta',
    props.hasFocus ? 'slds-has-focus': '',
  );


  let children =  props.children;
  if(props.mark !== null && props.mark.trim() !== ''){
    children = markText(children, props.mark);
  }
  // eslint-disable-next-line
  return (
    <li role="presentation" className="slds-listbox__item" onClick={ e => props.onClick(e, props.index)}>
      <div id={id} className={ className } role="option">
        <span className="slds-media__figure">
          <span className="slds-icon_container slds-icon-standard-account">
            <Icon variant={ props.variant }  icon={ props.icon }/>
          </span>
        </span>
        <span className="slds-media__body">
          <span className="slds-listbox__option-text slds-listbox__option-text_entity">{ children }</span>
          <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">{ props.meta }</span>
        </span>
      </div>
    </li>
  );
};
//         <input type="radio" name={`radio${LookupId}`} id={`radio-${id}`}  />
Item.defaultProps = {
  variant: '',
  icon: '',
  onClick: ()=>{}
};
Item.propTypes = {
  // children: PropTypes.isRequired,
  meta: PropTypes.string,
  variant: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};


/* Icon Right for Selected Item */
const IconRight = props => {

  if(props.show && (props.variant !== '' || props.icon !== '')){
    const assText = props.assistiveText ||  startCase(camelCase(props.icon));
    return (
      <span className="slds-icon_container slds-icon-standard-account slds-combobox__input-entity-icon" title={ assText }>
        <Svg className="slds-icon slds-icon_small" variant={ props.variant }  icon={ props.icon } />
        <span className="slds-assistive-text">{ assText }</span></span>
    );
  }
  return null;
};

IconRight.defaultProps = {
  assistiveText: ''
};

IconRight.propTypes ={
  assistiveText: PropTypes.string
};


/* Icon Left  */
const IconLeft = props => {
  const { variant, icon } = props;

  if(props.withValue){
    return (
      <button className="slds-button slds-button_icon slds-input__icon slds-input__icon_right" onClick={ e => props.onClick(e)}  title="Remove selected option">
        <Svg className="slds-button__icon" variant="utility" icon="close" assistiveText="Remove selected option"/>
      </button>
    );
  }

  const className = createClassName(
    'slds-icon_container',
    `slds-icon-${ variant }-${ icon }`,
    'slds-input__icon',
    'slds-input__icon_right',
  );
  return (
    <span className={ className }>
      <Svg className="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" variant={ variant } icon={ icon }/>
    </span>
  );

  return null;
};

IconLeft.defaultProps = {
  assistiveText: 'Search',
  variant: 'utility',
  icon: 'search',
  onClick: ()=>{}
};

IconLeft.propTypes ={
  assistiveText: PropTypes.string
};


class Lookup extends Component {
  state = {
    itemIndex: -1
  }

  onKeyUp = (e, cb) => {
    const code = e.keyCode;
    let {itemIndex} =  this.state;
    const Items = React.Children.toArray(this.props.children).filter( c => c.type === Item );
    const numOfChild = Items.length;

    if(code === 40){
      ++itemIndex;
      if(itemIndex>=numOfChild){
        itemIndex = 0;
      }
    }

    if(code === 38){
      if(itemIndex === null) {
        itemIndex = numOfChild-1;
      } else {
        --itemIndex;
        if(itemIndex< 0){
          itemIndex = numOfChild-1;
        }
      }
    }
    this.setState({
      itemIndex
    });

    if(code === 13){
      return cb(e, itemIndex);
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextState.itemIndex !== this.state.itemIndex){
  //     return false;
  //   }
  //   return true;
  //
  // }


  render(){
    const props = this.props;
    const { itemIndex } =  this.state;
    const id = LookupId;

    const isValidValue = isDefined(props.selectedValue) && props.selectedValue !== null && props.selectedValue.length;

    const containerClass = createClassName (
      'slds-combobox_container',
      isValidValue? 'slds-has-selection': ''
    );

    const comboboxClass = createClassName(
      'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click',
      props.isOpen ? 'slds-is-open' : ''
    );
    const inputClass = createClassName(
      'slds-input',
      'slds-combobox__input',
      isValidValue ? 'slds-combobox__input-value' : '',
      props.isOpen ? 'slds-has-focus' : ''

    );

    const formElementClass = createClassName(
      'slds-combobox__form-element',
      'slds-input-has-icon',
      isValidValue ? 'slds-input-has-icon_left-right' : 'slds-input-has-icon_right',
    );

    // console.log(props.value);
    let inputElem;
    let extraInputProps = {
      value: props.mark
    };
    if(isValidValue){
      extraInputProps = {
        readOnly: true,
        value: props.selectedValue
      };
    }
    // eslint-disable-next-line 
    return (
      <div className="cc-slds-lookup" style={ props.style }>
        <div className="slds-form-element">
          <label className="slds-form-element__label" htmlFor={`combobox${ id }`}>{ props.label}</label>
          <div className="slds-form-element__control">
            <div className={ containerClass }>
              <div className={ comboboxClass } aria-expanded={ props.isOpen} aria-haspopup="listbox" role="combobox">
                <div className={ formElementClass } role="none">
                  <IconRight show={ isValidValue } assistiveText={ props.assistiveText} variant={ props.variant} icon={ props.icon}/>
                  <input type="text" className={ inputClass }
                    id={`combobox${ id }`} aria-autocomplete="list" aria-controls={`listbox${ id }`}
                    autoComplete="off" role="textbox" placeholder={ props.placeHolder} onChange={ e => props.onChange(e) }
                    onKeyUp={ e => this.onKeyUp(e, props.onEnter)}
                    {...extraInputProps}/>
                  <IconLeft withValue={ isValidValue } onClick={ e => props.onRemoveSelected(e)} />
                </div>
                <div id={`listbox${ id }`} className="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox">
                  <ul className="slds-listbox slds-listbox_vertical" role="presentation">
                    { React.Children.toArray(props.children).filter( c => c.type === Item )
                      .map((n, i) => React.cloneElement(n, {
                        ...n.props,
                        hasFocus: itemIndex === i,
                        mark: props.mark,
                        index: i
                      }))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Lookup.defaultProps = {
  style: {},
  placeHolder: '',
  onChange: ()=>{},
  onEnter: ()=>{},
  onRemoveSelected: ()=>{},
  mark: null

};
Lookup.propTypes = {
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired
};

export default Lookup;
