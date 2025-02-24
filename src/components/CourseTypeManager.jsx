import React, { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";

function CourseTypeManager() {
  const { courseTypes, addCourseType, updateCourseType, deleteCourseType } =
    useContext(CourseContext);

  const [courseTypeName, setCourseTypeName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {
    if (!courseTypeName) return;

    if (editIndex !== null) {
      updateCourseType(editIndex, courseTypeName);
      setEditIndex(null);
    } else {
      addCourseType(courseTypeName);
    }

    setCourseTypeName("");
  };

  return (
    <div>
      <h2>Manage Course Types</h2>
      <input
        type="text"
        value={courseTypeName}
        onChange={(e) => setCourseTypeName(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editIndex !== null ? "Update" : "Add"}
      </button>
      <ul>
        {courseTypes.map((type, index) => (
          <li key={index}>
            {type}
            <button onClick={() => setEditIndex(index)}>Edit</button>
            <button onClick={() => deleteCourseType(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseTypeManager;
