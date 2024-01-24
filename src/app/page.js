export default function Home(){
  
  const students=[
    {RollNumber:"1",Name:"Andrew",Interest:"Tennis",Department:"Electronics",sports:true},
    {RollNumber:"2",Name:"Richard",Interest:"Cricket",Department:"Marine",sports:false},
    {RollNumber:"3",Name:"Fashina",Interest:"Chess",Department:"Information & Technology",sports:true},
    {RollNumber:"4",Name:"Luca",Interest:"Basket Ball",Department:"Electrical",sports:false},
    {RollNumber:"5",Name:"Michael",Interest:"Football",Department:"Computer Science",sports:false}];
  
    return(
    <div>
      <h2>Home</h2>
      <div className="students">
      {students.map((student)=>{
        return(
        <div key={student.RollNumber} className="student">
          <h3>Roll Number :{student.RollNumber}</h3>
          <p>Name : {student.Name}</p>
          <p>Department : {student.Department}</p>
          <p>Interest : {student.Interest} </p>
          <p>{student.sports ? " Indoor Stadium" :"Outdoor Stadium"}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
  }
