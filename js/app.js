//NW.JS GUI Objects
var nw = require('nw.gui');
var win = nw.Window.get();

//Close button Implementation
function onInit(){
    document.getElementById('closebutton').onclick = function(){
        win.close();
    };
}


//used to set state and add behavior to a page

var plutoApp = angular.module('plutoApp', []);

plutoApp.controller('CourseController', function($scope, courseService) {
    var courseList = this;

    $scope.currentCourse;

    $scope.courses = [];
    $scope.assignments = [{"name": "Paper Summary", "gradeWeight":0.2, "deadline":"01/04/16", "seeGrade": true, "seeFeedback": false
}];
    $scope.students = [];


    $scope.setCurrentCourse = function(courseId) {
        $scope.currentCourse = courseId;
        //TODO get assignments, reload table
    }

    $scope.addCourse = function() {
        //TODO load html for adding course, then add to backend
    }


    //look for the name in the "table" and add
    courseList.getAssignments = function(courseId) {
        courseService.getAssignments(courseId)
            .then(
                function(assignments) {
                    $scope.assignments = assignments;
                }
            )
    };

    //search student
    //search assignment
    //search course

    //add course
    //add assignment

    //get courses
    //get assignments for one course
    //get students for one assignment

    //get grade for each student
    //write grade

    //get feedback for each student
    //write feedback for each student

    //---
    //per assignment, per student, overall
    // display mean of all grades 
    // display std. deviation of all grades

    // $http.post('http://localhost:3000/dataGrab', "students")
    //     .then(function(response) {
    //         $scope.myWelcome = response.data;
    //     });

    // I apply the remote data to the local scope.
    function applyRemoteData(newFriends) {
        $scope.friends = newFriends;
    }

});



// This filter makes the assumption that the input will be in decimal form (i.e. 17% is 0.17).
plutoApp.filter('percentage', ['$filter', function($filter) {
    return function(input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
    };
}]);

// angular.module('assignmentApp', []).controller('TableController', function() {

//     var assignData = this;
//     //model
//     assignData.course = course;
//     students = course.students;

//     assignData.assignNames = function() {
//         var assignmentNames = new Array();

//         angular.forEach(assignData.course.students, function(student) {
//             angular.forEach(student.assignments, function(assignm) {
//                 console.log(assignm.name)
//                 if (assignmentNames.indexOf(assignm.name) < 0) {
//                     assignmentNames.push(assignm.name)
//                 }
//             });
//         });
//         console.log("oh");
//         console.log(assignmentNames);
//         return assignmentNames;
//     }

//     /*assignData.addStudent = function() {
//       assignData.todos.push({text:assignData.todoText, done:false});
//       assignData.todoText = '';
//     };

//     assignData.remaining = function() {
//       var count = 0;
//       angular.forEach(assignData.todos, function(todo) {
//         count += todo.done ? 0 : 1;
//       });
//       return count;
//     };

//     assignData.archive = function() {
//       var oldTodos = assignData.todos;
//       assignData.todos = [];
//       angular.forEach(oldTodos, function(todo) {
//         if (!todo.done) assignData.todos.push(todo);
//       });
//     };