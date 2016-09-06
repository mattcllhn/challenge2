console.log('sourced');

$('document').ready(function(){
  console.log('in docready');

var piJsonUrl=  'http:devjana.net/pi/pi_students.json';
var studentsArray=[];
var num=0;
var displayButtons=function(){
  console.log('in displayButtons');
  for (var i = 0; i < studentsArray.length; i++) {
    var button= $('<button />',{
      text:studentsArray[i].first_name,
      id:i,
      click: function(){
        num=this.id;
        displayStudents(num);
      }//click function
    });//button object
    $('#outputButton').append(button);
  }//for loop

  $('#outputH2').html(studentsArray[0].first_name+' '+studentsArray[0].last_name)
  $('#outputP').html(studentsArray[0].info)
  $('#displayNumbers').html(1+'/'+studentsArray.length);
  $('#next').on('click',function(){
    if(num< 16){
    num++;
    displayStudents(num);}
    else{
      num=0;
      displayStudents(num)}});//nextclick event
  $('#prev').on('click',function(){
        if(num>= 1){
          num--;
          displayStudents(num);}
          else{
            num=16;
            displayStudents(num);
          }});//prevclick event
};//displayButtons


var displayStudents = function (index) {
    var newHeader= $('<h2 />',{
    text: studentsArray[index].first_name+' '+studentsArray[index].last_name,
    class:studentsArray[index].last_name
  });//header object

    var newParagraph=$('<p />',{
      text:studentsArray[index].info,
      class:studentsArray[index].last_name
    });//paragraph object

      $('#outputH2').fadeOut(300,function(){
      $('#outputH2').html(newHeader);
      $('#outputH2').fadeIn(300);
    });//header

      $('#outputP').fadeOut(300,function(){
      $('#outputP').html(newParagraph);
      $('#outputP').fadeIn(300);

    });//paragraph
    $('#displayNumbers').html((Number(index)+1)+'/'+studentsArray.length);

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
          displayButtons();
        }//function
      })//ajax
    };//getStudents

getStudents();

});//docready
