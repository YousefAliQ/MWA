function Course(){
    this.courseName = 'CS572';
    this.getCourseName = function(){
        console.log(this.courseName);
    }
}
module.exports = new Course();