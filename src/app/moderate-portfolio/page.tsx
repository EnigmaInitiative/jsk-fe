import Image from "next/image";
import React from "react";

const ModeratePortfolio: React.FC = () => {
  return (
    <div className="container mx-auto overflow-x-hidden p-8">
      <h1 className="mb-6 text-4xl font-bold">Moderate Portfolio</h1>

      {/* Disclaimer Section */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Disclaimer</h2>
        <p className="text-gray-800">
          Century Financial Consultancy LLC (“CFC”) is a Limited Liability
          Company incorporated under the Laws of UAE and is duly licensed and
          regulated by the Emirates Securities and Commodities Authority of UAE
          (SCA). This document is a marketing material and is for informational
          purposes only and must not be construed to be an advice to invest or
          otherwise in any investment or financial product. CFC does not
          guarantee as to adequacy, accuracy, completeness or reliability of any
          information or data contained herein and under no circumstances
          whatsoever none of such information or data be construed as an advice
          or trading strategy or recommendation to deal (Buy/Sell) in any
          investment or financial product. CFC is not responsible or liable for
          any result, gain or loss, based on this information, in whole or in
          part.
        </p>
        <p className="text-gray-800">
          Please carefully read full disclosure mentioned on the last slide of
          this document.
        </p>
        <p className="text-gray-800">Data Source: Bloomberg</p>
      </section>

      {/* Portfolio Snapshot */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Portfolio Snapshot</h2>
        <p>Total Investment Value: $150,000</p>
        <p>Leverage: 2.5x</p>

        <div className="w-full overflow-x-auto">
          <table className="mt-6 min-w-full border-collapse overflow-x-scroll border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">
                  Strategy Type
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Asset Class
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Asset Class Allocation
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Security Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Allocation</th>
                <th className="border border-gray-300 px-4 py-2">
                  Investment Amount
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Estimate Returns
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Estimate Gains with 2.5x Leverage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Moderate</td>
                <td className="border border-gray-300 px-4 py-2">Bonds</td>
                <td className="border border-gray-300 px-4 py-2">30%</td>
                <td className="border border-gray-300 px-4 py-2">Euro Buxl</td>
                <td className="border border-gray-300 px-4 py-2">18%</td>
                <td className="border border-gray-300 px-4 py-2">$67,500</td>
                <td className="border border-gray-300 px-4 py-2">22%</td>
                <td className="border border-gray-300 px-4 py-2">$15,053</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">
                  T-Bond Ultra
                </td>
                <td className="border border-gray-300 px-4 py-2">12%</td>
                <td className="border border-gray-300 px-4 py-2">$45,000</td>
                <td className="border border-gray-300 px-4 py-2">15%</td>
                <td className="border border-gray-300 px-4 py-2">$6,840</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Indices</td>
                <td className="border border-gray-300 px-4 py-2">15%</td>
                <td className="border border-gray-300 px-4 py-2">
                  S&P 500 Index
                </td>
                <td className="border border-gray-300 px-4 py-2">5%</td>
                <td className="border border-gray-300 px-4 py-2">$18,750</td>
                <td className="border border-gray-300 px-4 py-2">10%</td>
                <td className="border border-gray-300 px-4 py-2">$1,875</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">
                  Nasdaq Index
                </td>
                <td className="border border-gray-300 px-4 py-2">10%</td>
                <td className="border border-gray-300 px-4 py-2">$37,500</td>
                <td className="border border-gray-300 px-4 py-2">15%</td>
                <td className="border border-gray-300 px-4 py-2">$5,625</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Gold</td>
                <td className="border border-gray-300 px-4 py-2">20%</td>
                <td className="border border-gray-300 px-4 py-2">Gold</td>
                <td className="border border-gray-300 px-4 py-2">20%</td>
                <td className="border border-gray-300 px-4 py-2">$75,000</td>
                <td className="border border-gray-300 px-4 py-2">25%</td>
                <td className="border border-gray-300 px-4 py-2">$18,750</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Equities</td>
                <td className="border border-gray-300 px-4 py-2">35%</td>
                <td className="border border-gray-300 px-4 py-2">
                  Crowdstrike Holdings Inc
                </td>
                <td className="border border-gray-300 px-4 py-2">7%</td>
                <td className="border border-gray-300 px-4 py-2">$26,250</td>
                <td className="border border-gray-300 px-4 py-2">61%</td>
                <td className="border border-gray-300 px-4 py-2">$15,914</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">
                  NVIDIA Corp
                </td>
                <td className="border border-gray-300 px-4 py-2">7%</td>
                <td className="border border-gray-300 px-4 py-2">$26,250</td>
                <td className="border border-gray-300 px-4 py-2">41%</td>
                <td className="border border-gray-300 px-4 py-2">$10,668</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">
                  Amazon.com Inc
                </td>
                <td className="border border-gray-300 px-4 py-2">7%</td>
                <td className="border border-gray-300 px-4 py-2">$26,250</td>
                <td className="border border-gray-300 px-4 py-2">37%</td>
                <td className="border border-gray-300 px-4 py-2">$9,762</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">
                  Microsoft Corp
                </td>
                <td className="border border-gray-300 px-4 py-2">7%</td>
                <td className="border border-gray-300 px-4 py-2">$26,250</td>
                <td className="border border-gray-300 px-4 py-2">27%</td>
                <td className="border border-gray-300 px-4 py-2">$7,181</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">
                  Alphabet Inc
                </td>
                <td className="border border-gray-300 px-4 py-2">7%</td>
                <td className="border border-gray-300 px-4 py-2">$26,250</td>
                <td className="border border-gray-300 px-4 py-2">29%</td>
                <td className="border border-gray-300 px-4 py-2">$7,741</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <h3 className="mb-2 text-xl font-medium">Portfolio Allocation</h3>
          <ul className="list-inside list-disc">
            <li>Bonds: 30%</li>
            <li>Indices: 15%</li>
            <li>Gold: 20%</li>
            <li>Equities: 35%</li>
          </ul>
          <Image
            height={1000}
            width={1000}
            src="/portfolioallocation3.jpeg"
            alt="Portfolio Allocation Chart"
            className="mx-auto my-6 h-96 w-96"
          />
        </div>
      </section>

      {/* Bonds Section */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Bonds</h2>
        <h3 className="mb-2 text-xl font-medium">Euro Buxl</h3>
        <p className="mb-4 text-gray-800">
          In its most recent meeting on July 18th, 2024, the European Central
          Bank opted to maintain interest rates at 4.25%, aligning with market
          expectations.
        </p>
        <p className="mb-4 text-gray-800">
          Looking ahead, the latest Eurozone CPI report revealed an inflation
          rate of 2.6%, slightly above the forecasted 2.5%. The primary driver
          behind this uptick was a significant rise in energy inflation, which
          increased by 1.3% in July.
        </p>
        <p className="mb-4 text-gray-800">
          A key area of concern for ECB policymakers remains services inflation,
          which, despite being the most persistent pressure, saw a slight
          deceleration from 4.1% in June to 4% in July. This marked the first
          slowdown in three months. Economists suggest that this modest decline
          in services inflation may be sufficient for a rate cut in September,
          which is currently viewed as the base case scenario by many
          economists. As of now, market participants are pricing in a 93.8%
          likelihood of a rate cut in the upcoming September meeting.
        </p>
        <p className="mb-4 text-gray-800">
          The report also highlighted that the price growth for food, alcohol,
          and tobacco decelerated to 2.3%, while the cost of other goods saw a
          slight increase, rising by 0.8%. The core inflation measure remained
          steady at 2.9%. This steadiness surprised some economists who had
          expected a slight decrease in core inflation. The unexpected stability
          was attributed to increased container shipping costs, which
          temporarily pushed up goods inflation. However, analysts believe the
          ECB may not be overly concerned about this, as futures markets
          indicate that the spike in shipping costs is likely temporary.
        </p>
        <p className="mb-4 text-gray-800">
          Overall, economists anticipate that inflation will continue to
          moderate, paving the way for potential interest rate reductions. This
          outlook supports a positive sentiment for Buxl prices, as easing
          inflation and lower interest rates typically bolster bond markets.
        </p>
        <p className="mb-4 text-gray-800">
          Furthermore, given the recession fears in the US, if the Fed decides
          to cut interest rates, the ECB could follow the same.
        </p>

        <h3 className="mb-2 text-xl font-medium">Regression Analysis</h3>
        <p className="mb-4 text-gray-800">
          Regression analysis is a useful tool to assess the strength of
          relationships between different variables and for modeling how these
          relationships will evolve in the future. The model below is used to
          forecast the movement in the Euro Buxl’s price when the 30-year German
          Government yield changes.
        </p>

        <div className="w-full overflow-x-auto">
          <table className="mt-6 w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Scenario</th>
                <th className="border border-gray-300 px-4 py-2">
                  Estimated German 30-Year Government Bond Yield
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Estimated Euro-Buxl Price
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Estimated % Change in Euro-Buxl
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Current Levels
                </td>
                <td className="border border-gray-300 px-4 py-2">2.42%</td>
                <td className="border border-gray-300 px-4 py-2">€137.35</td>
                <td className="border border-gray-300 px-4 py-2">Base Case</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Decreases by 50 bps
                </td>
                <td className="border border-gray-300 px-4 py-2">1.92%</td>
                <td className="border border-gray-300 px-4 py-2">€152.68</td>
                <td className="border border-gray-300 px-4 py-2">11.2%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Decreases by 100 bps
                </td>
                <td className="border border-gray-300 px-4 py-2">1.42%</td>
                <td className="border border-gray-300 px-4 py-2">€168.02</td>
                <td className="border border-gray-300 px-4 py-2">22.3%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Increases by 50 bps
                </td>
                <td className="border border-gray-300 px-4 py-2">2.92%</td>
                <td className="border border-gray-300 px-4 py-2">€122.01</td>
                <td className="border border-gray-300 px-4 py-2">-11.2%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Increases by 100 bps
                </td>
                <td className="border border-gray-300 px-4 py-2">3.42%</td>
                <td className="border border-gray-300 px-4 py-2">€106.67</td>
                <td className="border border-gray-300 px-4 py-2">-22.3%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-2 text-xl font-medium">Technical Perspective</h3>
        <p className="mb-4 text-gray-800">
          From a technical perspective, Buxl experienced a breakout from a wedge
          formation. Additionally, a breakout from a bull flag pattern has been
          observed, which reinforces the bullish momentum in bond futures. The
          breakout has also been retested, confirming the upward trend. The
          target level is identified at 155, where a strong Fibonacci confluence
          from a retracement and projection aligns. Meanwhile, the 130-price
          level serves as a significant support zone.
        </p>

        <Image
          height={1000}
          width={1000}
          src="/eurobuxl2.jpeg"
          alt="Euro Buxl Technical Chart"
          className="mx-auto my-6 h-64 md:h-[30rem] md:w-[80%]"
        />

        <h3 className="mb-2 text-xl font-medium">U.S. T-Bond Ultra</h3>
        <p className="mb-4 text-gray-800">
          At the July FOMC meeting, the Federal Reserve kept interest rates
          steady at 5.25% to 5.50%, as expected. Notably, the post-meeting
          statement highlighted that inflation remains only somewhat elevated,
          and job gains have moderated. Fed Chair Jerome Powell hinted at a
          potential rate cut in September due to risks associated with weakening
          labor market conditions.
        </p>
        <p className="mb-4 text-gray-800">
          Inflation has improved significantly, dropping from a peak of 9.1% in
          June 2022 to 3% YoY in June 2024. Although still above the Fed’s 2%
          target, this marks the first month-over-month decline since May 2020.
          Uneven disinflation is evident in economic reports: Q2 2024 GDP likely
          accelerated to 2.8%, core PCE inflation held steady at 2.6%, and
          annual PCE inflation fell to 2.5%.
        </p>
        <p className="mb-4 text-gray-800">
          Despite robust job growth, the labor market has eased. The
          unemployment rate rose to 4.3%, and wage growth slowed. Payrolls
          posted an increase of only 114,000 versus an analyst consensus of
          175,000. In line with this, markets anticipate rate cuts later this
          year to support the economy. According to the CME Fed Watch Tool,
          there is now an 85% probability of a 50 basis point rate cut in the
          upcoming September meeting. This marks a significant increase from
          just a month ago when the probability stood at only 5.50%.
          Additionally, markets are factoring in the possibility of a recession
          early next year, leading to expectations that bonds will outperform
          other assets making U.S. T-Bond Ultra an attractive investment
          opportunity.
        </p>

        <h3 className="mb-2 text-xl font-medium">Regression Analysis</h3>
        <div className="w-full overflow-x-auto">
          <table className="mt-6 w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Scenario</th>
                <th className="border border-gray-300 px-4 py-2">
                  Estimated US 30-Year Government Bond Yield
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Estimated T-Bond Ultra Price
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Estimated % Change in T-Bond Ultra
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Current Levels
                </td>
                <td className="border border-gray-300 px-4 py-2">4.11%</td>
                <td className="border border-gray-300 px-4 py-2">$133.78</td>
                <td className="border border-gray-300 px-4 py-2">Base Case</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Decreases by 50 bps
                </td>
                <td className="border border-gray-300 px-4 py-2">3.61%</td>
                <td className="border border-gray-300 px-4 py-2">$143.93</td>
                <td className="border border-gray-300 px-4 py-2">7.6%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Decreases by 100 bps
                </td>
                <td className="border border-gray-300 px-4 py-2">3.11%</td>
                <td className="border border-gray-300 px-4 py-2">$154.08</td>
                <td className="border border-gray-300 px-4 py-2">15.2%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Increases by 50 bps
                </td>
                <td className="border border-gray-300 px-4 py-2">4.61%</td>
                <td className="border border-gray-300 px-4 py-2">$123.63</td>
                <td className="border border-gray-300 px-4 py-2">-7.6%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Increases by 100 bps
                </td>
                <td className="border border-gray-300 px-4 py-2">5.11%</td>
                <td className="border border-gray-300 px-4 py-2">$113.49</td>
                <td className="border border-gray-300 px-4 py-2">-15.2%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-2 text-xl font-medium">Technical Perspective</h3>
        <p className="mb-4 text-gray-800">
          From a technical perspective, T-Bond Ultra experienced a breakout from
          a wedge formation. The target levels are identified at the 144-146
          price level followed by 155-157 price level, where a strong Fibonacci
          confluence from a retracement and projection aligns. Meanwhile, the
          125 and 122 price levels serve as a significant support zone.
        </p>

        <Image
          height={1000}
          width={1000}
          src="/usbondultrachart2.jpeg"
          alt="U.S. T-Bond Ultra Technical Chart"
          className="mx-auto my-6 h-64 md:h-[30rem] md:w-[80%]"
        />
      </section>

      {/* Equities Section */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Blue-chip Stocks</h2>
        <h3 className="mb-2 text-xl font-medium">CrowdStrike Holdings Inc</h3>
        <p className="mb-4 text-gray-800">
          CrowdStrike has established itself as a leading technology company in
          the Endpoint Security market, utilizing a groundbreaking platform that
          effectively expands into key and related markets. The company utilizes
          a cloud-native architecture, lightweight agents on endpoints, and the
          network effects of its AI-based data and analytics platform,
          positioning it as a software company of the future.
        </p>
        <p className="mb-4 text-gray-800">
          For the first quarter of fiscal year 2025, ending on April 30, 2024,
          CrowdStrike achieved a total revenue of $921.0 million, marking a 33%
          increase compared to the previous year. Subscription revenue also
          experienced a 34% increase, reaching $872.2 million. Net cash
          generated from operations totaled $383.2 million, while free cash flow
          amounted to $322.5 million, both surpassing market expectations.
        </p>

        <div className="w-full overflow-x-auto">
          <table className="mt-6 w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Ticker</th>
                <th className="border border-gray-300 px-4 py-2">Last Price</th>
                <th className="border border-gray-300 px-4 py-2">
                  52-Week Low
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  52-Week High
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Market Capitalization
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Analyst Target Price
                </th>
                <th className="border border-gray-300 px-4 py-2">Beta</th>
                <th className="border border-gray-300 px-4 py-2">
                  Forward P/S
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Forward EV/Sales
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  BEst Revenue Growth (%)
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Dividend Yield (%)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Crowdstrike Holdings Inc
                </td>
                <td className="border border-gray-300 px-4 py-2">CRWD</td>
                <td className="border border-gray-300 px-4 py-2">$222.05</td>
                <td className="border border-gray-300 px-4 py-2">$140.52</td>
                <td className="border border-gray-300 px-4 py-2">$398.33</td>
                <td className="border border-gray-300 px-4 py-2">$54.04B</td>
                <td className="border border-gray-300 px-4 py-2">$356.67</td>
                <td className="border border-gray-300 px-4 py-2">1.99</td>
                <td className="border border-gray-300 px-4 py-2">12.83</td>
                <td className="border border-gray-300 px-4 py-2">12.15</td>
                <td className="border border-gray-300 px-4 py-2">30.35</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Image
          height={1000}
          width={1000}
          src="/crowdstrikeholdings2.jpeg"
          alt="Crowdstrike Holdings Chart"
          className="mx-auto my-6 h-64 md:h-[40rem] w-[100%]"
        />

        <h3 className="mb-2 text-xl font-medium">Nvidia Corp.</h3>
        <p className="mb-4 text-gray-800">
          Nvidia showcased a blockbuster quarter with record revenue of $26
          billion, up 18% from Q4 and up 262% from a year ago. Moreover, it
          reported quarterly Data Center revenue of $22.6 billion, up 23% from
          Q4 and up 427% from a year ago. The company announced a ten-for-one
          forward stock split effective June 7, 2024, to help increase
          liquidity. Quarterly cash dividends were also raised 150% from $0.04
          to $0.10 per share of common stock. However, following a planned stock
          split, the dividend will translate to $0.01 per share. Nvidia
          currently holds an estimated 80% market share for AI-powering
          processors.
        </p>
        <p className="mb-4 text-gray-800">
          Nvidia has recently introduced its latest AI chip, which is twice as
          powerful as its current generation of GPUs for training AI models and
          five times more capable for &quot;inference,&quot; which refers to the
          speed at which AI models like ChatGPT can respond to queries. This
          chip could command a 40% premium to the H100 chips, which are
          currently priced between $30,000 to $40,000 each.
        </p>
        <p className="mb-4 text-gray-800">
          The company’s market capitalization has reached $2.8 trillion,
          surpassing Google and Amazon to become the third most valuable company
          in the world by market cap, following Microsoft and Apple.
          Nvidia&apos;s chips have become the cornerstone of the generative AI
          revolution across the world. Companies like Microsoft, OpenAI and
          other entities have invested billions of dollars in Nvidia&apos;s
          chips. These chips possess the computational power behind generative
          AI technology, enabling the rapid generation of human-like text,
          video, and code.
        </p>
        <p className="mb-4 text-gray-800">
          Recently, NVIDIA is making a strategic push in the future of computing
          by collaborating with ORCA Computing and the Poznań Supercomputing and
          Networking Center (PSNC). This partnership focuses on accelerating the
          development of hybrid quantum-classical high-performance computing
          (HPC).
        </p>
        <p className="mb-4 text-gray-800">
          By integrating its GPUs and quantum software (CUDA-Q) with ORCA&apos;s
          quantum computers and PSNC&apos;s infrastructure, NVIDIA gains
          valuable insights into how its technology interacts with real-world
          quantum systems. This early access allows them to optimize and refine
          their offerings for the emerging field of hybrid computing. Moreover,
          this collaboration positions NVIDIA as a frontrunner in the
          development of tools and resources for hybrid HPC. By demonstrating
          the capabilities of its technology in a collaborative setting, NVIDIA
          strengthens its position in this rapidly evolving market. If
          successful, this could lead to new applications and markets for
          NVIDIA&apos;s technology, expanding their reach and impact. Nvidia is
          poised to announce its Q2’2025 results by August-end.
        </p>

        <div className="w-full overflow-x-auto">
          <table className="mt-6 w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Ticker</th>
                <th className="border border-gray-300 px-4 py-2">Last Price</th>
                <th className="border border-gray-300 px-4 py-2">
                  52-Week Low
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  52-Week High
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Market Capitalization
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Analyst Target Price
                </th>
                <th className="border border-gray-300 px-4 py-2">Beta</th>
                <th className="border border-gray-300 px-4 py-2">
                  Forward P/S
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Forward EV/Sales
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  BEst Revenue Growth (%)
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Dividend Yield (%)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  NVIDIA Corp
                </td>
                <td className="border border-gray-300 px-4 py-2">NVDA</td>
                <td className="border border-gray-300 px-4 py-2">$100.45</td>
                <td className="border border-gray-300 px-4 py-2">$39.23</td>
                <td className="border border-gray-300 px-4 py-2">$140.76</td>
                <td className="border border-gray-300 px-4 py-2">$2,471.07B</td>
                <td className="border border-gray-300 px-4 py-2">$141.27</td>
                <td className="border border-gray-300 px-4 py-2">2.06</td>
                <td className="border border-gray-300 px-4 py-2">18.78</td>
                <td className="border border-gray-300 px-4 py-2">18.63</td>
                <td className="border border-gray-300 px-4 py-2">97.97</td>
                <td className="border border-gray-300 px-4 py-2">0.04</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Image
          height={1000}
          width={1000}
          src="/nvidiacorp.jpeg"
          alt="Nvidia Corp Chart"
          className="mx-auto my-6 h-64 w-[100%] md:h-[40rem]"
        />

        <h3 className="mb-2 text-xl font-medium">Amazon.com Inc.</h3>
        <p className="mb-4 text-gray-800">
          E-commerce giant Amazon offers potential for growth through cloud
          computing and a dominant online retail presence. Amazon’s financial
          performance for Q1’2024 came in well above consensus estimates.
          Revenue surged 13% year-over-year to $143.3 billion. Operating income
          stood at $15.3 billion, significantly higher than the guidance range
          between $8 billion to $12 billion while EPS surpassed expectations at
          98 cents. Revenue stemming from Amazon Web Services (AWS) showcased
          the strongest growth in four quarters as it surged 17% to $25 billion.
          Ad revenue grew 24% to $11.8 billion while revenue from third-party
          seller services rose 16% to $34.6 billion. Ad revenue growth was
          driven by strength in Sponsored products due to improvements in
          relevancy and measurement.
        </p>
        <p className="mb-4 text-gray-800">
          Following in the footsteps of Microsoft and Alphabet, Amazon plans
          significant capital expenditure increases in 2024 to meet the rising
          demand for cloud-based AI workloads. Spending is likely to
          &quot;meaningfully increase&quot; from 2023&apos;s $48.4 billion. Q1
          capital expenditure reached nearly $14 billion, comparable to
          Microsoft but exceeding Alphabet. The annual capex is expected to be
          the highest among public companies, reaching $58 billion according to
          analyst estimates.
        </p>
        <p className="mb-4 text-gray-800">
          The retail and cloud giant’s second quarter earnings report was mixed,
          showcasing strength in its cloud business while facing challenges in
          its retail operations. Overall, the earnings exceeded analyst
          expectations, coming in at $1.26 per share. However, its revenue
          growth of 10.1% YoY, totaling $148 billion, fell slightly short of
          market forecasts. The company&apos;s core online store business saw a
          slight 5% increase in sales compared to the previous year. However,
          Amazon&apos;s revenue from third-party sellers, including fees and
          shipping, surged by 12%. Its advertising business also performed well,
          jumping 20% to $12.77 billion, though slightly missing expectations.
          This division has become a major profit driver for Amazon, expanding
          its reach beyond sponsored product listings to compete with tech
          giants like Meta and Alphabet. Amazon&apos;s cloud service, AWS,
          exceeded forecasts with a 19% growth rate. These strong performances
          across multiple segments contributed to a doubling of net income to
          $13.5 billion, reflecting the company&apos;s cost-cutting measures.
          Free cash flow for the trailing twelve months grew an impressive 664%
          y/y to $51.4 billion.
        </p>
        <p className="mb-4 text-gray-800">
          Looking ahead, Amazon plans to launch a discount store focused on
          low-priced, unbranded items. The company also expects operating income
          to remain steady in the third quarter. Kuiper, a subsidiary of Amazon,
          is scheduled to launch its first production satellites in 2024, with
          Amazon targeting the 400 million to 500 million households without
          broadband connectivity.
        </p>

        <div className="w-full overflow-x-auto">
          <table className="mt-6 w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Ticker</th>
                <th className="border border-gray-300 px-4 py-2">Last Price</th>
                <th className="border border-gray-300 px-4 py-2">
                  52-Week Low
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  52-Week High
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Market Capitalization
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Analyst Target Price
                </th>
                <th className="border border-gray-300 px-4 py-2">Beta</th>
                <th className="border border-gray-300 px-4 py-2">
                  Forward P/S
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Forward EV/Sales
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  BEst Revenue Growth (%)
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Dividend Yield (%)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Amazon.com Inc
                </td>
                <td className="border border-gray-300 px-4 py-2">AMZN</td>
                <td className="border border-gray-300 px-4 py-2">$161.02</td>
                <td className="border border-gray-300 px-4 py-2">$118.35</td>
                <td className="border border-gray-300 px-4 py-2">$201.20</td>
                <td className="border border-gray-300 px-4 py-2">$1,690.00B</td>
                <td className="border border-gray-300 px-4 py-2">$220.90</td>
                <td className="border border-gray-300 px-4 py-2">1.39</td>
                <td className="border border-gray-300 px-4 py-2">2.54</td>
                <td className="border border-gray-300 px-4 py-2">2.63</td>
                <td className="border border-gray-300 px-4 py-2">10.52</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Image
          height={1000}
          width={1000}
          src="/amazon.jpeg"
          alt="Amazon.com Chart"
          className="mx-auto my-6 h-64 w-[100%] md:h-[40rem]"
        />

        <h3 className="mb-2 text-xl font-medium">Microsoft Corp.</h3>
        <p className="mb-4 text-gray-800">
          Microsoft Corporation (MSFT) is an American tech giant renowned for
          its products and services, such as Windows, Microsoft 365, Azure, and
          Microsoft Edge. In its most recent quarterly earnings report,
          Microsoft posted a double beat in earnings but surprisingly missed
          expectations in its Azure Cloud business. Despite this, overall
          revenues grew by over 15% YoY to $64.7 billion, net income increased
          by over 10% YoY to $22 billion, and net cash from operations surged
          29% YoY to $37.2 billion.
        </p>
        <p className="mb-4 text-gray-800">
          While some may see the underperformance in Azure as a potential
          indicator of waning interest in AI, it is essential to note that
          revenue in the Intelligent Cloud segment rose by over 19% YoY to $28.5
          billion, with Azure explicitly increasing by 29%. Additionally,
          Microsoft announced plans to increase capital expenditures for the
          fiscal year 2025. CEO Satya Nadella and CFO Amy Hood suggested that
          this higher CAPEX spending reflects a strong demand for AI
          capabilities. They emphasized the architectural alignment between
          cloud and AI infrastructure, indicating that any excess AI capacity
          could be monetized through cloud computing services. This perspective
          aligns with similar statements made by Alphabet&apos;s leadership.
        </p>
        <p className="mb-4 text-gray-800">
          In the gaming sector, Microsoft experienced a significant 61% increase
          in revenue from Xbox content and services, mainly due to the
          acquisition of Activision Blizzard. The success of new game releases,
          such as Diablo IV, and the expansion of games across multiple
          platforms have bolstered Microsoft&apos;s gaming ecosystem, which is
          expected to grow.
        </p>
        <p className="mb-4 text-gray-800">
          From a valuation perspective, Microsoft&apos;s P/E ratio is 35.72,
          slightly below the industry median of 37.66. The company&apos;s ROA is
          notably strong at 19.13%, compared to the industry median of 5.59%,
          highlighting its strong financial position. Moreover, with the stock
          trading more than 10% below its 52-week high, it presents a compelling
          entry point for investors. This robust economic performance, strategic
          investments in AI and gaming, and solid valuation metrics make
          Microsoft an attractive investment opportunity.
        </p>

        <div className="w-full overflow-x-auto">
          <table className="mt-6 w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Ticker</th>
                <th className="border border-gray-300 px-4 py-2">Last Price</th>
                <th className="border border-gray-300 px-4 py-2">
                  52-Week Low
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  52-Week High
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Market Capitalization
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Analyst Target Price
                </th>
                <th className="border border-gray-300 px-4 py-2">Beta</th>
                <th className="border border-gray-300 px-4 py-2">
                  Forward P/S
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Forward EV/Sales
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  BEst Revenue Growth (%)
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Dividend Yield (%)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Microsoft Corp
                </td>
                <td className="border border-gray-300 px-4 py-2">MSFT</td>
                <td className="border border-gray-300 px-4 py-2">$395.15</td>
                <td className="border border-gray-300 px-4 py-2">$309.45</td>
                <td className="border border-gray-300 px-4 py-2">$468.35</td>
                <td className="border border-gray-300 px-4 py-2">$2,937.17B</td>
                <td className="border border-gray-300 px-4 py-2">$503.25</td>
                <td className="border border-gray-300 px-4 py-2">1.15</td>
                <td className="border border-gray-300 px-4 py-2">10.54</td>
                <td className="border border-gray-300 px-4 py-2">10.62</td>
                <td className="border border-gray-300 px-4 py-2">14.14</td>
                <td className="border border-gray-300 px-4 py-2">0.76</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Image
          height={1000}
          width={1000}
          src="/microsoft.jpeg"
          alt="Microsoft Corp Chart"
          className="mx-auto my-6 h-64 w-[100%] md:h-[40rem]"
        />

        <h3 className="mb-2 text-xl font-medium">Alphabet Inc.</h3>
        <p className="mb-4 text-gray-800">
          Alphabet, a dominant force in digital advertising and the proprietor
          of Google Search, YouTube, Google Cloud, the Android mobile operating
          system, and the recently unveiled Gemini model, showcased an
          exceptional performance in the second quarter.
        </p>
        <p className="mb-4 text-gray-800">
          The company introduced its range of generative AI-powered Gemini
          models, featuring various models tailored for specific use cases and
          deployment environments. Indicators suggest these models are aiding
          Alphabet in maintaining its supremacy in the search market, with
          revenues from the &quot;Google Search & other&quot; segment escalating
          by 13.8% yearly.
        </p>
        <p className="mb-4 text-gray-800">
          Alphabet&apos;s Google Cloud arm achieved a milestone by surpassing
          $10 billion in quarterly revenue for the first time during the second
          quarter, generating over $1 billion in operating profit. YouTube
          continues to drive substantial growth, extending its streak as the
          most-viewed streaming platform on U.S. televisions for 17 consecutive
          months in June. The platform benefits from heightened viewer
          engagement and advertising budgets shifting from traditional TV to
          connected TV.
        </p>
        <p className="mb-4 text-gray-800">
          Alphabet closed the second quarter with $105 billion in cash and
          marketable securities, supported by $60.8 billion in free cash flow
          over the past four reported quarters. Despite these strong financials,
          the company trades at a price-to-sales multiple of 7.27, notably lower
          than many AI-focused companies.
        </p>
        <p className="mb-4 text-gray-800">
          Reporting a robust revenue of $84.7 billion, a 14% increase from the
          corresponding period in 2023, Alphabet saw net income surge to $24.3
          billion, marking a 29% rise from the previous year&apos;s second
          quarter. This growth resulted in a profit margin of 28%, up from 25.3%
          in the second quarter of 2023, primarily driven by increased revenue.
          The earnings per share (EPS) reached $1.95, up from $1.48 in the same
          period in 2023, outperforming analyst expectations by 2.4%.
        </p>
        <p className="mb-4 text-gray-800">
          Alphabet remains well-positioned with its array of AI-driven growth
          drivers, strong financial performance, and attractive valuation. This
          positions Alphabet as a potentially rewarding investment for those
          looking to capitalize on its prospects.
        </p>

        <div className="w-full overflow-x-auto">
          <table className="mt-6 w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Ticker</th>
                <th className="border border-gray-300 px-4 py-2">Last Price</th>
                <th className="border border-gray-300 px-4 py-2">
                  52-Week Low
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  52-Week High
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Market Capitalization
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Analyst Target Price
                </th>
                <th className="border border-gray-300 px-4 py-2">Beta</th>
                <th className="border border-gray-300 px-4 py-2">
                  Forward P/S
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Forward EV/Sales
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  BEst Revenue Growth (%)
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Dividend Yield (%)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Alphabet Inc
                </td>
                <td className="border border-gray-300 px-4 py-2">GOOGL</td>
                <td className="border border-gray-300 px-4 py-2">$159.25</td>
                <td className="border border-gray-300 px-4 py-2">$120.21</td>
                <td className="border border-gray-300 px-4 py-2">$191.75</td>
                <td className="border border-gray-300 px-4 py-2">$1,968.73B</td>
                <td className="border border-gray-300 px-4 py-2">$206.21</td>
                <td className="border border-gray-300 px-4 py-2">1.25</td>
                <td className="border border-gray-300 px-4 py-2">6.28</td>
                <td className="border border-gray-300 px-4 py-2">6.05</td>
                <td className="border border-gray-300 px-4 py-2">14.00</td>
                <td className="border border-gray-300 px-4 py-2">0.50</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Image
          height={1000}
          width={1000}
          src="/alphabet.jpeg"
          alt="Alphabet Inc Chart"
          className="mx-auto my-6 h-64 w-[100%] md:h-[40rem]"
        />
      </section>

      {/* Indices Section */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Indices</h2>
        <h3 className="mb-2 text-xl font-medium">S&P 500 Index</h3>
        <p className="mb-4 text-gray-800">
          The S&P 500 is arguably the most important stock market index. It
          tracks the 500 largest U.S.-based companies. The index has surged
          14.7% YoY buoyed by signs of economic resilience, robust Q1 corporate
          earnings and upbeat guidance for upcoming quarters. The top 10
          constituents make up 34% of the index and include companies like Apple
          Inc, Microsoft Corp, Nvidia Corp, and Amazon.com Inc. Recently, the
          index has been experiencing a major pullback due to &quot;The Great
          Rotation,&quot; as investors and hedge funds shift their focus from
          overvalued tech stocks to defensive sectors poised to benefit from the
          evolving macroeconomic landscape.
        </p>
        <p className="mb-4 text-gray-800">
          Adding to the pullback was July’s jobs report, which revealed a
          weakening labor market. The U.S. economy added just 114,000 nonfarm
          payrolls, registering one of the weakest prints since the pandemic.
          This sparked concerns about a potential economic downturn amongst
          investors. Moreover, the unemployment rate rose to 4.3% in July from
          June’s reading of 4.1%, effectively breaching the trigger for the Sahm
          Rule, which is a closely watched recession indicator. Meanwhile, Even
          U.S. manufacturing activity, measured by the PMI reading, slid to 46.8
          in July, marking its steepest contraction in eight months.
        </p>
        <p className="mb-4 text-gray-800">
          What the markets are experiencing now is an unwinding of the bullish
          positioning which resulted in such a strong rally in H124. However,
          stocks are expected to find their footing and recover as inflation
          declines and GDP grows. With the heavy weights of the index being
          fundamentally strong companies, any selloffs present a good buying
          opportunity in anticipation of economic recovery in H224. The S&P is
          currently trading at $5,186 and has a P/E of 22.7. Its expected
          earnings for 2024 are $244.07. The index P/E ratio fell to a support
          level of 20.6x in 2019, 2023, and 2024. By multiplying the P/E with
          the expected earnings we get a support level of $5,027, which can
          serve as a good entry point for exposure to the index.
        </p>

        <Image
          height={1000}
          width={1000}
          src="/sp500.jpeg"
          alt="S&P 500 Chart"
          className="mx-auto my-6 h-64 md:h-[30rem] md:w-[90%]"
        />

        <h3 className="mb-2 text-xl font-medium">Nasdaq Index</h3>
        <p className="mb-4 text-gray-800">
          The Nasdaq 100 is a stock market index that includes 100 of the
          largest non-financial companies listed on the Nasdaq Stock Market. It
          is a tech-heavy index, with significant weightings in the technology
          and consumer services sectors. The index has outperformed the majority
          of the indices across the globe and rose 16% YoY driven by a surge in
          tech stocks. However, in the past month Nasdaq 100 has fallen 7% due
          to a tech sell-off and sector rotation from large cap to small cap.
          This is driven by the fact that investors believe the tech sector
          valuations are stretched. Moreover, July’s job data suggested a weaker
          than expected jobs market which intensified the selloff due to
          recession fears.
        </p>
        <p className="mb-4 text-gray-800">
          Nonetheless, the Nasdaq 100 remains a robust and influential index,
          heavily influenced by the performance of major tech companies. While
          economic and geopolitical uncertainties present challenges, the
          continued innovation in technology provides a positive outlook.
          Looking ahead analysts remain bullish on the index, driven by the
          strong balance sheet and long-term growth prospects of the technology
          sector and any dip in the index can be seen as an attractive
          opportunity.
        </p>
        <p className="mb-4 text-gray-800">
          The Nasdaq 100 is currently trading at $17,895 and has a P/E of 28.8.
          Its expected earnings for 2024 are $672.5. The index P/E ratio fell to
          a support level of 26.2x in 2021, 2023, and 2024. By multiplying the
          P/E with the expected earnings we get a support level of $17,619,
          which can serve as a good entry point for exposure to the index.
        </p>

        <Image
          height={1000}
          width={1000}
          src="/nasdaqindex2.jpeg"
          alt="Nasdaq 100 Chart"
          className="mx-auto my-6 h-64 md:h-[30rem] md:w-[90%]"
        />
      </section>

      {/* Gold Section */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Gold</h2>
        <p className="mb-4 text-gray-800">
          Following a near two-year hiking cycle that drove Fed fund rates to a
          22-year high point, markets are anticipating the arrival of the first
          rate cut in the second half of 2024. The Federal Reserve has signaled
          rate cuts contingent upon inflation easing from the 40-year high
          observed in mid-2022.
        </p>
        <p className="mb-4 text-gray-800">
          Historically, it has been observed that gold tends to outperform
          during the beginning of the rate cut cycle and through the cutting
          cycle.
        </p>

        <div className="w-full overflow-x-auto">
          <table className="mt-6 w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">
                  No. of Cycle
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Name of Period
                </th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">
                  Gold Price Appreciation
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">
                  Dot-com Bubble
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Dec 2000 - June 2003
                </td>
                <td className="border border-gray-300 px-4 py-2">28%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">
                  2008 Financial Crisis
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Sept 2007 - Dec 2008
                </td>
                <td className="border border-gray-300 px-4 py-2">43%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">Covid-19</td>
                <td className="border border-gray-300 px-4 py-2">
                  July 2019 - March 2020
                </td>
                <td className="border border-gray-300 px-4 py-2">27%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4 text-gray-800">
          The table above showcases gold price performance through the
          rate-cutting cycle.
        </p>

        <div className="w-full overflow-x-auto">
          <table className="mt-6 w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">
                  No. of Cycle
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Name of Period
                </th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">
                  Gold Price Appreciation
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">
                  Dot-com Bubble
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  May 2000 - Dec 2000
                </td>
                <td className="border border-gray-300 px-4 py-2">-2%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">
                  2008 Financial Crisis
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  June 2006 - Sept 2007
                </td>
                <td className="border border-gray-300 px-4 py-2">21%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">Covid-19</td>
                <td className="border border-gray-300 px-4 py-2">
                  Dec 2018 - July 2019
                </td>
                <td className="border border-gray-300 px-4 py-2">14%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4 text-gray-800">
          The table above showcases gold price performance from peak rate to
          first rate cut.
        </p>

        <p className="mb-4 text-gray-800">
          During the last three historical time periods between peak rate to
          first rate cut, gold clocked in an average price appreciation of 11%.
          Moreover, during the last three rate cut cycles, the average price
          appreciation of gold was about 33%. Considering the historical trends,
          the conviction for a bullish forecast for the remainder of 2024
          appears to be strong with potential for gold to see an upside ranging
          between 35% to 40%.
        </p>

        <h3 className="mb-2 text-xl font-medium">Market Analysis</h3>
        <p className="mb-4 text-gray-800">
          In July, the pace of job creation in the US decelerated noticeably.
          Last Friday, the Nonfarm Payrolls print clocked in at 114,000, falling
          short of the anticipated 175,000. The unemployment rate rose to 4.3%
          from 4.1%, while wage growth moderated. Additionally, the annual
          growth in Average Hourly Earnings slowed to 3.6% from 3.8%. The labor
          market, typically a lagging indicator signaling economic downturns,
          has shown signs of weakness. The latest Nonfarm Payrolls (NFP) report,
          with a lower-than-expected increase of 114,000 jobs, coupled with
          rising jobless claims, has fueled recession fears. Consequently,
          markets are pricing in a significant 50-basis-point interest rate cut
          at the September Fed meeting. The prospect of lower interest rates
          remains a positive force for non-interest-bearing assets like gold
          along with increased interest in gold for its safe-haven appeal during
          uncertain times.
        </p>
        <p className="mb-4 text-gray-800">
          While the impending pivot of Fed on rate cuts fuels the current gold
          surge, other factors contribute to its strength. Central Bank
          purchases of gold, during two consecutive years in 2022 and 2023, have
          exceeded 1000 tonnes per annum in comparison to a mere 450 tonne per
          annum purchase in 2021, following the Ukraine war. Despite China
          putting a pause on its buying spree, central banks in emerging
          countries are expected to continue purchasing gold.
        </p>
        <p className="mb-4 text-gray-800">
          Market analysis suggests a 64.94% probability of a Trump presidency in
          2024, which is anticipated to positively impact gold prices. During
          Trump&apos;s previous term, from January 20, 2017, to January 19,
          2021, gold prices surged from $1,209 to $1,839. This substantial gain
          was largely attributed to Trump&apos;s impactful actions that reshaped
          the geopolitical landscape both domestically and internationally.
          Under Trump, known for his protectionist stance, the U.S. dollar could
          weaken further as he pushes for a more competitive currency. This
          would likely boost gold prices, which are already nearing record
          highs, as gold traditionally benefits from a weaker dollar. The
          combination of potential rate cuts, central bank purchases and a
          weaker dollar under a Trump administration would provide a strong
          tailwind for gold.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">
          Testimony of Our Distinction!
        </h2>
        <p className="text-gray-800">
          The material contained in this presentation/document is the property
          of Century Financial Consultancy LLC and no unauthorized copying,
          duplication or distribution is permitted. Rights protected 2019.
          Century Financial Consultancy LLC is regulated by SCA. Please
          carefully read full disclosure mentioned on the last slide of this
          document. Distribution of this publication does not oblige CFC to
          enter into any transaction. The information in this document is not
          intended, by itself, to constitute independent, impartial or objective
          research or a recommendation from CFC and should not be treated as
          such. CFC will not accept liability for any loss or damage, including
          without limitation to, any loss of profit, which may arise directly or
          indirectly from use of or reliance on such information.
        </p>
      </section>
    </div>
  );
};

export default ModeratePortfolio;
