function interviewQuestion(jog){
    designerQuestion = "What's UX, ";
    teacherQuestion = "What is teaching for you, "
    generalQuestion = "What do you do, "
    ending = "?"

    return function(name){
        if (jog === "designer"){
            console.log(designerQuestion + name + ending);
        } else if (jog === "teacher"){
            console.log(teacherQuestion + name + ending);
        } else {
            console.log(generalQuestion + name + ending);
        }
    }
}

var designerInterview = interviewQuestion("designer");
var teacherInterview = interviewQuestion("teacher");
var generalInterview = interviewQuestion("any");

designerInterview("João");
teacherInterview("Pedro");
generalInterview("Marcos");

