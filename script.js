let quantity = +prompt("How many students learn in your group?");
while (quantity != quantity) {
   quantity = +prompt("Write correct number!");
}


const DEFAULT_MARKS_QUANTITY = 13;


function getMarks(min, max) {
   let marks = [];
   for (let i = 0; i < DEFAULT_MARKS_QUANTITY; i++) {
      marks[i] = Math.floor(Math.random() * (max - min)) + min;
   }
      return marks;
}

function generateStudents(quantity) {
   const students = [];
   for (let i = 0; i < quantity; i++) {
      students[i] = {
         name: prompt("Enter student`s name!"),
         marks: getMarks(1, 13)
      };
      console.log(students);
   }
   return students;
}
let students = generateStudents(quantity);

do {

function marksSum(students) {
   for (let i = 0; i < students.length; i++){
      let sum = 0;
      for (let j = 0; j < students[i].marks.length; j++){
         sum += students[i].marks[j];
      }
      students[i].sum = sum;
   }
   return students;
}
marksSum(students);


   let userOperation = +prompt("Choose the operation with students: 1 (Get the best student), 2 (Get the grade list of students), 3(Get the average marks of each student), 4 (Write a new student)");
   while (userOperation != userOperation)  {
      userOperation =  +prompt("Write correct number");
   }
switch (userOperation) {
   case 1:
      getBestStudent(students);
      break;
   case 2:
      getGradeList(students);
      break;
   case 3:
      getAvgMark(students);
      break;
   case 4:
      getNewStudent(students);
      break;
}

function getBestStudent(students) {
   let bestStudent = students[0];
   for (let i  in students) {
      if (bestStudent.sum < students[i].sum)
         bestStudent = students[i];
   }
   alert(`The best student is ${JSON.stringify(bestStudent)}`);
   return bestStudent;
}



function getGradeList(students) {
   for (let i in students) {
      let gradeList = students.sort((a, b) => {
         a.sum - b.sum;
      })
      return alert(`The grade list is ${JSON.stringify(gradeList)}`);
   }
}
  

function getAvgMark(students) {
   for (let i = 0; i < students.length; i++) {
      let sum = 0;

      for (let j = 0; j < students[i].marks.length; j++) {
         sum += students[i].marks[j];
         students[i].avgMark =Math.ceil(sum / students[i].marks.length);
      }
   }
   return alert(`List of average marks of each students is ${JSON.stringify(students)}`);
}
   
function getNewStudent(students) {
   let marks = [];
   for (let i = 0; i < DEFAULT_MARKS_QUANTITY; i++) {
      marks[i] = Math.floor(Math.random() * (13 - 1)) + 1;
   }
   let newS = {
      name: prompt("Write the name of new student"),
      marks: marks
   };
   let sum = 0;
      for (let j = 0; j < newS.marks.length; j++){
         sum += newS.marks[j];
      }
      newS.sum = sum;
   students.push(newS);
   alert(`New list of students ${JSON.stringify(students)}`)
}
   
   }
   while (confirm("Do you want to continue?"));
