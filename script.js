function addNewWEField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here')
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
    //console.log
}
function addNewSkField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here')
    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");

    skOb.insertBefore(newNode,skAddButtonOb);
}
// Generate CV - Take the values from our form fields and put in
// the template.
function generateCV(){
    //console.log("generating CV");
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

    //direct

    document.getElementById('nameT2').innerHTML=nameField;

    let contactField=document.getElementById('contactField').value;
    document.getElementById('contactT').innerHTML=contactField;

    let addressField=document.getElementById('addressField').value;
    document.getElementById('addressT').innerHTML=addressField;

    let CollegeField=document.getElementById('CollegeField').value;
    document.getElementById('CollegeT').innerHTML=CollegeField;

    let QualificationField=document.getElementById('QualificationField').value;
    document.getElementById('DegreeT').innerHTML=QualificationField;

    let LinkedInField=document.getElementById('LinkedInField').value;
    document.getElementById('LinkedInT').innerHTML=LinkedInField;

    let objectiveField=document.getElementById('objectiveField').value;
    document.getElementById('objectiveT').innerHTML=objectiveField;

    // work experience
    let wes=document.getElementsByClassName('weField');
    let str="";
    for(let e of wes){
        str=str+ `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML=str;

    //skills
    let sk=document.getElementsByClassName('skField');
    let str1="";
    for(let e of sk){
        str1=str1+ `<li> ${e.value} </li>`;
    }
    document.getElementById('skT').innerHTML=str1;

    //code for image
    let file=document.getElementById('imgField').files[0];
    console.log("this is a file", file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    //set image to template
   // document.getElementById('imgTemplate').src=reader.result;
    reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;
    }
    /* hide cv-form and show cv-template*/
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}

//print CV
function printCV(){
    window.print();
}