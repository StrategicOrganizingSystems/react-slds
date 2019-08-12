import React from 'react';
import { render, shallow } from 'enzyme';
import Modal from '../Modal';
import Button from '../Button';

it('renders without crashing', () => {
  shallow(<Modal />);
});

it('should be hidden when show prop is false', () => {
  const wrapper = shallow(<Modal show={false} />);
  expect(wrapper.find('div').exists()).toEqual(false);
});

it('renders modal title', () => {
  const wrapper = shallow(<Modal show title="my title" footerButtons={['no', 'yes']} />);
  expect(wrapper.find('#modal-heading').text()).toBe('my title');
});

it('renders modal content', () => {
  const wrapper = shallow(<Modal show content="content" footerButtons={['no', 'yes']} />);
  expect(wrapper.find('.slds-modal__content').text()).toBe('content');
});

it('renders modal footer', () => {
  const wrapper = shallow(<Modal show footerButtons={['no', 'yes']} />);
  expect(wrapper.find(Button)).toHaveLength(2);
});

it('closes the modal when x button is clicked', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Modal show footerButtons={['no', 'yes']} handleCloseModal={fn} />);
  wrapper.find('button').simulate('click');
  expect(fn).toHaveBeenCalled();
});
