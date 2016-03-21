// I act a repository for the remote friend collection.
plutoApp.service(
    "courseService",
    function($http, $q) {
        // Return public API.
        return ({
            addCourse: addCourse,
            getCourses: getCourses,
            updateCourse: updateCourse,
            removeCourse: removeCourse,

            // addAssignment: addAssignment,
            // getAssignments: getAssignments,
            // updateAssignment: updateAssignment,
            // removeAssignments: removeAssignments,

            // addStudents: addStudents,
            // getStudents: getStudents,
            // updateStudent: updateStudent,
            // removeStudents: removeStudents
        });

        // ---
        // PUBLIC METHODS.
        // ---
        //TODO add optionalParams such as deadline etc.
        function addCourse(courseData) {
            var request = $http({
                method: "post",
                url: "http://localhost:3000/dataGrab",
                params: {
                    action: "addCourse"
                },
                data: courseData
            });
            return (request.then(handleSuccess, handleError));
        }

        //get all courses
        function updateCourse() {
            var request = $http({
                method: "post",
                url: "http://localhost:3000/dataGrab",
                params: {
                    //TODO
                }
            });
            return (request.then(handleSuccess, handleError));
        }

        //get all courses
        function getCourses() {
            var request = $http({
                method: "get",
                url: "http://localhost:3000/dataGrab",
                params: {
                    action: "get"
                }
            });
            return (request.then(handleSuccess, handleError));
        }

        function removeCourse(id) {
            var request = $http({
                method: "delete",
                url: "http://localhost:3000/dataGrab",
                params: {
                    action: "delete"
                },
                data: {
                    id: id
                }
            });
            return (request.then(handleSuccess, handleError));
        }

        // ---
        // PRIVATE METHODS.
        // ---
        // I transform the error response, unwrapping the application dta from
        // the API response payload.
        function handleError(response) {
            // The API response from the server should be returned in a
            // nomralized format. However, if the request was not handled by the
            // server (or what not handles properly - ex. server error), then we
            // may have to normalize it on our end, as best we can.
            if (!angular.isObject(response.data) ||
                !response.data.message
            ) {
                return ($q.reject("An unknown error occurred."));
            }
            // Otherwise, use expected error message.
            return ($q.reject(response.data.message));
        }
        // I transform the successful response, unwrapping the application data
        // from the API response payload.
        function handleSuccess(response) {
            return (response.data);
        }
    }
);




var allData = [{
        "name": "Creative Design",
        "students": [{
            "name": "Anna Doe",
            "assignments": [{
                "name": "Paper Summary",
                "upload": "doe-summary.pdf",
                "grade": 15,
                "feedback": "Great Job!",
            }, {
                "name": "Presentation Report",
                "upload": "doe-report.pdf",
                "grade": 17,
                "feedback": "Great Job!"
            }]
        }, {
            "name": "Max Anderson",
            "assignments": [{
                "name": "Paper Summary",
                "upload": "submission.pdf",
                "grade": 14,
                "feedback": "Great Job!",
            }, {
                "name": "Presentation Report",
                "upload": "blob.pdf",
                "grade": 18,
                "feedback": "Great Job!"
            }]

        }, {
            "name": "Phoebe Cleaveland",
            "assignments": [{
                "name": "Paper Summary",
                "upload": "submission.pdf",
                "grade": 14,
                "feedback": "Great Job!"
            }, {
                "name": "Presentation Report",
                "upload": "blob.pdf",
                "grade": 18,
                "feedback": "Great Job!"
            }]

        }]
    },

    {
        "name": "Fundamentals of HCI",
        "students": [{
            "name": "Anna Doe",
            "assignments": [{
                "name": "Paper Summary",
                "upload": "doe-summary.pdf",
                "grade": 15,
                "feedback": "Great Job!",
            }, {
                "name": "Presentation Report",
                "upload": "doe-report.pdf",
                "grade": 17,
                "feedback": "Great Job!"
            }]
        }, {
            "name": "Max Anderson",
            "assignments": [{
                "name": "Paper Summary",
                "upload": "submission.pdf",
                "grade": 14,
                "feedback": "Great Job!",
            }, {
                "name": "Presentation Report",
                "upload": "blob.pdf",
                "grade": 18,
                "feedback": "Great Job!"
            }]

        }, {
            "name": "Phoebe Cleaveland",
            "assignments": [{
                "name": "Paper Summary",
                "upload": "submission.pdf",
                "grade": 14,
                "feedback": "Great Job!"
            }, {
                "name": "Presentation Report",
                "upload": "blob.pdf",
                "grade": 18,
                "feedback": "Great Job!"
            }]

        }]
    }
]

var assignments = [{
    "name": "Paper Summary",
    "weight": "20",
    "deadline": "20/01/16",
    "visibility": {
        "grade": true,
        "comment": false
    },
    "students": [

    ]
}, {
    "name": "Presentation Report",
    "weight": "20",
    "deadline": "20/03/16",
    "visibility": {
        "grade": true,
        "comment": false
    },
    "students": [

    ]
}]