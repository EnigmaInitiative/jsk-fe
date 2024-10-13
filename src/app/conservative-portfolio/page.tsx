import Image from "next/image";
import React from "react";

const ConservativePortfolio: React.FC = () => {
  return (
    <div className="container mx-auto p-8 text-justify">
      <h1 className="mb-6 text-4xl font-bold">Conservative Portfolio</h1>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Disclaimer</h2>
        <p className="text-gray-800">
          This document is a marketing material and is for informational
          purposes only and must not be construed to be an advice to invest or
          otherwise in any investment or financial product. JSK does not
          guarantee as to adequacy, accuracy, completeness or reliability of any
          information or data contained herein and under no circumstances
          whatsoever none of such information or data be construed as an advice
          or trading strategy or recommendation to deal (Buy/Sell) in any
          investment or financial product. JSK is not responsible or liable for
          any result, gain or loss, based on this information, in whole or in
          part.
        </p>
        <p className="text-gray-800">Data Source: Bloomberg</p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Portfolio Snapshot</h2>
        <p>Total Investment Value - $250,000</p>
        <p>Leverage - 2x</p>

        <div className="w-full overflow-x-auto">
          <table className="mt-6 w-full table-auto border-collapse border border-gray-300">
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
                  Estimate Return
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Estimate Gains with 2x Leverage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Conservative
                </td>
                <td className="border border-gray-300 px-4 py-2">Bonds</td>
                <td className="border border-gray-300 px-4 py-2">55%</td>
                <td className="border border-gray-300 px-4 py-2">Euro Buxl</td>
                <td className="border border-gray-300 px-4 py-2">33%</td>
                <td className="border border-gray-300 px-4 py-2">$165,000</td>
                <td className="border border-gray-300 px-4 py-2">22%</td>
                <td className="border border-gray-300 px-4 py-2">$36,795</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">
                  T-Bond Ultra
                </td>
                <td className="border border-gray-300 px-4 py-2">22%</td>
                <td className="border border-gray-300 px-4 py-2">$110,000</td>
                <td className="border border-gray-300 px-4 py-2">15%</td>
                <td className="border border-gray-300 px-4 py-2">$16,720</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Indices</td>
                <td className="border border-gray-300 px-4 py-2">20%</td>
                <td className="border border-gray-300 px-4 py-2">
                  S&P 500 Index
                </td>
                <td className="border border-gray-300 px-4 py-2">10%</td>
                <td className="border border-gray-300 px-4 py-2">$50,000</td>
                <td className="border border-gray-300 px-4 py-2">10%</td>
                <td className="border border-gray-300 px-4 py-2">$5,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">
                  Nasdaq Index
                </td>
                <td className="border border-gray-300 px-4 py-2">10%</td>
                <td className="border border-gray-300 px-4 py-2">$50,000</td>
                <td className="border border-gray-300 px-4 py-2">15%</td>
                <td className="border border-gray-300 px-4 py-2">$7,500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Gold</td>
                <td className="border border-gray-300 px-4 py-2">25%</td>
                <td className="border border-gray-300 px-4 py-2">Gold</td>
                <td className="border border-gray-300 px-4 py-2">25%</td>
                <td className="border border-gray-300 px-4 py-2">$125,000</td>
                <td className="border border-gray-300 px-4 py-2">25%</td>
                <td className="border border-gray-300 px-4 py-2">$31,250</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <h3 className="mb-2 text-xl font-medium">Portfolio Allocation</h3>
          <ul className="list-inside list-disc">
            <li>Bonds: 55%</li>
            <li>Indices: 20%</li>
            <li>Gold: 25%</li>
          </ul>
          <Image
            height={1000}
            width={1000}
            src="/portfolioallocation.jpeg"
            alt="Portfolio Allocation Chart"
            className="mx-auto my-6 h-96 w-72 object-contain"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Bonds</h2>
        <h3 className="mb-2 text-xl font-medium">Euro Buxl</h3>
        <p className="mb-4 text-gray-800">
          In its most recent meeting on July 18th, 2024, the European Central
          Bank opted to maintain interest rates at 4.25%, aligning with market
          expectations. Looking ahead, the latest Eurozone CPI report revealed
          an inflation rate of 2.6%, slightly above the forecasted 2.5%. The
          primary driver behind this uptick was a significant rise in energy
          inflation, which increased by 1.3% in July.
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
          src="/eurobuxlchart.jpeg"
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
          just a month ago when the probability stood at only
          5.50%.Additionally, markets are factoring in the possibility of a
          recession early next year, leading to expectations that bonds will
          outperform other assets making U.S. T-Bond Ultra an attractive
          investment opportunity.
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
          src="/usbondultrachart.jpeg"
          alt="U.S. T-Bond Ultra Technical Chart"
          className="mx-auto my-6 h-64 md:h-[30rem] md:w-[80%]"
        />
      </section>

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
          index has been experiencing a major pullback due to `&quot;`The Great
          Rotation,`&quot;` as investors and hedge funds shift their focus from
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
          src="/snp500index.jpeg"
          alt="S&P 500 Chart"
          className="mx-auto my-6 h-64 md:h-[30rem] md:w-[80%]"
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
          src="/nasdaqindex.jpeg"
          alt="Nasdaq 100 Chart"
          className="mx-auto my-6 h-64 md:h-[30rem] md:w-[80%]"
        />
      </section>

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
          This document is a marketing material and is for informational
          purposes only and must not be construed to be an advice to invest or
          otherwise in any investment or financial product. JSK does not
          guarantee as to adequacy, accuracy, completeness or reliability of any
          information or data contained herein and under no circumstances
          whatsoever none of such information or data be construed as an advice
          or trading strategy or recommendation to deal (Buy/Sell) in any
          investment or financial product. JSK is not responsible or liable for
          any result, gain or loss, based on this information, in whole or in
          part.
        </p>
      </section>
    </div>
  );
};

export default ConservativePortfolio;
