// import React from 'react';
import * as MockData from '../../Utility/MockData';
import { cleanNYTBooks } from '../Cleaners/cleanNYTBooks';


describe('cleanNYTBooks', () => {

  it('Should return a cleanBook when an uncleanBook is passed', () => {
    let result = cleanNYTBooks(MockData.uncleanBooks);
    expect(result).toEqual(MockData.cleanBooks);
  });
});