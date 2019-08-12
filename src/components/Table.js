import React, { Component } from 'react';
import includes from 'lodash.includes';
import TableHead from './TableHead';

import { objectValues, generalClassNames, createClassName } from '../utils';


class Table extends Component{

  constructor(props){
  	super(props);
  	this.handleSort = this.handleSort.bind(this);
    this.state  = {
      sortTableBy: null,
      sortStatus: 'down',
      data: null
    };
  }

  handleSort(sortData){

    let { name, status } = sortData;
    const { sortTableBy, data } = this.state;
    let { orderBy } = this.props;

    switch (status) {
    case null:
    case 'up':
      status = 'down';
      break;
    case 'down':
      status = 'up';
      break;
    default:
      status = 'down';
    }

    if(name !== sortTableBy){
      status = 'down';
    }
    orderBy = (orderBy==='asc'?'desc':'asc');

    if(this.props.handleSort){
      this.props.handleSort({
        sortBy: name,
        orderBy
      });
    }

    this.setState({
      data,
      sortTableBy: name,
      sortStatus: status
    });
  }

  renderHeader(){
    const { header, shownIndex=null, orderBy, sortBy } = this.props;
    let { sortTableBy, sortStatus } = this.state;

    if(header !== null ) {
      return header.map(({ name, text }, i)=>{
        if(shownIndex.length === 0 || includes(shownIndex, i)){ // temp

          if(sortTableBy === null && i === 0){
            sortTableBy = name;
          }

          return (<th key={ i }>
            <TableHead text={ text }
              isSorted={ sortBy===name }
              orderBy={ sortBy===name?orderBy:null }
              status={ sortStatus }
              name={ name }
              handleSort={ this.handleSort }/>
          </th>);
        }
        return null;
      });
    }
    return null;

  }

  renderCell(data){
    const { shownIndex, header } = this.props;

    const cells = [];
    let i=0;
    for (const key in data) {
      if(shownIndex.length === 0 || includes(shownIndex, i)){ // temp
        cells.push(<td key={ key } data-label={ header[i].text || null }>
          <div className="slds-m-left_xx-small slds-truncate">{ data[key] }</div>
        </td>);
      }
      i++;
    }
    return cells;
    //
  }

  renderBody(){
    const { data } = this.state;

    if(data != null){
      return data.map((dt, i)=>(
        <tr key={ i }  >
          { this.renderCell(dt) }
        </tr>
      ));
    }
    return null;
  }

  renderEmptyRow(){

    const { header, emptyRow } = this.props;

    if(emptyRow !== null || emptyRow !==0){
      const rows = [];
      for (let i = 0; i < emptyRow; i++) {
        rows.push(<tr key={ i }><td colSpan={ header.length }>&nbsp;</td></tr>);
      }
      return rows;
    }

    return null;
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.data !== null){
      this.setState({
        data: nextProps.data
      });
    }
  }

  render(){

    const {  bordered } = this.props;
    if(this.state.data === null ) {
      return (
        <div role="status" className="slds-spinner slds-spinner_medium">
          <span className="slds-assistive-text">Loading</span>
          <div className="slds-spinner__dot-a" />
          <div className="slds-spinner__dot-b" />
        </div>
      );
    }

    const className = createClassName(
      'slds-table',
      'slds-max-medium-table_stacked-horizontal',
      bordered ? 'slds-table_bordered': '',
      generalClassNames(this.props),
      this.props.className,
    );

    return (
      <table className={ className }>
        <thead><tr>{this.renderHeader()}</tr></thead>
        <tbody>{this.renderBody()}</tbody>
      </table>
    );
  }


}


Table.defaultProps = {
  shownIndex: []
};



export default Table;
