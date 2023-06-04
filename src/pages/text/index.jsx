import React from "react";
import "./index.scss";
import { Collapse } from "antd";
const { Panel } = Collapse;
const text1 = `
Moviak.com is an online video viewing platform that allows you to watch different TV series, movies and live broadcasts whenever and wherever you want.

With an internet connection, you can easily access local/foreign movies and series, live TV broadcasts, sports, life content and original productions for Moviak.com members, which are updated every month via the web, tablet, mobile devices or smart TVs (Smart TV).
`;
const text2 =`
Moviak.com offers its members the freedom to access rich content whenever and wherever they want. It allows you to watch the constantly updated content on mobile devices such as computers, mobile phones and tablets (iOS and Android), smart TV (Smart TV), Apple TV and Android Box devices without any advertisements, as much as you want.
`;
const text3=`You can reach us at 077 711 11 24 contact number or support@Moviak.com.
`;
const text4=`One click. There is no commitment in Moviak.com. You can terminate your subscription at any time under the My Account menu. In case of cancellation, you will not pay any withdrawal fee. At the end of the period for which you have paid, your subscription will be stopped.`;

const text5=`You can use your Moviak.com coupon code at https://www.moviak.com/coupon. Before the coupon code entry screen, you can log in with your existing BluTV account or create a new BluTV account.
`;

const Text = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="collapse">
     <h1>Frequently Asked Questions</h1>
    <Collapse defaultActiveKey={["1"]} onChange={onChange}>
      <Panel header="What is Moviak.com?" key="1">
        <p>{text1}</p>
      </Panel>

      <Panel header="What is included in a Moviak.com subscription?" key="2">
        <p>{text2}</p>
      </Panel>

      <Panel header="How to contact Moviak.com?" key="3">
        <p>{text3}</p>
      </Panel>

      <Panel header="How can I delete my Moviak.com subscription?" key="4">
        <p>{text4}</p>
      </Panel>

      <Panel header="How do I get my Moviek.com subscription and how do I register?" key="5">
        <p>{text5}</p>
      </Panel>
    </Collapse>
    </div>
   
  );
};

export default Text;
