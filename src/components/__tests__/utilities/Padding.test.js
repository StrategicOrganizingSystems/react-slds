import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';
import { Spacing } from '../../../enum.js';


// Top
describe('rendering Padding Top', () => {

  it('should render a <div/> with class `slds-p-top_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pTop: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-top_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-top_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pTop: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-top_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-top_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      pTop: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-top_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-top_small`' , () => {
    const props  = {
      label: 'Badge label',
      pTop: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-top_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-top_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pTop: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-top_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-p-top_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pTop: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-top_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-top_large`' , () => {
    const props  = {
      label: 'Badge label',
      pTop: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-top_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-top_large`' , () => {
    const props  = {
      label: 'Badge label',
      pTop: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-top_x-large')
    ).toEqual(true);
  });

});



// Left
describe('rendering Padding Left', () => {

  it('should render a <div/> with class `slds-p-left_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pLeft: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-left_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-left_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pLeft: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-left_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-left_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      pLeft: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-left_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-left_small`' , () => {
    const props  = {
      label: 'Badge label',
      pLeft: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-left_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-left_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pLeft: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-left_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-p-left_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pLeft: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-left_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-left_large`' , () => {
    const props  = {
      label: 'Badge label',
      pLeft: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-left_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-left_large`' , () => {
    const props  = {
      label: 'Badge label',
      pLeft: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-left_x-large')
    ).toEqual(true);
  });

});


// Right
describe('rendering Padding Right', () => {

  it('should render a <div/> with class `slds-p-right_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pRight: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-right_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-right_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pRight: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-right_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-right_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      pRight: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-right_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-right_small`' , () => {
    const props  = {
      label: 'Badge label',
      pRight: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-right_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-right_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pRight: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-right_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-p-right_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pRight: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-right_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-right_large`' , () => {
    const props  = {
      label: 'Badge label',
      pRight: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-right_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-right_large`' , () => {
    const props  = {
      label: 'Badge label',
      pRight: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-right_x-large')
    ).toEqual(true);
  });

});


// Bottom
describe('rendering Padding Bottom', () => {

  it('should render a <div/> with class `slds-p-bottom_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pBottom: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-bottom_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-bottom_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pBottom: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-bottom_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-bottom_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      pBottom: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-bottom_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-bottom_small`' , () => {
    const props  = {
      label: 'Badge label',
      pBottom: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-bottom_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-bottom_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pBottom: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-bottom_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-p-bottom_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pBottom: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-bottom_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-bottom_large`' , () => {
    const props  = {
      label: 'Badge label',
      pBottom: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-bottom_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-bottom_large`' , () => {
    const props  = {
      label: 'Badge label',
      pBottom: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-bottom_x-large')
    ).toEqual(true);
  });

});



// Horizontal


describe('rendering Padding Horizontal', () => {

  it('should render a <div/> with class `slds-p-horizontal_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pHorizontal: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-horizontal_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-horizontal_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pHorizontal: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-horizontal_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-horizontal_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      pHorizontal: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-horizontal_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-horizontal_small`' , () => {
    const props  = {
      label: 'Badge label',
      pHorizontal: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-horizontal_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-horizontal_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pHorizontal: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-horizontal_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-p-horizontal_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pHorizontal: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-horizontal_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-horizontal_large`' , () => {
    const props  = {
      label: 'Badge label',
      pHorizontal: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-horizontal_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-horizontal_large`' , () => {
    const props  = {
      label: 'Badge label',
      pHorizontal: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-horizontal_x-large')
    ).toEqual(true);
  });

});



// Vertical

describe('rendering Padding Vertical', () => {

  it('should render a <div/> with class `slds-p-vertical_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pVertical: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-vertical_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-vertical_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pVertical: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-vertical_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-vertical_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      pVertical: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-vertical_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-vertical_small`' , () => {
    const props  = {
      label: 'Badge label',
      pVertical: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-vertical_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-vertical_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pVertical: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-vertical_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-p-vertical_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pVertical: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-vertical_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-vertical_large`' , () => {
    const props  = {
      label: 'Badge label',
      pVertical: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-vertical_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-vertical_large`' , () => {
    const props  = {
      label: 'Badge label',
      pVertical: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-vertical_x-large')
    ).toEqual(true);
  });

});



// Around

describe('rendering Padding Around', () => {

  it('should render a <div/> with class `slds-p-around_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pAround: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-around_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-around_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      pAround: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-around_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-around_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      pAround: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-around_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-around_small`' , () => {
    const props  = {
      label: 'Badge label',
      pAround: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-around_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-around_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pAround: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-around_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-p-around_medium`' , () => {
    const props  = {
      label: 'Badge label',
      pAround: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-around_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-around_large`' , () => {
    const props  = {
      label: 'Badge label',
      pAround: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-around_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-p-around_large`' , () => {
    const props  = {
      label: 'Badge label',
      pAround: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-p-around_x-large')
    ).toEqual(true);
  });

});
