//Search field logic 1
function myFun1(event) {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('a');
  let interval;
  if(interval){
  clearTimeout(interval)
  }

  interval = setTimeout(()=>{
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("li")[0];
      txtValue = a.innerText;
      if (input.value==""){
        ul.style.display = "none";
      }  
      else if (txtValue.toUpperCase().indexOf(filter) > -1) {
          ul.style.display="block"
          li[i].style.display = "block";
      } else{
        li[i].style.display="none"
      }
      
    }
    },1000)
 }
  
// 
   //Search field logic 2
  function myFun2() {
    
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput1');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL1");
    li = ul.getElementsByTagName('li');
  let interval;
  if(interval){
    clearTimeout(interval)
  }

    setTimeout(()=>{
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.innerText;
        if(input.value==""){
          ul.style.display="none"
        }
        else if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ul.style.display="block"
            li[i].style.display = "block";
        }
        else {
          li[i].style.display = "none";
        }
      }
    } ,1000)
  }
  
  
  //Setting there href for respective course name
  function chng(e){
    
    var ul = document.getElementById("myUL1");
    var li=ul.getElementsByTagName('li')
    for(let i=0; i<li.length; i++){
      a = li[i].getElementsByTagName("a")[0]
      if(a.innerHTML=== "Bca"){
             a.href="/course/bca";
      }else if(a.innerText==="Mca"){
        a.href="/course/mca";
      }
      else if(a.innerText==="Bse CS"){
        a.href="/course/bse";
      }
      else if(a.innerText==="Btech CSE"){
        a.href="/course/btech";
      }
      else if(a.innerText==="Mtech CSE"){
        a.href="/course/mtech";
      }
      else if(a.innerText==="ITI"){
        a.href="/course/iti";
      }
      else{
        a.href="#";
      }
    }
  }

  // setting there course gref in clg.ejs
  function chng2(){
    var div= document.getElementById("card-b")
    var h3=div.getElementsByTagName('h4')
    for(let i=0; i<h3.length; i++){
      a = h3[i].getElementsByTagName("a")[0]
      if(a.innerHTML=== "Bca"){
             a.href="/course/bca";
      }else if(a.innerText==="Mca"){
        a.href="/course/mca";
      }
      else if(a.innerText==="Bse CS"){
        a.href="/course/bse";
      }
      else if(a.innerText==="Btech CSE"){
        a.href="/course/btech";
      }
      else if(a.innerText==="Mtech CSE"){
        a.href="/course/mtech";
      }
      else if(a.innerText==="ITI"){
        a.href="/course/iti";
      }
      else{
        a.href="#";
      }
    }
  }