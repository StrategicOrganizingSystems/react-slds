import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import { createClassName, isDefined } from './utils';

const toArray = arr => React.Children.toArray(arr);

export const Col = props => {
  const { totalCols, size, order, grow, shrink, bump, noDefaultClass, align } = props;

  // if column is grid
  const isGrid = !!toArray(props.children).filter(child => child.type === Row).length;

  const className = createClassName(
    !noDefaultClass ? 'slds-col' : null,
    isGrid ? 'slds-grid' : null,
    isDefined(size) && isDefined(totalCols) ? `slds-size_${size}-of-${totalCols}` : null,
    props.className,
    isDefined(order) ? `slds-order_${order}` : null,
    isDefined(grow) ? `slds-grow${ !grow ? '-none' : '' }` : null,
    isDefined(shrink) ? `slds-shrink${ !shrink ? '-none' : '' }` : null,
    isDefined(bump) ? `slds-col_bump-${ bump }` : null,
    isDefined(align) ? `slds-align-${ align }` : null,
  );
  return (
    <div className={ className }>{props.children}</div>
  );
};

Col.defaultProps = {
  noDefaultClass: false
};


Col.propTypes = {
  /** Allows column to grow to children’s content */
  grow: PropTypes.oneOf([
    true,
    false
  ]),
  /** Allows column to shrink to children’s content */
  shrink: PropTypes.oneOf([
    true,
    false
  ]),
  /** Bumps grid item(s) away from the other grid items to sit */
  bump: PropTypes.oneOf([
    'left',
    'right',
    'top',
    'bottom'
  ]),
  /** To specify the vertical placement of grid items on the cross axis */
  align: PropTypes.oneOf([
    'top',
    'middle',
    'bottom',
  ])
};



export const Row = props => {

  const cols = toArray(props.children).filter(child => child.type === Col);

  // check if Col have bump
  const containBump = cols.filter(child => child.props.bump).length > 0;

  return (
    <Fragment>
      {
        cols.map(child => (
          <Col key={child.key} {...child.props} totalCols={ props.totalCols } noDefaultClass={ containBump }/>
        ))
      }
    </Fragment>
  );
};

const Grid = props => {
  const className = createClassName(
    'slds-grid',
    isDefined(props.wrap) ? 'slds-wrap': '',
    isDefined(props.gutters) ? 'slds-gutters': '',
    isDefined(props.flow) ? `slds-grid_${props.flow}`: '',
    isDefined(props.align) ? `slds-grid_align-${props.align}`: '',
    isDefined(props.verticalAlign) ? `slds-grid_vertical-align-${props.verticalAlign}`: '',
    props.className
  );
  return (
    <div className={ className }>{props.children}</div>
  );
};

Grid.propTypes = {
  /** FLow */
  flow: PropTypes.oneOf([
    'vertical',
    'reverse',
    'vertical-reverse',
  ]),
  /** Columns align Horizontal Axis */
  align: PropTypes.oneOf([
    'center',
    'space',
    'spread',
    'end',
  ]),
  /** Columns align Vertical Axis */
  verticalAlign: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),
};

export default Grid;

// TODO:
// https://www.lightningdesignsystem.com/utilities/grid/#Creating-Responsive-Layouts
// Creating Responsive Layouts
// Responsive Layout Options
// Mobile/Desktop Example
// Mobile/Tablet/Desktop Example
// Conditional Column Reordering
