import React from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { navbar_data } from "@/data/navbar_data";
import FooterButton from "./ui/FooterButton";
const Footer = () => {
  return (
    <div className="text-jsk-blue-2 mx-8 my-4 font-jakarta">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-16 mt-8">
        <div className="flex flex-col gap-4">
          <Image
            src={logo as HTMLImageElement}
            alt="jsk-logo"
            height={1000}
            width={1000}
            className="h-fit w-fit"
          />
          <p className="max-w-xs">
            At JSK, our foundation is built on financial wisdom and a commitment
            to your success
          </p>
        </div>
        <div>
          <p className="mb-4 font-[700]">Pages</p>
          <div className="flex flex-col gap-2">
            {navbar_data.map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                {item.popup.map((subItem, j) => {
                  return subItem.title == "" ? (
                    <FooterButton
                      key={j - i}
                      title={item.title}
                      redirect={item.redirect}
                    />
                  ) : (
                    <FooterButton
                      key={j - i}
                      title={subItem.title}
                      redirect={subItem.redirect}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-[700]">Contact Us</p>
          <div className="mb-8">
            <div className="w-full max-w-md">
              <div className="">
                <div className="table-cell pb-2">
                  <p>
                    JSK Portfolio Management Co. L.L.C Unit 18, 18th Floor,
                    Ontario Tower, Business Bay, Dubai. UAE
                  </p>
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell py-2 align-top">
                  <Mail className="opacity-60" />
                </div>
                <div className="table-cell py-2 pl-4">
                  <a
                    href="mailto:sudeepbhartia@gmail.com"
                    className="text-blue-600 underline"
                  >
                    sudeepbhartia@gmail.com
                  </a>
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell py-2 align-top">
                  <Phone className="opacity-60" />
                </div>
                <div className="table-cell py-2 pl-4">
                  <a
                    href="tel:+971565697237"
                    className="text-blue-600 underline"
                  >
                    +971 56 569 7237
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-jsk-blue-2/40 h-[1px] w-full" />

        <p>©2024 JSK® All right reserved.</p>
        <p>
          The material contained in this website is for your private
          information. Information and/or any materials accessible on this
          website is not intended as an offer or solicitation for the purchase
          of any stock, any other security or any financial instrument or to
          provide any investment service or investment advice in any
          jurisdiction. Products and services mentioned in the website may not
          be suitable or appropriate for all investors or in all geographical
          areas. Your particular needs, investment objectives and financial
          situation were not taken into account in the preparation of this
          website and the materials contained herein. You must make your own
          independent decisions regarding any securities or financial
          instruments mentioned herein.The Company makes no representations or
          warranties in relation to this website or the information and
          materials provided on this website.
        </p>
        <p>
          By using this website, you agree that the exclusions and limitations
          of liability set out in this website disclaimer are reasonable. The
          Company will not be liable to you (whether under the law of contract,
          the law of torts or otherwise) in relation to the contents of, or use
          of, or otherwise in connection with, this website: for any indirect,
          special or consequential loss; or for any business losses, loss of
          revenue, income, profits or anticipated savings, loss of contracts or
          business relationships, loss of reputation or goodwill, or loss or
          corruption of information or data.
        </p>
      </div>
    </div>
  );
};

export default Footer;
