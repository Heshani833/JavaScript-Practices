let student = { firstName: "Heshani", lastName: "Shehana", age: 23 };
student.firstName = "Sachini";

document.getElementById("main").innerHTML =
  "Hi, My name is" +
  " " +
  student.firstName +
  " " +
  student.lastName +
  ". " +
  student.age +
  "years old .";
