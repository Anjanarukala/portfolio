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
    p.innerText="I just completed my Bachelor of Technology Degree in 2025 at Vaagdevi college of engineering, There I maintained cgpa of 8.6.";
    p.classList.add("para");
    educontent.append(p);
    console.log('school clik')
})
let frontend=document.querySelector('.Frontend');
frontend.addEventListener('mouseover',()=>{
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
backend.addEventListener('mouseover',()=>{
    unorder.innerHTML="";
    let future=document.createElement('li');
    future.innerHTML="NODE.JS";
    let future1=document.createElement('li');
    future1.innerHTML="EXPRESS";
    let future2=document.createElement('li');
    future2.innerHTML="REST APIS";
    let future3=document.createElement('li');
    future3.innerHTML="MONGODB";
    future.classList.add('biglist');
    future1.classList.add('biglist');
    future2.classList.add('biglist');
    future3.classList.add('biglist');
    unorder.appendChild(future);
    unorder.appendChild(future1);
    unorder.appendChild(future2);
    unorder.appendChild(future3);
    document.querySelector('.rightskill-box').classList.add('slide-ing');
});
framworks.addEventListener('mouseover',()=>{
    unorder.innerHTML="";
    let boot=document.createElement('li');
    let reac=document.createElement('li');
    let wind=document.createElement('li');
    let redu=document.createElement('li');
    boot.innerHTML="BootStrap";
    reac.innerHTML="React";
    wind.innerHTML="TailwindCss";
    redu.innerHTML="Redux";
    boot.classList.add('lists');
    reac.classList.add('lists');
    wind.classList.add('lists');
    redu.classList.add('lists');
    unorder.appendChild(boot);
    unorder.appendChild(reac);
    unorder.appendChild(wind);
    unorder.appendChild(redu);
    document.querySelector('.rightskill-box').classList.add('slide-ing');
});
tools.addEventListener('mouseover',()=>{
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
softskills.addEventListener('mouseover',()=>{
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