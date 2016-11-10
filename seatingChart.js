 var students = [{name:"Maya C", age: 22, grade:"A"},{name:"Harry",age:20, grade:"B"},{name:"James",age:21, grade:"C"},{name:"Jerome", age:24, grade:"D"},{name:"Shasta",age:23, grade:"F"},{name:"Margarette",age:25, grade:"A"},{name:"Beverly",age:25, grade:"B"},{name:"Alanna", age:20, grade:"C"},{name:"Willow", age:21, grade:"D"},{name:"Kiyra", age:4, grade:"F"},{name:"Roselyn", age:22, grade:"A"},{name:"Eartha", age:101, grade:"B"},{name:"Lucille", age:54, grade:"C"},{name:"Lucille 2", age:56, grade:"D"},{name:"Darth Vader", age:78, grade:"F"},{name:"Han Solo", age:28, grade:"A"},{name:"R2-D2", age:98, grade:"B"},{name:"Luke Skywalker", age:34, grade:"C"},{name:"Obi-Wan Kenobi", age:56, grade:"D"},{name:"Chewbacca", age:89, grade:"F"},{name:"C-3PO", age:92, grade:"A"},{name:"Marsellus Wallace", age:46, grade:"B"},{name:"Jules Winnfield", age:37, grade:"C"},{name:"Vincent Vega", age:34, grade:"D"},{name:"Mia Wallace", age:32, grade:"F"}];

 var randomizer = function (max){
     var random = Math.floor(Math.random() * max);
     return random;
 };

 var maxColumns = Math.ceil(Math.sqrt(students.length));
 var maxRows = students.length/maxColumns;

 var displayChart = function (row1, row2, row3, row4, row5) {
     var seatingEmojis = [];
     for (var emoji = 0; emoji < maxRows; emoji++){
         seatingEmojis.push(" -🎓-");
     }
     return "_-_ ** SEATING CHART ** _-_" + '\n' +
         seatingEmojis + '\n' + row1 + '\n' + seatingEmojis + '\n' + row2 + '\n' +
         seatingEmojis + '\n' + row3 + '\n' + seatingEmojis + '\n' + row4 + '\n' +
         seatingEmojis + '\n' + row5;

 }
 var letterConvert = function (letter) {
     if (letter === 'A') {
         return 9;
     } else if (letter === 'B') {
         return 8;
     } else if (letter === 'C') {
         return 7;
     } else if (letter === 'D') {
         return 6;
     } else if (letter === 'F') {
         return 5;
     }
 }
 
 // ==> SEATING CHART FOR GRADES LOWEST (FRONT OF CLASS) TO HIGHEST (BACK OF CLASS)
 var gradeChart = function (studentArr){  
     var tempList = students.slice();
     var convertedNumGradeList = [];
     var choppedNames = [];
     var sortedGradeList = [];
     
     for (var i = 0; i < tempList.length; i++){  // ==> convert grades to number for sorting
        convertedNumGradeList.push(tempList[i].name + " " + letterConvert(tempList[i].grade));
     }
     convertedNumGradeList.sort(function(a,b) { // ==> sorting by lowest grade to highest
     	return a[a.length-1]-b[b.length-1];
     });
     for (var c = 0; c < tempList.length; c++){ // ==> chopping names to fit chart
     	choppedNames.push(convertedNumGradeList[c].slice(0,maxColumns));
     }
     for (var d = 0; d < tempList.length; d+=maxRows){  // ==> arranging names into rows + columns
     	sortedGradeList.push(choppedNames.slice(d,d+maxRows));
     }
     return displayChart(...sortedGradeList);
};

 // ==> SEATING CHART FOR RANDOM ARRANGEMENT
 var randomSeatingChart = function (studentArr) {
     var tempList = students.slice();
     var nameList = [];
     var result = [];

     for (var i = 0; i < students.length; i++){
         var randoNum = randomizer(tempList.length);
         nameList.push((tempList[randoNum].name).slice(0,maxRows));
         tempList.splice(randoNum,1);
     }

     for (var j = 0; j < students.length; j+=maxColumns){
         result.push(nameList.slice(j, j + maxRows));
     }
     return displayChart(...result);
 };

 // ==> SEATING CHART FOR AGE YOUNGEST (FRONT OF CLASS) TO OLDEST (BACK OF CLASS)
 var ageSeatingChart = function (studentArr) {
     var tempAgeList = students.slice();
     var sortedAgeList = [];
     var tempChopped = [];
     var organizedByRow = [];

     tempAgeList.sort(function(a,b){
         return a.age - b.age;
     });
     for (var z in tempAgeList){
         sortedAgeList.push(tempAgeList[z].name + "(" + tempAgeList[z].age + ")");
     }
     for (var b = 0; b < tempAgeList.length; b++){
         tempChopped.push(sortedAgeList[b].slice(0,maxColumns));
     }

     for (var a = 0; a < tempAgeList.length; a+=maxRows){
         organizedByRow.push(tempChopped.slice(a,a+maxColumns));
     }
     return displayChart(...organizedByRow);
 };

gradeChart();
//randomSeatingChart();
//ageSeatingChart();
