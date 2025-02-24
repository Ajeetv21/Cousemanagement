// src/context/CourseContext.js
import React, { createContext, useState, useEffect } from "react";

export const CourseContext = createContext();

const getFromLocalStorage = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : defaultValue;
};

export const CourseProvider = ({ children }) => {
  const [courseTypes, setCourseTypes] = useState(() =>
    getFromLocalStorage("courseTypes", [])
  );
  const [courses, setCourses] = useState(() =>
    getFromLocalStorage("courses", [])
  );
  const [courseOfferings, setCourseOfferings] = useState(() =>
    getFromLocalStorage("courseOfferings", [])
  );
  const [students, setStudents] = useState(() =>
    getFromLocalStorage("students", [])
  );

  useEffect(() => {
    localStorage.setItem("courseTypes", JSON.stringify(courseTypes));
    localStorage.setItem("courses", JSON.stringify(courses));
    localStorage.setItem("courseOfferings", JSON.stringify(courseOfferings));
    localStorage.setItem("students", JSON.stringify(students));
  }, [courseTypes, courses, courseOfferings, students]);

  const addCourseType = (type) => setCourseTypes([...courseTypes, type]);
  const updateCourseType = (index, newName) => {
    const updated = [...courseTypes];
    updated[index] = newName;
    setCourseTypes(updated);
  };
  const deleteCourseType = (index) =>
    setCourseTypes(courseTypes.filter((_, i) => i !== index));

  const addCourse = (course) => setCourses([...courses, course]);
  const updateCourse = (index, newName) => {
    const updated = [...courses];
    updated[index] = newName;
    setCourses(updated);
  };
  const deleteCourse = (index) => setCourses(courses.filter((_, i) => i !== index));

  const addCourseOffering = (offering) =>
    setCourseOfferings([...courseOfferings, offering]);
  const deleteCourseOffering = (index) =>
    setCourseOfferings(courseOfferings.filter((_, i) => i !== index));

  const registerStudent = (student) => setStudents([...students, student]);
  const deleteStudent = (index) =>
    setStudents(students.filter((_, i) => i !== index));

  return (
    <CourseContext.Provider
      value={{
        courseTypes,
        addCourseType,
        updateCourseType,
        deleteCourseType,
        courses,
        addCourse,
        updateCourse,
        deleteCourse,
        courseOfferings,
        addCourseOffering,
        deleteCourseOffering,
        students,
        registerStudent,
        deleteStudent,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
