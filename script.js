let student = {
  firstName: "Heshani",
  lastName: "Shehana",
  age: 23,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(student.fullName());
