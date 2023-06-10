let subscribe=()=>
{
let email=document.querySelector("input");
if (email.validity.valid)
{
    document.querySelector('.attribution').style.display="none";
    document.querySelector('.success').style.display="block";

}
else 
{
    let p=document.createElement('p');
    let str = document.createTextNode('invalid email address');
    p.style.color='red';
    p.style.fontSize='12px';
    p.style.display='block';
    p.style.marginRight='auto';
    p.appendChild(str); 
    document.querySelector('input').style.borderColor='red';
    document.querySelector('input').style.color='red';
    document.querySelector('label').appendChild(p);
}
}
let btn = document.querySelector('.btn2');
btn.addEventListener('click',()=>
{
 
    document.querySelector('.success').style.display="none";
    console.log(    window.innerWidth);        
    if(window.innerWidth>=670)
    {
         document.querySelector('.attribution').style.display="flex"; 
    }
    else 
    {
        document.querySelector('.attribution').style.display=window.getComputedStyle(document.querySelector('.attribution')).display;
    }
})
window.addEventListener('resize', function() {
    // Your code here to handle the resize event
    if(window.innerWidth>=670)
    {
         document.querySelector('.attribution').style.display="flex"; 
    }
    else 
    {
        document.querySelector('.attribution').style.display="block";
    }  });