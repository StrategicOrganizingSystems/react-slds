import React from 'react';
import { shallow, mount } from 'enzyme';
import Grid from '../Grid.js';

describe('rendering Grid', () => {
  let wrapper; let props;

  it('should render a <Grid/>', () => {
    wrapper = shallow(<Grid />);
    expect(wrapper.find('div.slds-grid')).toHaveLength(1);
  });


  it('should render a <Grid/> with `slds-gutters`', () => {

    wrapper = shallow(<Grid gutter>Content</Grid>);


    const classes = [
      'slds-grid',
      'slds-gutters'
    ];
    expect(
      classes.every(c => wrapper.hasClass(c))
    ).toEqual(true);
  });

  it('should render a <Grid/> with `slds-wrap`', () => {

    wrapper = shallow(<Grid wrap>Content</Grid>);
    const classes = [
      'slds-grid',
      'slds-wrap'
    ];
    expect(
      classes.every(c => wrapper.hasClass(c))
    ).toEqual(true);
  });

  it('should render a <Grid/> with `slds-no-wrap`', () => {

    wrapper = shallow(<Grid wrap={ false }>Content</Grid>);
    const classes = [
      'slds-grid',
      'slds-nowrap'
    ];
    expect(
      classes.every(c => wrapper.hasClass(c))
    ).toEqual(true);
  });

  it('should render a <Grid/> with `slds-flex`', () => {

    wrapper = shallow(<Grid flex>Content</Grid>);
    const classes = [
      'slds-grid',
      'slds-flex'
    ];
    expect(
      classes.every(c => wrapper.hasClass(c))
    ).toEqual(true);
  });

  it('should render a <Grid/> with `slds-no-flex`', () => {

    wrapper = shallow(<Grid flex={ false }>Content</Grid>);
    const classes = [
      'slds-grid',
      'slds-no-flex'
    ];
    expect(
      classes.every(c => wrapper.hasClass(c))
    ).toEqual(true);
  });



  it('should render a <Grid/> with `slds-gutter` with custom class  ', () => {
    props = {
      className: 'custom-class'
    };
    wrapper = shallow(<Grid gutter  {...props}/>);
    const classes = [
      'slds-grid',
      'slds-gutters',
      'custom-class'
    ];
    expect(
      classes.every(c => wrapper.hasClass(c))
    ).toEqual(true);
  });

});




describe.skip('rendering Grid COLUMN', () => {
  let wrapper; let props;

  it('should render a column', () => {

    wrapper = shallow(<Column />);

    expect(wrapper.find('slds-col')).toHaveLength(1);
  });


});
