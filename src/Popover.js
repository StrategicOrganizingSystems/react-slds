import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { uniqueId, includes } from 'lodash';
import { createClassName, removeProps, isDefined } from './utils';
import Svg from './Svg'; // new Svg

export const CloseButton = ({inverse, ...props}) => (
  <button className={
    createClassName(
      'slds-button',
      'slds-button_icon',
      'slds-button_icon-small',
      'slds-float_right',
      'slds-popover__close',
      `slds-button_icon${ inverse ? '-inverse' :'' }`
    )
  }
    title="Close dialog" {...props}>
    <Svg className="slds-button__icon" icon="close" assistiveText="Close dialog"/>
  </button>
);

export const Header = props => (
  <header {...props} className={ createClassName('slds-popover__header', props.className) } />
);

export const Footer = props => (
  <footer {...props}  className={ createClassName('slds-popover__footer', props.className) } />
);

export const Content = props => (
  <div {...props} className={ createClassName('slds-popover__body', props.className) } />
);


const Popover = props => {
  const {
    nubbin, size, role, show, withCloseButton, onClickClose, title ,
    hasError, ...extraProps
  } = props;

  const bodyId = `dialog-body-${props.id}`;

  const className = createClassName(
    props.className,
    'slds-popover',
    nubbin ? `slds-nubbin_${nubbin}` : '',
    size ? `slds-popover_${size}` : '',
    role ? `slds-popover_${role}` : '',
    show ? 'slds-rise-from-ground': 'slds-fall-into-ground',
    isDefined(hasError) && hasError ? 'slds-popover_error': '',
  );


  const mainProps = {
    ...extraProps,
    className,
    'aria-describedby': bodyId,
    'arial-label': title,
    role,
  };

  let children = React.Children.toArray(props.children);

  const withContent = children.filter(child => child.type === Content).length;
  if(withContent){
    children = children.filter(child => includes([Header, Footer, Content], child.type));
  }

  return (
    <section {...mainProps}>
      { withCloseButton ? <CloseButton onClick={ onClickClose } inverse={  isDefined(hasError) && hasError  } /> : null }
      {
        children.map((child, i) => {
          if(includes([Header, Footer, Content], child.type)){
            return {...child, key: i};
          }
          // no Content tag
          return (
            <Content id={ bodyId } key={i}>{ child }</Content>
          );

        })
      }
    </section>
  );

};

const NUBBINS  = [
  'top',
  'top-left',
  'top-right',
  'bottom',
  'bottom-left',
  'bottom-right',
  'left',
  'left-top',
  'left-bottom',
  'right',
  'right-top',
  'right-bottom'
];

const SIZES = [
  'small',
  'medium',
  'large',
];


Popover.defaultProps = {
  type: 'section',
  id: `popover-${uniqueId()}`,
  role: 'dialog',
  show: true,
  withCloseButton: false,
  onClickClose: () => {}
};


Popover.propTypes = {
  role: PropTypes.oneOf(['dialog', 'tooltip']),
  nubbin: PropTypes.oneOf(NUBBINS),
  size: PropTypes.oneOf(SIZES),
};


export default Popover;
