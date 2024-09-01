import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Group from "./screens/Group";
import CreateGroupPage from "./screens/CreateGroup";
import PrivateGroupAccessPage from "./screens/PrivateAccess/index";
import GroupDetail from "./screens/GroupDetail";
import Layout from "./Layout/Layout";

const App = () => {
  const [groups, setGroups] = useState([]);

  const addGroup = (newGroup) => {
    setGroups([...groups, newGroup]);
  };

  const publicGroups = groups.filter((group) => !group.isPublic);
  const privateGroups = groups.filter((group) => group.isPublic);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {" "}
          {/* 공통 레이아웃 적용 */}
          <Route path="/" element={<Group groups={groups} />} />
          <Route
            path="/create"
            element={<CreateGroupPage addGroup={addGroup} />}
          />
          <Route
            path="/public-group-list"
            element={<Group groups={publicGroups} />}
          />
          <Route
            path="/private-access/:id"
            element={<PrivateGroupAccessPage privateGroups={privateGroups} />}
          />
          <Route
            path="/private-group-list"
            element={<Group groups={privateGroups} />}
          />
          <Route
            path="/group-details/:id"
            element={<GroupDetail groups={groups} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
