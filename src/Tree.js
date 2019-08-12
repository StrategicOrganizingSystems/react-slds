import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';
import Svg from './components/Svg';
import { generalClassNames, createClassName } from './utils';

const id = `treeheading${uniqueid()}`;

// import Tree, { Item, Branch }  from 'react-slds/lib/Tree';

// <Tree {...props}>
//   <Branch label="Branch 1" level="1" >
//     <Item onClick={ }>SubTree Item 1</Item>
//     <Item onClick={ }>SubTree Item 2</Item>
//   </Branch>
//   <Item>Tree Item 2</Item>
//   <Item>Tree Item 3</Item>
// </Tree>

export class Item extends Component {

  onClick = e => {
    if (typeof this.props.onClick !== 'undefined') {
      this.props.onClick(e);
    }
  }

  render() {
    const { props } = this;
    const cName = createClassName(
      'slds-tree__item',
      props.isFocused ? ' slds-is-focused' : '',
      props.isSelected ? ' slds-is-selected' : '',
      props.isHovered ? ' slds-is-hovered' : '',
    );

    const buttonCname = createClassName(
      'slds-button',
      'slds-button_icon',
      'slds-m-right_x-small',
      props.isDisabled || props.type !== 'branch' ? ' slds-is-disabled' : '',

    );

    let branchProps = {};
    let label = props.children;

    if (props.type === 'branch') {

      branchProps = {
        'aria-expanded': props.expand,
        className: props.className
      };
      label = props.label;
    }

    return (
      <li role="treeitem" aria-level={props.level} tabIndex={props.tabIndex || null} {...branchProps}>
        <div className={cName} onClick={e => this.onClick(e)} >
          <button className={buttonCname} aria-hidden="true" tabIndex="-1" title={`Expand ${label}`} >
            <Svg className="slds-button__icon slds-button__icon_small" variant="utility" icon="chevronright" />
            <span className="slds-assistive-text">{props.assistiveText || null}</span>
          </button>
          <span className="slds-size_1-of-1">
            <span className="slds-tree__item-label slds-truncate" title={label}>{label}</span>
          </span>
        </div>
        {props.type === 'branch' ? props.children : null}
      </li>
    );
  }
}

Item.propTypes = {
  // level: PropTypes.number,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
  isHovered: PropTypes.bool,
  assistiveText: PropTypes.string,
  tabIndex: PropTypes.number,
};

Item.defaultProps = {
  level: 1,
  isDisabled: false,
  isFocused: false,
  isSelected: false,
  isHovered: false,

};

export class Branch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expand: this.props.isExpanded || false
    };
  }

  onClick = (e) => {
    this.setState({
      expand: !this.state.expand
    });
    return e;
  }

  render() {
    const props = this.props;
    const child = validate(props, props.level);
    if (child.length) {
      const itemProps = {
        type: 'branch',
        className: 'branch',
        expand: this.state.expand,
        label: props.label,
        level: props.level,
        onClick: e => this.onClick(e)
      };
      return (
        <Item {...itemProps}>
          <ul role="group">{child}</ul>
        </Item>
      );
    }
    return null;
  }
}

Branch.propTypes = {
  // level: PropTypes.number.isRequired,
  isSelected: PropTypes.bool
};

Branch.defaultProps = {
  branchStyle: 'branch',
  level: 1,
  isSelected: false
};

class Tree extends Component {

  render() {
    return (
      <div className="slds-tree_container" role="application">
        <h4 className="slds-text-title_caps treeheading" id={id}>{this.props.label || null}</h4>
        <ul className="slds-tree" role="tree" aria-labelledby={id}>
          {validate(this.props)}
        </ul>
      </div>
    );
  }
}

Tree.propTypes = {
  label: PropTypes.string,
};

Tree.defaultProps = {
  label: ''
};

function validate(props, level = 0) {
  return (
    React.Children
      .toArray(props.children)
      .filter(n => n.type === Item || n.type === Branch)
      .map((n, i) => {
        const cProps = {
          ...n.props,
          level: level + 1,
          key: `${level  }-${  i}`
        // onClick: e => console.log('x', props)
        };
        return React.cloneElement(n, cProps);
      })
  );
}
// isDisabled
// assistiveText
export default Tree;
