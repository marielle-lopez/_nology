import StudentCard from "../components/StudentCard.jsx";
import students from "../data/data.json";

const StudentList = () => {
  return (
    <>
      {students.map((student) => {
        return (
          students && (
            <StudentCard
              key={student.id}
              name={student.name}
              age={student.age}
              location={student.location}
              isAgeVisible={student.isAgeVisible}
              isLocationVisible={student.isLocationVisible}
            />
          )
        );
      })}
    </>
  );
};

export default StudentList;
