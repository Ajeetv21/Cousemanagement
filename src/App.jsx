// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { CourseProvider } from "./context/CourseContext";
import CourseTypeManager from "./components/CourseTypeManager";
import CourseManager from "./components/CourseManager";
import CourseOfferingManager from "./components/CourseOfferingManager";
import StudentRegistration from "./components/StudentRegistration";
import Navbar from './components/Navbar'


function App() {
  return (
    <CourseProvider>
     
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/course-types" element={<CourseTypeManager />} />
            <Route path="/courses" element={<CourseManager />} />
            <Route path="/course-offerings" element={<CourseOfferingManager />} />
            <Route path="/" element={<StudentRegistration />} />
          </Routes>
        </div>
     
    </CourseProvider>
  );
}

export default App;
