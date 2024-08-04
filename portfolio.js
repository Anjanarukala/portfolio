let scldata=document.querySelector('#first');
let educontent=document.querySelector('.educontent')
let rightbox=document.querySelector('.rightskill-box')
let unorder=document.querySelector('.unorder')
let framworks=document.querySelector('.Frameworks');
let tools=document.querySelector('.Tools');
let softskills=document.querySelector('.Softskills');
scldata.addEventListener('click',()=>{
    educontent.innerText="";
    let p=document.createElement('p');
    p.innerText="I completed schooling in Ekashila Techno School located at Hasanparthy, Warangal. I scored 9.7 GPA in SSC board examination.";
    p.classList.add("para");
    educontent.append(p);
})
let interdata=document.querySelector('#second');
interdata.addEventListener('click',()=>{
    educontent.innerText="";
    let p=document.createElement('p');
    p.innerText="I completed my intermediate in Narayana junior college [M.P.C] located at Rangareddy district. I scored 96% in intermediate public examination.";
    p.classList.add("para");
    educontent.append(p);
    console.log('school clik')
})
let enginneringdata=document.querySelector('#third');
enginneringdata.addEventListener('click',()=>{
    educontent.innerText="";
    let p=document.createElement('p');
    p.innerText="I am currently pursuing my B-Tech in Vaagdevi college of engineering in the stream of Data science, located at Warangal.";
    p.classList.add("para");
    educontent.append(p);
    console.log('school clik')
})
let frontend=document.querySelector('.Frontend');
frontend.addEventListener('click',()=>{
    unorder.innerHTML="";
    let list1=document.createElement('li');
    list1.innerHTML="HTML";
    let list2=document.createElement('li');
    list2.innerText="CSS";
    let list3=document.createElement('li');
    list3.innerHTML="JAVASCRIPT";
    list1.classList.add('lists');
    list2.classList.add('lists');
    list3.classList.add('lists');
    unorder.appendChild(list1);
    unorder.appendChild(list2);
    unorder.appendChild(list3);
    document.querySelector('.rightskill-box').classList.add('slide-ing');
});
let backend=document.querySelector('.Backend');
backend.addEventListener('click',()=>{
    unorder.innerHTML="";
    let future=document.createElement('li');
    future.innerHTML="I planned to complete full stack development in coming months present i am not having other courses to complete "
    future.classList.add('biglist');
    unorder.appendChild(future);
    document.querySelector('.rightskill-box').classList.add('slide-ing');
});
framworks.addEventListener('click',()=>{
    unorder.innerHTML="";
    let boot=document.createElement('li');
    boot.innerHTML="BootStrap";
    boot.classList.add('lists');
    unorder.appendChild(boot);
    document.querySelector('.rightskill-box').classList.add('slide-ing');
});
tools.addEventListener('click',()=>{
    unorder.innerHTML="";
    let list1=document.createElement('li');
    list1.innerHTML="Git-hub";
    let list2=document.createElement('li');
    list2.innerText="Terminal";
    let list3=document.createElement('li');
    list3.innerHTML="Visual-Studio";
    list1.classList.add('lists');
    list2.classList.add('lists');
    list3.classList.add('lists');
    unorder.appendChild(list1);
    unorder.appendChild(list2);
    unorder.appendChild(list3);
    document.querySelector('.rightskill-box').classList.add('slide-ing');
});
softskills.addEventListener('click',()=>{
    unorder.innerHTML="";
    let list1=document.createElement('li');
    list1.innerHTML="Communication";
    let list2=document.createElement('li');
    list2.innerText="Problem-Solving";
    let list3=document.createElement('li');
    list3.innerHTML="Leadership";
    list1.classList.add('lists');
    list2.classList.add('lists');
    list3.classList.add('lists');
    unorder.appendChild(list1);
    unorder.appendChild(list2);
    unorder.appendChild(list3);
    document.querySelector('.rightskill-box').classList.add('slide-ing');
});