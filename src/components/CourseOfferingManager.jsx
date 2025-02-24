import React, { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";

function CourseOfferingManager() {
  const {
    courses,
    courseTypes,
    courseOfferings,
    addCourseOffering,
    deleteCourseOffering,
  } = useContext(CourseContext);

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleAdd = () => {
    if (!selectedCourse || !selectedType) return;
    const newOffering = `${selectedType} - ${selectedCourse}`;
    addCourseOffering(newOffering);
    setSelectedCourse("");
    setSelectedType("");
  };

  return (
    <div>
      <h2>Manage Course Offerings</h2>
      <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>

      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">Select Course Type</option>
        {courseTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

      <button onClick={handleAdd}>Add Offering</button>

      <ul>
        {courseOfferings.map((offering, index) => (
          <li key={index}>
            {offering}
            <button onClick={() => deleteCourseOffering(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseOfferingManager;
