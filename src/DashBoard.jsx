import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore"
import { useEffect, useRef, useState } from "react"
import { db } from "./firebase/firebaseConfig"

const DashBoard = () => {
    const fname = useRef()
    const lname = useRef()
    const dept = useRef()
    const [student, setStudent] = useState({});
    const [allStudent, setAllStudent] = useState([]);

    const addStudent = (e) => {
        e.preventDefault()
        setStudent({ fname: fname.current.value, lname: lname.current.value, dept: dept.current.value })
        const studentRef = doc(collection(db, "students"))
        return setDoc(studentRef, student)
    }

    const getStudents = async () => {
        const snapshot = await getDocs(collection(db, "students"));
        const studentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllStudent(studentsData);
        console.log(allStudent);
    }

    const deleteStudent = ( id ) => {
        const studentRef = doc(collection(db, "students"), id);
        console.log("deleted");
        return deleteDoc(studentRef);
    }

    useEffect(()=> {
        getStudents()
    },[]);
    
    return (
        <div>
            <h1>DashBoard</h1>
            <form onSubmit={addStudent}>
                <label>first Name</label>
                <input ref={fname} name="username" placeholder="Enter your FirstName" />
                <label>last Name</label>
                <input ref={lname} name="username" placeholder="Enter your LastName" />
                <label>department</label>
                <input ref={dept} name="username" placeholder="Enter your Department" />
                <input type="submit" value="Register" />
            </form>
            <button onClick={getStudents}>All Students</button>
            <div>
                {allStudent.map((student, index) => (
                    <div key={index}>
                        <p>ID: {student.id}</p>
                        <p>Name: {student.fname} {student.lname}</p>
                        <p>Department: {student.dept}</p>
                        <button onClick={() => deleteStudent(student.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashBoard