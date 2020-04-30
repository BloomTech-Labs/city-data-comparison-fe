import React from 'react'
import { render } from '@testing-library/react'

import { Provider } from 'react-redux';;
import configureStore from 'redux-mock-store';

import '@testing-library/jest-dom/extend-expect'

import reduxMock from 'react-redux';

import DeselectCityButton from './DeselectCityButton.js'


jest.mock('react-redux')

describe('DeselectCityButton', () => {
    it('mocks dispatch', () => {
        const city = {'_id': 1234}
        render(<Provider><DeselectCityButton city={city}/></Provider>)
        expect(reduxMock).toHaveBeenCalledTimes(1);
    })
    it.todo('displays an img tag')
    it.todo('passes an REMOVE_CITY action to dispatch')
})