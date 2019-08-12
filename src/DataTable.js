import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { createClassName, isDefined } from './utils';

const Content = props => {
  if(props.data === null) {
    return null;
  }
  return (
    <tbody>
      {
        props.data.map((d, i) => {

          const firstNonActionable = props.headers.filter(col => col.type !== 'checkbox')[0].key;
          return (
            <tr key={i} >{ props.headers.map((col, idx) => {
              if(typeof col.visible !=='undefined' && !col  .visible){
                return null;
              }

              if(col.type === 'checkbox'){
                return <LocalCheckbox position="content" {...col}/>;
              }

              // Accessibility
              const isNonActionable = col.key === firstNonActionable;
              const elem = isNonActionable ? 'th' : 'td';
              const tdProps = {
                scope: isNonActionable ? 'row' : null,
                key: idx,
              };
              const cellValue = d[col.key];
              let children = (
                <div className="slds-truncate" title={ cellValue }>{ cellValue}</div>
              );
              if(typeof cellValue === 'object' && isDefined(cellValue.customCell)){
                children = (
                  <div className="slds-truncate" title={ cellValue.title || null }>{ cellValue.customCell }</div>
                );
              }

              return React.createElement(elem, tdProps, children);

            })
            }</tr>
          );
        })
      }
    </tbody>
  );
};
const cbHeaderId = `check-group-header-${ uniqueId()}`;

const LocalCheckbox = props => {
  const { assistiveText, position, text, ...cbProps } = props;
  const id = `table-cb-${ uniqueId()}`;

  if (position === 'header') {
    return (
      <th scope="col">
        <span id={ cbHeaderId } className="slds-assistive-text">{ assistiveText || 'Choose a row'}</span>
        <div className="slds-th__action slds-th__action_form">
          <span className="slds-checkbox">
            <input type="checkbox" name="options" id={ id } tabIndex="-1" aria-labelledby={`check-select-all-${id} ${cbHeaderId}`} {...cbProps} />
            <label className="slds-checkbox__label" htmlFor={ id } id={`check-select-all-${id}`}>
              <span className="slds-checkbox_faux" />
              <span className="slds-form-element__label slds-assistive-text">{ text || 'Select All' }</span>
            </label>
          </span>
        </div>
      </th>
    );
  }

  if(position === 'content') {
    return (
      <td role="gridcell">
        <span className="slds-checkbox">
          <input type="checkbox" name="options" id={`checkbox-${id}`} tabIndex="-1" aria-labelledby={`check-button-label-${id} ${cbHeaderId}`} />
          <label className="slds-checkbox__label" htmlFor={`checkbox-${id}`} id={`check-button-label-${id}`}>
            <span className="slds-checkbox_faux" />
            <span className="slds-form-element__label slds-assistive-text">Select item 1</span>
          </label>
        </span>
      </td>);
  }

  return null;
};

const Header = props => {
  if(props.data === null) {
    return null;
  }
  return (
    <thead>
      <tr className="slds-text-title_caps">
        { props.data.map(col => {
          if(typeof col.visible !=='undefined' && !col.visible){
            return null;
          }
          if(typeof col.customHeader !== 'undefined'){
            return <th key={ col.key } scope="col">{col.customHeader}</th>;
          }
          if(col.type === 'checkbox'){
            return <LocalCheckbox position="header" {...col}/>;
          }

          return (<th key={ col.key } scope="col">
            <div className="slds-truncate" title={ col.text }>{ col.text }</div>
          </th>);
        }) }
      </tr>
    </thead>
  );
};


const DataTable = props => {
  const className = createClassName(
    props.className,
    'slds-table',
    'slds-table_bordered',
    // 'slds-max-medium-table_stacked-horizontal',
  );

  const { headers, data, ...tableProps} = props;

  return (
    <table {...tableProps} className={ className }>
      <Header data={ headers } />
      <Content headers={ headers } data={ data } />
    </table>
  );
};


export default DataTable;
