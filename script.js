//1..
//1. using 5 ways to fix the errors which will print below in the console:
// Our Group: John
// Our Group: Pete
// Our Group: Alice
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {

        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        });
    }
};
group.showList();


//First (self pattern)
let group1 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
    showList: function () {
        let self = this;
    this.students.forEach(function (student) {
      console.log(self.title + ": " + student);
    });
  },
};
group1.showList();

//Second (arrow function)
let group2 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
    showList: function () {
    this.students.forEach((student) => {
      console.log(this.title + ": " + student);
    });
  },
};
group2.showList();

// Third (Bind)
let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
                console.log(this.title + ": " + student);
            }.bind(group3)
        );
    }
};
group3.showList();

//fourth (this as a second argument in foreach)
let group4 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {

        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        }, this);
    }
};
group4.showList();


//fifth (call)
let group5 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {

        this.students.forEach(stu => function (student) {
            console.log(this.title + ": " + student);
        }.call(this, stu));
    }
};
group5.showList();


//2 
let i = 0;

setTimeout(() => console.log(i), 100); // ?

// assume that the time to execute this function is >100ms

for (let j = 0; j < 100000000; j++) {
  i++;
}

//After the loop