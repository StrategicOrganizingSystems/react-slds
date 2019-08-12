import React, {Component} from 'react';

export class Item extends Component {

  handleClick = evt => {
    if (this.props.onClick) {
      this.props.onClick(evt);
    }
  }

  render() {
    return (
      <li className={`${this.props.className} slds-breadcrumb__item`} onClick={this.handleClick}>
        <a href={this.props.url || null}>
          {this.props.children}
        </a>
      </li>
    );
  }
}

Item.defaultProps = {
  className: null
};

const Breadcrumb = p => (
  <nav className={ p.className } role="navigation" aria-label={ p.label}>
    <ol className="slds-breadcrumb slds-list_horizontal ">
      { p.children.filter( n => n.type === Item) }
    </ol>
  </nav>
);

Breadcrumb.defaultProps = {
  className: null,
  label: null,
};

export default Breadcrumb;
