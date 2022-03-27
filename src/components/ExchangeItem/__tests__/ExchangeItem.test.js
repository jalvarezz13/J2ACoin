import React from "react"
import { shallow } from "enzyme"
import ExchangeItem from "../ExchangeItem"

const rightJson = {
  countries: [],
  date_launched: "2014-07-22T00:00:00.000Z",
  description:
    "Bit2Me is an international ecosystem of crypto solutions that has been growing since 2014, being a leader in Southern Europe with the main mission to generate cryptocurrency education and adoption.\r\nOur Education division boasts of being virtually the largest crypto academy (articles, udemy-format courses with certificates, audio/visual format etc.) in the Spanish speaking world.\r\nWith this, we have 20 different crypto adoption tools and services wherein the B2M token is at the center of everything we do, including our academy. We currently count on 450K verified Bit2Me Wallet users and more than 3 million alumni in Bit2Me Academy from 100 different nationalities.  \r\n\r\nOur competitors also offer a full crypto digital suite. However, none of them focus on our niche demographic wherein we provide customer care, telephone support, and customer success account managers for small accounts in native Spanish, Portuguese, and Italian. Our main focus has always been Southern Europe and Latin America. In fact, half of\r\nour 3 million alumni in our Bit2Me Academy this year are from LATAM, and 80% of our 450K verfified users are residents of iberia peninsula and Italy.",
  fiats: [],
  id: 1561,
  is_hidden: 0,
  is_redistributable: null,
  logo: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/1561.png",
  maker_fee: 0,
  name: "Bit2Me",
  notice: "",
  slug: "bit2me",
  spot_volume_last_updated: "2022-03-27T16:45:15.747Z",
  spot_volume_usd: 14115505.99102702,
  tags: null,
  taker_fee: 0,
  type: "",
  urls: {
    blog: ["https://medium.com/@bit2me"],
    chat: ["https://t.me/Bit2Me_ES"],
    fee: ["https://support.bit2me.com/en/support/solutions/articles/35000172197-what-are-the-fees-for-the-trade-service-"],
    twitter: ["https://twitter.com/bit2me"],
    website: ["https://trade.bit2me.com/exchange/BTC-EUR"],
  },
  weekly_visits: 820,
}
const wrongJson = {
  countries: [],
  date_launched: "2014-07-22T00:00:00.000Z",
  description:
    "Bit2Me is an international ecosystem of crypto solutions that has been growing since 2014, being a leader in Southern Europe with the main mission to generate cryptocurrency education and adoption.\r\nOur Education division boasts of being virtually the largest crypto academy (articles, udemy-format courses with certificates, audio/visual format etc.) in the Spanish speaking world.\r\nWith this, we have 20 different crypto adoption tools and services wherein the B2M token is at the center of everything we do, including our academy. We currently count on 450K verified Bit2Me Wallet users and more than 3 million alumni in Bit2Me Academy from 100 different nationalities.  \r\n\r\nOur competitors also offer a full crypto digital suite. However, none of them focus on our niche demographic wherein we provide customer care, telephone support, and customer success account managers for small accounts in native Spanish, Portuguese, and Italian. Our main focus has always been Southern Europe and Latin America. In fact, half of\r\nour 3 million alumni in our Bit2Me Academy this year are from LATAM, and 80% of our 450K verfified users are residents of iberia peninsula and Italy.",
  fiats: [],
  id: 1561,
  is_hidden: 0,
  is_redistributable: null,
  logo: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/1561.png",
  maker_fee: 0,
  name: "Bit2Me4",
  notice: "",
  slug: "bit2me",
  spot_volume_last_updated: "2022-03-27T16:45:15.747Z",
  spot_volume_usd: 14115505.99102702,
  tags: null,
  taker_fee: 0,
  type: "",
  urls: {
    blog: ["https://medium.com/@bit2me"],
    chat: ["https://t.me/Bit2Me_ES"],
    fee: ["https://support.bit2me.com/en/support/solutions/articles/35000172197-what-are-the-fees-for-the-trade-service-"],
    twitter: [],
    website: [],
  },
  weekly_visits: 820,
}

describe("CryptoRankingItem tests", () => {
  test("Should <ExchangeItem /> renders correctly", () => {
    const wrapper = shallow(<ExchangeItem item={rightJson} />)
    expect(wrapper).toMatchSnapshot()
  })

  test("Should show an incorrect name", () => {
    const wrapper2 = shallow(<ExchangeItem item={wrongJson} />)
    const nameExchange = wrapper2.find("h2").text().trim()
    expect(nameExchange).toBe("Bit2Me4")
  })

  test("Should show five rrss", () => {
    const wrapper3 = shallow(<ExchangeItem item={rightJson} />)
    const rrssCount1 = wrapper3.find("a").length
    expect(rrssCount1).toBe(5)
  })

  test("Should show four rrss", () => {
    const wrapper4 = shallow(<ExchangeItem item={wrongJson} />)
    const rrssCount2 = wrapper4.find("a").length
    expect(rrssCount2).toBe(3)
  })
})
