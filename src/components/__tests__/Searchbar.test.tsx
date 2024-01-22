import {act, fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import Searchbar from '../Searchbar.tsx';

describe('Searchbar', () => {
  describe('clicking submit button', () => {
    const onCityChange = jest.fn();
    const CITY = 'London';
    const SEARCH_INPUT_TEST_ID = 'searchCity';
    const SUBMIT_BUTTON_TEST_ID = 'submitButton';

    beforeEach(() => {
      render(<Searchbar onCityChange={onCityChange} />);

      act(() => {
        fireEvent.changeText(screen.getByTestId(SEARCH_INPUT_TEST_ID), CITY);
      });

      fireEvent.press(screen.getByTestId(SUBMIT_BUTTON_TEST_ID));
    });

    it('Clear search after submit', () => {
      expect(screen.getByTestId(SEARCH_INPUT_TEST_ID)).toHaveProp('value', '');
    });

    it('Calls onCityChange event', () => {
      expect(onCityChange).toHaveBeenCalledWith(CITY);
    });
  });
});
