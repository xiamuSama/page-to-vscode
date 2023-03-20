import { Switch, Input, Radio, Space } from "antd";
import {
  CloseOutlined,
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import {
  getCheckStorage,
  setCheckStorage,
  postCheckStorage,
  getHostStorage,
  setHostStorage,
  setRulesStorage,
  getRulesStorage,
  setCheckedRuleStorage,
  getCheckedRuleStorage,
} from "./utils";
import "./app.less";

const TextArea = Input.TextArea;
function App() {
  const [checked, setChecked] = useState(true);
  const [host, setHost] = useState("");

  const [rule, setRule] = useState("");
  const [ruleList, setRuleList] = useState<string[]>([]);
  const [checkedRule, setCheckedRule] = useState("default");

  useEffect(() => {
    fn();
  }, []);

  const fn = async () => {
    try {
      // 开关回填
      const checked = await getCheckStorage();
      setChecked(checked === "yes");
      // 配置列表回填
      const rules = (await getRulesStorage()) || [];
      setRuleList(rules);
      // 选择配置回填
      const checkedRule = (await getCheckedRuleStorage()) || "default";
      setCheckedRule(checkedRule);
      // host回填
      const hosts = (await getHostStorage()) || {};
      console.log("hosts", hosts, checkedRule);
      setHost(hosts[checkedRule]);
    } catch (error) {
      console.error(11, error);
    }
  };

  const rulesChange = (v) => {
    const val = v.target.value;
    setCheckedRule(val);
    setCheckedRuleStorage(val);
    // host切换
    getHostStorage().then((host = {}) => {
      setHost(host[val]);
    });
  };

  return (
    <div className="App">
      <div className="left">
        <Radio.Group
          defaultValue="default"
          style={{ width: "100%" }}
          value={checkedRule}
          onChange={rulesChange}
        >
          <div className="radio-group">
            <div className="radio">
              <Radio value="default">默认</Radio>
            </div>
          </div>
          {ruleList.map((v, index) => (
            <div className="radio-group" key={v}>
              <div className="radio">
                <Radio value={v}>{v}</Radio>
              </div>
              <DeleteOutlined
                className="del"
                onClick={() => {
                  setRuleList((v) => {
                    v.splice(index, 1);
                    setRulesStorage(v);
                    rulesChange({ target: { value: "default" } });
                    return ([] as string[]).concat(v);
                  });
                }}
              />
            </div>
          ))}
        </Radio.Group>
        <Input
          suffix={
            <EditOutlined
              onClick={() => {
                if (!rule) {
                  return;
                }
                setRuleList((v) => {
                  v.push(rule);
                  setRulesStorage(v);
                  return ([] as string[]).concat(v);
                });
                setRule("");
              }}
            />
          }
          placeholder={"add a rule "}
          className="input"
          value={rule}
          onChange={(e) => {
            const val = e.target.value;
            setRule(val);
          }}
        />
      </div>
      <div className="right">
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          onChange={(val) => {
            setChecked(val);
            setCheckStorage(val);
            postCheckStorage(val);
          }}
          checked={checked}
        />
        <TextArea
          rows={2}
          placeholder="本机仓库配置"
          style={{ marginTop: 20 }}
          value={host}
          onChange={(e) => {
            const val = e.target.value;
            setHost(val);
            getHostStorage().then((v = {}) => {
              const cv = JSON.parse(JSON.stringify(v));
              cv[checkedRule] = val;
              setHostStorage(cv);
            });
          }}
        />
      </div>
    </div>
  );
}

export default App;
