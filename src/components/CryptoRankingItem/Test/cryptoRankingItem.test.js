import React from 'react'
import renderer from 'react-test-renderer'
import CryptoRankingItem from '../CryptoRankingItem'
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const goodjson = {
  "circulating_supply": 18994618,
  "cmc_rank": 1,
  "date_added": "2013-04-28T00:00:00.000Z",
  "id": 1,
  "last_updated": "2022-03-26T18:20:00.000Z",
  "max_supply": 21000000,
  "name": "Bitcoin",
  "num_market_pairs": 9274,
  "platform": null,
  "quote": {
      "USD": {
          "fully_diluted_market_cap": 931966275464.83,
          "last_updated": "2022-03-26T18:20:00.000Z",
          "market_cap": 842968732920.8187,
          "market_cap_dominance": 42.0811,
          "percent_change_1h": 0.03335492,
          "percent_change_24h": -0.04590512,
          "percent_change_30d": 23.34775013,
          "percent_change_60d": 18.90127295,
          "percent_change_7d": 5.83178147,
          "percent_change_90d": -11.66697751,
          "price": 44379.34645070613,
          "volume_24h": 16515063157.110834,
          "volume_change_24h": -46.1275
      }
  },
  "self_reported_circulating_supply": null,
  "self_reported_market_cap": null,
  "slug": "bitcoin",
  "symbol": "BTC",
  "tags": [
      "mineable",
      "pow",
      "sha-256",
      "store-of-value",
      "state-channel",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "galaxy-digital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio"
  ],
  "total_supply": 18994618
}
const badjson ={
  "circulating_supply": 18994618,
  "cmc_rank": 1,
  "date_added": "2013-04-28T00:00:00.000Z",
  "id": 1,
  "last_updated": "2022-03-26T18:20:00.000Z",
  "max_supply": 21000000,
  "name": "Bitcoin_malo",
  "num_market_pairs": 9274,
  "platform": null,
  "quote": {
      "USD": {
          "fully_diluted_market_cap": 931966275464.83,
          "last_updated": "2022-03-26T18:20:00.000Z",
          "market_cap": 842968732920.8187,
          "market_cap_dominance": 42.0811,
          "percent_change_1h": 0.03335492,
          "percent_change_24h": -0.04590512,
          "percent_change_30d": 23.34775013,
          "percent_change_60d": 18.90127295,
          "percent_change_7d": 5.83178147,
          "percent_change_90d": -11.66697751,
          "price": 44389.34645070613,
          "volume_24h": 16515063157.110834,
          "volume_change_24h": -46.1275
      }
  },
  "self_reported_circulating_supply": null,
  "self_reported_market_cap": null,
  "slug": "bitcoin",
  "symbol": "BTC",
  "tags": [
      "mineable",
      "pow",
      "sha-256",
      "store-of-value",
      "state-channel",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "galaxy-digital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio"
  ],
  "total_supply": 18994618
}
it('renders correctly', () => {
  const tree = renderer
    .create(<CryptoRankingItem item={goodjson} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe("CryptoRankingItem tests", () => {
  
 
  test("Should return pass test if all the component is rendered correctly", () => {
    let wrapper = shallow(<CryptoRankingItem item={goodjson} />);
    
    const pricexpected = wrapper.find('item-price');
    expect(pricexpected.firstChild).toHaveClass('item-price')
  });
  test("Should return NOT pass test if all the component is rendered correctly", () => {
    let wrapper = shallow(<CryptoRankingItem item={badjson} />);
    const pricexpected = wrapper.find('item-price');
    expect(pricexpected.firstChild).toHaveClass('item-price')
  });
});
