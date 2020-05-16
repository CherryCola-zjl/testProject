let Student = function(name){
    this.name = name
}
Student.prototype.hello = function(){
    console.log(this.name)
}
let z = new Student('zjl')
let d = new Student("d")
console.log(Student.prototype.constructor  == Student)
console.log(Student.prototype === z.__proto__)
console.log(z.hello==d.hello)
z.hello()