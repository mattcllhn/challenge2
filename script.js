console.log('sourced');
$('document').ready(function(){
  console.log('in docready');

var piJsonUrl=  'http:devjana.net/pi/pi_students.json';
var studentsArray=[];

var displayStudents = function () {
  console.log('in displayStudents');
  console.log('in local array',studentsArray);
  $('#outputDiv').textContent="";
  for (var i = 0; i < studentsArray.length; i++) {
    var newHeader= $('<h2 />',{
    text: studentsArray[i].first_name+' '+studentsArray[i].last_name,
    class:studentsArray[i].last_name
  });
    var newParagraph=$('<p />',{
      text:studentsArray[i].info,
      class:studentsArray[i].last_name
    });
    var button= $('<button />',{
      text:studentsArray[i].first_name,
      id:studentsArray[i].last_name+'-button',
      click: function(){console.log('in '+this.id+' click')}
    });
    // newHeader.textContent= studentsArray[i].first_name+' '+studentsArray[i].last_name;
    newParagraph.textContent= studentsArray[i].info;
    console.log(button);
    console.log(newHeader);
    $()
    $('#outputDiv').append(newHeader);
    $('#outputDiv').append(newParagraph);
    $('#outputDiv').append(button)

  }//for loop


};//displayStudents



var getStudents=function(){
  console.log('in getStudents');
  $.ajax({
  url:piJsonUrl,
  dataType:'JSON',
  success: function(data){
      console.log('in success');
      // console.log(data);
      for (var i = 0; i < data.students.length; i++) {
          // console.log(data.students[i]);
          studentsArray.push(data.students[i]);
          }//for loop
          displayStudents();

        }//function
      })//ajax
    };//getStudents

getStudents();









});//docready
