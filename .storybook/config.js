import { setAddon, configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
// import JSXAddon from 'storybook-addon-jsx';
import { setDefaults } from '@storybook/addon-info';

import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css';

// jsx
// setAddon(JSXAddon);

// options
setOptions({
  name: 'React SLDS',
  url: '#',
});

// addon-info
setDefaults({
  header: true
});

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  require('../stories/index.js');
  // require('../stories/SpreadSheetsStories.js');
  // require('../stories/SpreadViewsStories.js');
  // require('../stories/TooltipStories.js');
  // require('../stories/PathStories.js');
  require('../stories/PathStories.js');
  require('../stories/VerticalNavStories.js');
  // require('../stories/LookupStories.js');
  // require('../stories/ScopedNotificationStories.js');
  require('../stories/FormInputStories.js');
  require('../stories/FormTextareaStories.js');
  require('../stories/FormSelectStories.js');
  require('../stories/FormCheckboxStories.js');
  require('../stories/FormCheckboxToggleStories.js');
  // require('../stories/PromptStories.js');
  // require('../stories/DataTableStories.js');
  // require('../stories/ModalStories.js');
  // require('../stories/Button2Stories.js');
  require('../stories/Icon2Stories.js');
  require('../stories/ButtonIcon2Stories.js');
  // require('../stories/ButtonGroup2Stories.js');
  // require('../stories/SpinnerStories.js');
  // require('../stories/GridStories.js');
  require('../stories/NotificationStories.js');
  require('../stories/NotificationBubbleStories.js');
  require('../stories/SubTabStories.js');
  require('../stories/FormStories.js');
  require('../stories/PopoverStories.js');
  require('../stories/MediaStories.js');
  require('../stories/NameValueListStories.js');
  require('../stories/DatepickerStories.js');
  require('../stories/LinkStories.js');
  // requireAll(require.context("..", true, /Stories\.js?$/));
}



configure(loadStories, module);
