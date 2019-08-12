import React from 'react';
import PropTypes from 'prop-types';

export const generateLink = (domain, instance, objectName, recordId) =>
  window.sforce
    ? `${domain}/lightning/r/${objectName}/${recordId}/view`
    : `https://${instance}.salesforce.com/${recordId}`;

const RecordLink = ({
  domain,
  instance,
  objectName,
  recordId,
  children,
  openNewTab = false,
  ...props
}) => {
  const link = generateLink(domain, instance, objectName, recordId);
  const href = openNewTab ? `javascript:window.open("${link}")` : link;
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

RecordLink.propTypes = {
  domain: PropTypes.string.isRequired,
  instance: PropTypes.string.isRequired,
  objectName: PropTypes.string.isRequired,
  recordId: PropTypes.string.isRequired
};

export default RecordLink;
