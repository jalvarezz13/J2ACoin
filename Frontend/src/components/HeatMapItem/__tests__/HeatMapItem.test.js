import React from "react"
import { shallow } from "enzyme"
import HeatMapItem from "../HeatMapItem"

const rightJson = "bitcoin"
const wrongJson = "bnb"

const style = (size) => {
  return {
    fontSize: size,
  }
}

describe("CryptoRankingItem tests", () => {
  test("Should <ExchangeItem /> renders correctly", () => {
    const wrapper = shallow(<HeatMapItem slug={rightJson} style={style(45)} />)
    expect(wrapper).toMatchSnapshot()
  })

  test("Should show loading icon", () => {
    const wrapper2 = shallow(<HeatMapItem slug={wrongJson} style={style(45)} />)
    const loadingIcon = wrapper2.find("Loading").exists()
    expect(loadingIcon).toBe(true)
  })
})
