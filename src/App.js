import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, SelfDiagonse } from "./pages";
import { SelfTest } from "./components";
import "antd/dist/antd.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="dark:bg-main-bg bg-main-bg min-h-screen w-full">
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Dashboard />} />
                {/* Pages */}
                <Route path="/SelfDiagonse" element={<SelfDiagonse />} />

                <Route path="/SelfTest" element={<SelfTest />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
