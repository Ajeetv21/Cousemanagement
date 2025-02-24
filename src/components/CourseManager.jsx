import React, { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";

function CourseManager() {
  const { courses, addCourse, updateCourse, deleteCourse } = useContext(CourseContext);
  const [courseName, setCourseName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {
    if (!courseName) return;
    if (editIndex !== null) {
      updateCourse(editIndex, courseName);
      setEditIndex(null);
    } else {
      addCourse(courseName);
    }
    setCourseName("");
  };

  return (
    <div>
      <h2>Manage Courses</h2>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <button onClick={handleSubmit}>{editIndex !== null ? "Update" : "Add"}</button>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course}
            <button onClick={() => setEditIndex(index)}>Edit</button>
            <button onClick={() => deleteCourse(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseManager;
