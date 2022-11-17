import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Layout, Menu } from "antd";
import { json } from "stream/consumers";

const { Header } = Layout;

function App() {
  const [time, setTime] = useState<Date>(new Date());

  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    clearInterval(timer);
  }, [timer]);

  return (
    <Layout className="layout">
      <h3>현재 시간 : {time.toLocaleTimeString()}</h3>
      <Router>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: 1,
                label: <Link to="/">HOME</Link>,
              },
              {
                key: 2,
                label: <Link to="/resume">이력서</Link>,
              },
              {
                key: 3,
                label: <Link to="/portfolio">포트폴리오</Link>,
              },
            ]}
          />
        </Header>
        <Layout.Content style={{ padding: "0 50px", height: 300 }}>
          <div className="site-layout-content" style={{}}>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Layout.Content>
      </Router>
    </Layout>
  );
}

const Home = () => {
  return (
    <div
      style={{
        background: "#fff",
        height: 200,
        padding: 24,
        marginTop: 60,
        marginBottom: 60,
        border: 5,
      }}
    >
      홈페이지
    </div>
  );
};

const Resume = () => {
  return (
    <div>
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
};

const Portfolio = () => {
  return <></>;
};

export default App;
