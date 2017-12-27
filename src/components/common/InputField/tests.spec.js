import React from 'react';
import { shallow } from 'enzyme';

import InputField from './';

describe('InputField', () => {
  let props;
  let component;


  describe('"text" type input field', () => {
    beforeEach(() => {
      props = {
        boundValue: '',
        label: 'Whatever',
        name: 'text',
        onInputChange: jest.fn(),
        type: 'text',
      };

      component = shallow(<InputField {...props} />);
    });

    test('renders a text input correctly', () => {
      expect(component).toMatchSnapshot();
      expect(component.find('input[type="email"]').length).toEqual(0);
      expect(component.find('input[type="text"]').length).toEqual(1);
      expect(component.find('input[type="password"]').length).toEqual(0);
    });
  });

  describe('"password" type input field', () => {
    beforeEach(() => {
      props = {
        boundValue: '',
        label: 'Password',
        name: 'password',
        onInputChange: jest.fn(),
        type: 'password',
      };

      component = shallow(<InputField {...props} />);
    });

    test('renders a password input correctly', () => {
      expect(component).toMatchSnapshot();
      expect(component.find('input[type="email"]').length).toEqual(0);
      expect(component.find('input[type="text"]').length).toEqual(0);
      expect(component.find('input[type="password"]').length).toEqual(1);
    });
  });

  describe('"email" type input field', () => {
    beforeEach(() => {
      props = {
        boundValue: '',
        label: 'Email',
        name: 'email',
        onInputChange: jest.fn(),
        type: 'email',
      };

      component = shallow(<InputField {...props} />);
    });

    test('renders an email input correctly', () => {
      expect(component).toMatchSnapshot();
      expect(component.find('input[type="email"]').length).toEqual(1);
      expect(component.find('input[type="password"]').length).toEqual(0);
      expect(component.find('input[type="text"]').length).toEqual(0);
    });
  });
});
