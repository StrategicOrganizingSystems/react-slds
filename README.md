# React SLDS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/).

## Installation
```
npm install https://github.com/cubiccompass/react-slds @salesforce-ux/design-system --save
```

### SLDS Stylesheets
Create stylesheet file and add this code
```
@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
```

### SVG
Declare svg path
```
<script>
var SLDS_URL = "{!URLFOR($Asset.SLDS)}";
</script>
```


### Test
```
npm test
```


### Storybook
```
npm run storybook
```
