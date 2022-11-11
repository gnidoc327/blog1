import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    clearInterval(timer);
  }, [timer]);

  return (
    <div>
      <h3>현재 시간 : {time.toLocaleTimeString()}</h3>
      <h1>자기소개</h1>
      <h3>이름 : 김한성(31)</h3>
      <h3>학력</h3>
      <>
        <li>장훈고등학교</li>
        <li>중앙대학교</li>
      </>
      <h3>경력</h3>
      <>
        <li>SKT</li>
      </>
    </div>
  );
}

export default App;
