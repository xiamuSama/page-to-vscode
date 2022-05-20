
import { Switch, Input } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import React, { useEffect, useState }from 'react';
import { 
  // getCheckStorage , 
  // setCheckStorage,
  postCheckStorage,
  getHostStorage, 
  setHostStorage
} from './utils';
import './app.less';

const TextArea = Input.TextArea;
function App() {
  const [ checked, setChecked ] = useState(true);
  const [ host , setHost] = useState('')

  useEffect(() => {
    fn()
  }, [])

  const fn = async () => {
    try {
      // const checked = await getCheckStorage();
      // setChecked(checked === 'yes');
      const host = await getHostStorage() || '';
      setHost(host);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        onChange={(val) => {
          postCheckStorage(val);
        }}
      />
      <TextArea rows={2} placeholder="本机仓库配置" style={{ marginTop: 20 }} value={host} onChange={(e) => {
        const val = e.target.value;
        setHost(val);
        setHostStorage(val)
      }}/>
    </div>
  );
}

export default App;