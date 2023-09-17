import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main/Main.jsx';
import Result from './Result/Result.jsx';
import Guide from './Guide/Guide.jsx';
import Notice from './Notice/Notice.jsx';

const App = () => {
  const [data, setData] = useState({ inputValue: '' }); // 객체 형태로 초기화

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main setData={setData} />}></Route>
          <Route path="/Result" element={<Result data={data} />}></Route>
          <Route path="/Guide" element={<Guide data={data} />}></Route>
          <Route path="/Notice" element={<Notice data={data} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;