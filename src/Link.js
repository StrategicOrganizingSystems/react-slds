import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId, startsWith } from 'lodash';

import { createClassName, isDefined } from './utils';

// Salesforce Link

const Link = ({
  children,
  href,
  recordId,
  inlineJs,
  noDefaultClass,
  instance,
  openNewTab,
  domain,
  objectName,
  ...props
}) => {
  const onClick = () => {
    // LEX
    if (window.sforce && recordId !== null) {
      if (!startsWith(recordId, '#') && recordId.length >= 14) {
        // open new tab
        if (openNewTab) {
          const link = `https://${instance}.lightning.${domain}/lightning/r/${objectName}/${recordId}/view`;
          window.open(link);
        } else {
          window.sforce.one.navigateToSObject(recordId);
        }
      }
    }
  };

  const className = createClassName(
    isDefined(noDefaultClass) && noDefaultClass ? null : 'slds-button',
    props.className
  );

  if (recordId) {
    if (window.sforce) {
      // Lex
      if (inlineJs) {
        href = `javascript:sforce.one.navigateToSObject("${recordId}");`;
      } else {
        return (
          <a className={`${className} `} {...props} onClick={onClick}>
            {children}
          </a>
        );
      }
    } else {
      // Classic
      href = `https://${instance}.salesforce.com/${recordId}`;
    }
  }

  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      target={openNewTab ? '_blank' : null}
    >
      {children}
    </a>
  );
};

Link.defaultProps = {
  href: 'javscript:void(0)',
  instance: 'ap1',
  inlineJs: false,
  domain: 'force.com'
};

Link.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  recordId: PropTypes.string.isRequired,
  objectName: PropTypes.string,
  openNewTab: PropTypes.bool
};
export default Link;
