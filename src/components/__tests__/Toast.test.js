import React from 'react';
import { shallow, mount } from 'enzyme';
import Toast from '../Toast.js';


describe('rendering a Toast', () => {
  let wrapper; let props;
  beforeEach(() => {
    props = {
      notificationType: 'info', // assistive
      
    };
    const content = '26 potential duplicate leads were found.';
    wrapper = shallow(<Toast { ...props } >{ content }</Toast>);
  });

  it('should render a <Toast/>', () => {

    expect(
      wrapper.find('div.slds-notify_container.slds-is-relative')
    ).toHaveLength(1);


    expect(
      wrapper.find(
        'div.notify_container.slds-is-relative'
      ).children().find('div.slds-notify.slds-notify_toast')
    );
  });


  it('should render a <Toast/> with info', () => {
    
    expect(
      wrapper.find('span.slds-assistive-text').props().children
    ).toBe('info');   

  }); 

  it('should render a <Toast/> with content', () => {
    expect(
      wrapper.find('div.slds-notify__content').props().children
    ).toBe('26 potential duplicate leads were found.');   

  });  



});
