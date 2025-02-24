import React, { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";
import '../Nav.css'

function StudentRegistration() {
    const { courseOfferings, students, registerStudent, deleteStudent } =
        useContext(CourseContext);

    const [studentName, setStudentName] = useState("");
    const [selectedOffering, setSelectedOffering] = useState("");

    const handleRegister = () => {
        if (!studentName || !selectedOffering) return;
        registerStudent({ name: studentName, course: selectedOffering });
        setStudentName("");
        setSelectedOffering("");
    };

    return (
        <div className="form-container">
            <h2>Student Registration</h2>
            <input
                type="text"
                placeholder="Student Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
            />

            <select value={selectedOffering} onChange={(e) => setSelectedOffering(e.target.value)}>
                <option value="">Select Course Offering</option>
                {courseOfferings.map((offering, index) => (
                    <option key={index} value={offering}>
                        {offering}
                    </option>
                ))}
            </select>

            <button onClick={handleRegister}>Register</button>

            <h3>Registered Students</h3>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        {student.name} - {student.course}
                        <button className="delete" onClick={() => deleteStudent(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default StudentRegistration;
