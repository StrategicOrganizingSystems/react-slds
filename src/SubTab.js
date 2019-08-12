import React, { PureComponent } from 'react';
import ButtonIcon from './Form/ButtonIcon';

export const Panel = ({ isActive, index: i, children }) => (
  <div
    id={`tab-default-${i}`}
    className={`slds-tabs_default__content slds-${isActive ? 'show' : 'hide'}`}
    role="tabpanel"
    aria-labelledby={`tab-default-${i}__item`}
  >
    {children}
  </div>
);

export const CloseButton = ({ title, onClick }) => (
  <div className="slds-col_bump-left slds-p-left_none slds-p-right_none">
    <ButtonIcon
      type="button"
      variant="utility"
      icon="close"
      withContainer
      iconSize="x-small"
      title={`Close ${title}`}
      onClick={onClick}
      assistiveText={`Close ${title}`}
    />
  </div>
);

// eslint-disable-next-line
class SubTab extends PureComponent {
  state = {
    active: this.props.selectedIndex || 0
  };

  handleClick = (e, i) => {
    this.setState({
      active: i
    });

    return e;
  };

  render() {
    const { children } = this.props;
    const panels = React.Children.toArray(children).filter(
      c => c.type === Panel
    );

    const { active } = this.state;

    // eslint-disable-next-line
    const url = 'javascript:void(0);';
    return (
      <div className="slds-tabs_default slds-sub-tabs">
        <ul className="slds-tabs_default__nav" role="tablist">
          {panels.map((c, i) => {
            const {
              title,
              tabIndex,
              withCloseButton = false,
              onClose
            } = c.props;

            return (
              <li
                key={i}
                className={`slds-tabs_default__item  slds-sub-tabs__item slds-grid slds-grid_vertical-align-center ${
                  active === i ? 'slds-active' : ''
                }`}
                title={title}
                role="presentation"
              >
                <a
                  className="slds-tabs_default__link"
                  href={url}
                  role="tab"
                  tabIndex={tabIndex}
                  aria-selected={active}
                  aria-controls={`tab-default-${i}`}
                  id={`tab-default-${i}__item`}
                  onClick={e => {
                    this.handleClick(e, i);
                    if (c.props.onTabClick) {
                      c.props.onTabClick(i);
                    }
                  }}
                >
                  {title}
                </a>
                {withCloseButton ? (
                  <CloseButton title={title} onClick={onClose} />
                ) : null}
              </li>
            );
          })}
        </ul>
        {panels.map((c, i) => {
          // eslint-disable-next-line
          let { ...panelProps } = c.props;
          return (
            <Panel key={i} index={i} isActive={active === i} {...panelProps} />
          );
        })}
      </div>
    );
  }
}

export default SubTab;
