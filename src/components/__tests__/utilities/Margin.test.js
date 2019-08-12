import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';
import { Spacing } from '../../../enum.js';


// Top
describe('rendering Margin Top', () => {

  it('should render a <div/> with class `slds-m-top_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mTop: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-top_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-top_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mTop: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-top_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-top_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      mTop: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-top_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-top_small`' , () => {
    const props  = {
      label: 'Badge label',
      mTop: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-top_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-top_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mTop: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-top_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-m-top_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mTop: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-top_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-top_large`' , () => {
    const props  = {
      label: 'Badge label',
      mTop: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-top_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-top_large`' , () => {
    const props  = {
      label: 'Badge label',
      mTop: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-top_x-large')
    ).toEqual(true);
  });

});



// Left
describe('rendering Margin Left', () => {

  it('should render a <div/> with class `slds-m-left_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mLeft: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-left_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-left_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mLeft: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-left_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-left_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      mLeft: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-left_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-left_small`' , () => {
    const props  = {
      label: 'Badge label',
      mLeft: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-left_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-left_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mLeft: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-left_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-m-left_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mLeft: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-left_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-left_large`' , () => {
    const props  = {
      label: 'Badge label',
      mLeft: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-left_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-left_large`' , () => {
    const props  = {
      label: 'Badge label',
      mLeft: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-left_x-large')
    ).toEqual(true);
  });

});


// Right
describe('rendering Margin Right', () => {

  it('should render a <div/> with class `slds-m-right_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mRight: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-right_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-right_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mRight: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-right_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-right_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      mRight: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-right_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-right_small`' , () => {
    const props  = {
      label: 'Badge label',
      mRight: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-right_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-right_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mRight: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-right_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-m-right_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mRight: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-right_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-right_large`' , () => {
    const props  = {
      label: 'Badge label',
      mRight: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-right_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-right_large`' , () => {
    const props  = {
      label: 'Badge label',
      mRight: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-right_x-large')
    ).toEqual(true);
  });

});


// Bottom
describe('rendering Margin Bottom', () => {

  it('should render a <div/> with class `slds-m-bottom_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mBottom: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-bottom_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-bottom_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mBottom: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-bottom_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-bottom_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      mBottom: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-bottom_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-bottom_small`' , () => {
    const props  = {
      label: 'Badge label',
      mBottom: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-bottom_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-bottom_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mBottom: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-bottom_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-m-bottom_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mBottom: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-bottom_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-bottom_large`' , () => {
    const props  = {
      label: 'Badge label',
      mBottom: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-bottom_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-bottom_large`' , () => {
    const props  = {
      label: 'Badge label',
      mBottom: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-bottom_x-large')
    ).toEqual(true);
  });

});



// Horizontal


describe('rendering Margin Horizontal', () => {

  it('should render a <div/> with class `slds-m-horizontal_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mHorizontal: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-horizontal_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-horizontal_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mHorizontal: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-horizontal_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-horizontal_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      mHorizontal: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-horizontal_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-horizontal_small`' , () => {
    const props  = {
      label: 'Badge label',
      mHorizontal: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-horizontal_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-horizontal_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mHorizontal: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-horizontal_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-m-horizontal_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mHorizontal: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-horizontal_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-horizontal_large`' , () => {
    const props  = {
      label: 'Badge label',
      mHorizontal: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-horizontal_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-horizontal_large`' , () => {
    const props  = {
      label: 'Badge label',
      mHorizontal: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-horizontal_x-large')
    ).toEqual(true);
  });

});



// Vertical

describe('rendering Margin Vertical', () => {

  it('should render a <div/> with class `slds-m-vertical_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mVertical: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-vertical_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-vertical_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mVertical: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-vertical_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-vertical_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      mVertical: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-vertical_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-vertical_small`' , () => {
    const props  = {
      label: 'Badge label',
      mVertical: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-vertical_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-vertical_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mVertical: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-vertical_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-m-vertical_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mVertical: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-vertical_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-vertical_large`' , () => {
    const props  = {
      label: 'Badge label',
      mVertical: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-vertical_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-vertical_large`' , () => {
    const props  = {
      label: 'Badge label',
      mVertical: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-vertical_x-large')
    ).toEqual(true);
  });

});



// Around

describe('rendering Margin Around', () => {

  it('should render a <div/> with class `slds-m-around_xxx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mAround: Spacing.XXXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-around_xxx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-around_xx-small`' , () => {
    const props  = {
      label: 'Badge label',
      mAround: Spacing.XXSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-around_xx-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-around_x-small`' , () => {
    const props  = {
      label: 'Badge label',
      mAround: Spacing.XSMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-around_x-small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-around_small`' , () => {
    const props  = {
      label: 'Badge label',
      mAround: Spacing.SMALL,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-around_small')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-around_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mAround: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-around_medium')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-m-around_medium`' , () => {
    const props  = {
      label: 'Badge label',
      mAround: Spacing.MEDIUM,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-around_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-around_large`' , () => {
    const props  = {
      label: 'Badge label',
      mAround: Spacing.LARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-around_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-m-around_large`' , () => {
    const props  = {
      label: 'Badge label',
      mAround: Spacing.XLARGE,
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-m-around_x-large')
    ).toEqual(true);
  });

});
