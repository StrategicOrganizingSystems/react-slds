import React, { Component } from 'react';
import svg4everybody from 'svg4everybody';


class TableHead extends Component{

  constructor(props){
    super(props);
    this.handleSort = this.handleSort.bind(this);

  }

  handleSort(){

    const { name, status } = this.props;

    if(this.props.handleSort){

      this.props.handleSort({
        name,
        status
      });

    }


  }

  renderButtonIcon() {

    const { isSorted, orderBy } = this.props;

    let status = '';
    status = orderBy === 'asc'?'down':'up';
    let cName = 'slds-button slds-button_icon slds-button_icon ';
    if(!isSorted) {
      cName+= ' slds-hidden';
    }

    const SLDS_URL = window.SLDS_URL || '/slds/';


    const icon_path = `${ SLDS_URL }assets/icons/utility-sprite/svg/symbols.svg#`;

    const svgClass = 'slds-button__icon slds-button__icon_small';
    return (
      <button className={ cName }  title="Sort">
        <svg className={ svgClass  + (( status==='up')?'':' slds-hide') } aria-hidden="true">
          <use xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref={ `${icon_path}arrowdown` } />
        </svg>
        <svg className={ svgClass  + (( status==='down')?'':' slds-hide') }  aria-hidden="true">
          <use xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref={ `${icon_path}arrowup` } />
        </svg>
        <span className="slds-assistive-text">Sort</span>
      </button>
    );

  }

  render(){
    const  { text } = this.props;

    return (
      <div className="thead-text "
        style={ { whiteSpace: 'pre-line' }}
        onClick={ this.handleSort } >{ text}
        { this.renderButtonIcon() }
      </div>
    );
  }

  componentDidMount(){
    svg4everybody();
  }

}



export default TableHead;
