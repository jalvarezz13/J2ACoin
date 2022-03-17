import React from 'react'
import renderer from 'react-test-renderer'
import Link from '../Link'

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="https://coinmarketcap.com/">CoinMarketCap</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
