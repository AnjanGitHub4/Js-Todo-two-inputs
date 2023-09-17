let input = document.querySelectorAll("input");
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
// let logoText = document.getElementById('logoIcon');
const addBtn = document.getElementById('btn');
let saveBtn = document.querySelector('.save-btn');
let inp = document.querySelectorAll('input');
let nameData = [];
let fName = "", lName = "";

// let profileName = fname.value.charAt(0)+lname.value.charAt(0);

function getLocalStorageItems() {
  let container = document.querySelector('.container');
  let localData = JSON.parse(localStorage.getItem("names"));
  if (localData !== null) {
    if (nameData.length === 0) {
      nameData = localData.filter((val)=> {
        return val !== '';
      })
    }
    let html = "";
    nameData.forEach((val, id)=> {
      html += `
      <div class="card">
      <div class="result">
      ${val}
      </div>
      <div class="btn-group">
      <button  class="btn my-2 deleteBtn" id="${id}" onclick="deleteMe(this.id)">Delete Me</button>
      <button  class="btn my-2 updateBtn" id="${id}" value="${val}" onclick="updateMe(this.id,this)">Update Me</button>
      </div>
      </div>
      `;
    });
    container.innerHTML = html;
  } else {
    alert("no items");
  }
}
function addNotenameData() {
  nameData = [...nameData,
    fName,
    lName];
  let myData = [];
  nameData.forEach((val)=> {
    myData.push(val)
  })
  localStorage.setItem("names", JSON.stringify(myData));
}
function deleteMe(id) {
  nameData.splice(id, 1);
  nameData = nameData.filter((val)=> {
    return val !== '';
  })
  localStorage.setItem("names", JSON.stringify(nameData));
  getLocalStorageItems();
}
function updateMe(id, obj) {
  // let saveBtn = document.querySelector('.save-btn');
  if (nameData[id] === obj.value) {
    fname.value = nameData[id];
    lname.value = id;
    lname.style.display = "none";
    lname.style.opacity = "0.3";
    saveBtn.style.opacity = "1";
    addBtn.style.visibility = "hidden";
  }
}
function saveUpdate() {
  let id = lname.value;
  if (id !== null) {
    nameData[id] = fname.value;
    localStorage.setItem("names", JSON.stringify(nameData));
    getLocalStorageItems();
    addBtn.style.visibility = "visible";
    lname.style.display = "block";
    lname.style.opacity = "1";
    saveBtn.style.opacity = "0";
    fname.value = "";
    lname.value = "";
  }
}
function inputValidation() {
  if (fname.value === "" && lname.value === "") {
    alert("Please enter a valid data");
    input.forEach((inp, index)=> {
      inp.style.border = "1px solid red";
    });
  } else {}
}
function submitForm() {
  fName = fname.value;
  lName = lname.value;
  if (fName && lName) {
    addNotenameData();
    getLocalStorageItems();
    fname.value = "";
    lname.value = "";
  } else {
    inputValidation();
  }
}
addBtn.addEventListener('click', submitForm);

window.onload = ()=> {
  // inputValidation();
  getLocalStorageItems();
}
/** profile name :) **
/*
document.addEventListener('DOMContentLoaded',(event)=>{
input.forEach((nameData,index)=>{
nameData.style.border = "1px solid red";
nameData.addEventListener('blur',()=>{
nameData.style.border = "1px solid #00ffca";
});
});
});
function changeProf(event){
profileName = fname.value.charAt(0)+lname.value.charAt(0);
event.preventDefault();

if(fname.value==="" && lname.value==="" && profileName===""){
logoText.textContent = "FN";
input.forEach((nameData,index)=>{
nameData.style.border = "1px solid red";
nameData.addEventListener('blur',()=>{
nameData.style.border = "1px solid #00ffca";
});
});
}
else
{
localStorage.clear();
if(localStorage.length===0 || localStorage.key(0)===null)
{
localStorage.setItem("names",profileName)
}
logoText.textContent = profileName;
}
}
btn.addEventListener('click',changeProf);
*/