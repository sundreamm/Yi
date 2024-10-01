
import "../style/timeLine.css"
import React, { useState } from 'react';
import { Timeline } from 'antd';
const TimeLine = () => {
  const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <div>
      
      <Timeline className="timeLine"
        mode={mode}
        items={[
          {
            label: '1993.10.15',
            children: 'Born in Xiantao City, Hubei Province, China.',
          },
          {
            label: '2011.9-2015.6',
            children: 'Studied at Wuhan University of Technology, majoring in Automation, and earned a Bachelors degree.',
          },
          {
            label: '2015 - 2019',
            children: 'Worked at China Post as an Automation Engineer.',
          },
          {
            label: '2019 - 2022',
            children: 'Worked at SF technology as a Front-End Developer.',
          },
          {
            label: '2022.9~present',
            children: 'Pursuing a Master’s degree in Electrical Engineering at Memorial University of Newfoundland, in the Faculty of Engineering and Applied Science.',
          },
        ]}
      />
    </div>
  );
};
export default TimeLine;