//this method didnt work
/*var a =document.getElementById('main-input');
var button =document.getElementsByTagName('button');
function addCheckBox(){
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "";
checkbox.value = "";
checkbox.id = "";
var label = document.createElement('label')
label.htmlFor = "id";
var br=document.createElement('br');
label.appendChild(document.createTextNode(a.value));
document.getElementsByTagName("div")[0].appendChild(checkbox);
document.getElementsByTagName("div")[0].appendChild(label);
document.getElementsByTagName("div")[0].appendChild(br);
a.value="";
}
*/
//working method
var i=0;
function addCheckBox(){
	var input=document.getElementById('main-input'); 
    if (input.value!='') 
    {   
        i++;  
        var title   =input.value;
        var div = document.createElement('div');        
        div.innerHTML = '<input type="checkbox" id="check' + i + '" name="check' + i + '"><label for="check' + i + '">'+ title +'</label>';       
        document.getElementsByTagName('section')[0].appendChild(div);
    }
    input.value="";
}
