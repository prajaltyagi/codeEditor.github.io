function validation(){
    let txt=document.getElementById('txt').value;
    let btn=document.getElementById('btn');
let txtmsg=document.getElementById('txtmsg');



if(txt!='no'){
document.getElementById('txtmsg').innerHTML="**Invaild answer only 'yes' or 'no'is accepted **";
btn.style.display="none";
}
if(txt!='yes'){
document.getElementById('txtmsg').innerHTML="**Invaild answer only 'yes' or 'no'is accepted **";
btn.style.display="none";
}
if(txt=='no'){
document.getElementById('txtmsg').innerHTML="**Sorry this only for Web Development **";
btn.style.display="none";
}
if(txt==''){
document.getElementById('txtmsg').innerHTML="**Please fill the box according to your choice**";
btn.style.display="none";
}
if(txt=='yes'){
document.getElementById('txtmsg').innerHTML="**Now you can code by click on the button**";
btn.style.display="block";
}
  }



  function run(){
    let html=document.getElementById('html').value;
let css=document.getElementById('css').value;
let js=document.getElementById('js').value;
let output=document.getElementById('output');
output.contentDocument.body.innerHTML=html+"<style>"+css+"</style>";
output.contentWindow.eval(js);
}