var form=document.createElement('form');


var div=document.createElement('div');


var label=document.createElement('label');
label.innerHTML="Name";
label.setAttribute=('for','name');


var input=document.createElement('input');
input.setAttribute=('id','name');
input.setAttribute=('placeholder','Enter your name');
input.setAttribute=('type','text');
input.className="main";


var div0=document.createElement('div');


var label0=document.createElement('label');
label0.innerHTML="email";
label0.setAttribute=('for','email');



var input0=document.createElement('input');
input0.setAttribute=('id','email');
input0.setAttribute=('placeholder','Enter your email');
input0.setAttribute=('type','email');
input0.className="main";


var div1=document.createElement('div');


var label1=document.createElement('label');
label1.innerHTML="password";
label1.setAttribute=('for','password');



var input1=document.createElement('input');
input1.setAttribute=('id','password');
input1.setAttribute=('placeholder','Enter your password');
input1.setAttribute=('type','password');
input1.className="main";




div.append(label,input);
div0.append(label0,input0);
div1.append(label1,input1);
form.append(div,div0,div1);
document.body.append(form);

function myfun(){
    var val=document.getElementsByTagName('input');
    for(var i=0;i<val.length;i++){
        console.log(val[i].value);
    }
}




