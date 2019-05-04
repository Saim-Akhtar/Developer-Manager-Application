// Jquery for modal
$(document).ready(function(){
    $('.modal').modal();
  });

//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems, options);
//   });

// Code for ToolTip
$(document).ready(function(){
    $('.tooltipped').tooltip();
  });

// this function display the developer profile for updating it 
function developerDisplay(objectDev){
       updatingDev=objectDev
       document.getElementById("devnameUpdate").value=objectDev.Name
       document.getElementById("devemailUpdate").value=objectDev.Email
       document.getElementById("devdesignationUpdate").value=objectDev.Designation
       document.getElementById("devlangUpdate").value=objectDev.Languages
       document.getElementById("devsalaryUpdate").value=objectDev.Salary
       document.getElementById("devlinkedinUpdate").value=objectDev.Linkedin
       document.getElementById("devgitUpdate").value=objectDev.Github
       document.getElementById("devpicUpdate").value=objectDev.Github_Pic
}
// this function display the developer update page modal
function update_developer(){
    
    updatingDev.Name=document.getElementById("devnameUpdate").value;
    updatingDev.Email=document.getElementById("devemailUpdate").value;
    updatingDev.Designation=document.getElementById("devdesignationUpdate").value;
    updatingDev.Languages=document.getElementById("devlangUpdate").value;
    updatingDev.Salary=document.getElementById("devsalaryUpdate").value;
    updatingDev.Linkedin=document.getElementById("devlinkedinUpdate").value;
    updatingDev.Github=document.getElementById("devgitUpdate").value;
    updatingDev.Github_Pic=document.getElementById("devpicUpdate").value;
    
    
    
    const developerstring=JSON.stringify(updatingDev);
    localStorage.setItem(updatingDev.developerkey,developerstring);
    
}


function delete_developer(objectDev){
    let confirmDelete=confirm("Are Your Sure To Remove This Developer From The List?")
    if(confirmDelete === true){
        localStorage.removeItem(objectDev.developerkey);
        window.location.reload()
    }
    
}


function add_a_developer(){
    let checkkeys,num;
    // To check is the key is not already assigned to any object
    do{
        num=Math.ceil((Math.random()*100));
    
    checkkeys=devKeys.map(x => parseInt(x.slice(3)));
    
    }while(checkkeys.includes(num))
    
    const Name=document.getElementById("devname").value;
    const Email=document.getElementById("devemail").value;
    const Designation=document.getElementById("devdesignation").value;
    const Languages=document.getElementById("devlang").value;
    const Salary=document.getElementById("devsalary").value;
    const Linkedin=document.getElementById("devlinkedin").value;
    const Github=document.getElementById("devgit").value;
    const Github_Pic=document.getElementById("devpic").value;
    const developerkey="Sdev"+num;
    let developer={Name,Email,Designation,Languages,Salary,Linkedin,Github,Github_Pic,developerkey};
    const developerstring=JSON.stringify(developer);
    localStorage.setItem("Sdev"+num,developerstring);
}
function createDeveloperCard(objectDeveloper){
        let developers_list=document.getElementById("developers_list");
        const createCard=document.createElement("div")
        createCard.className="card"


        const createCardImage=document.createElement("div")
        createCardImage.classList.add('card-image','waves-effect','waves-block','waves-light')
        const createImage=document.createElement("img")
        createImage.className="activator"
    const createsrc=document.createAttribute("src")   
   createImage.setAttribute("src",objectDeveloper.Github_Pic)
    // createImage.setAttribute("src","./images/DMA logo.png") //fot temporary purpose
       createImage.setAttribute("alt","Developer's Pic")
    createImage.setAttribute("height","258px")
        createCardImage.appendChild(createImage)


        const createCardContent=document.createElement("div")
        createCardContent.classList.add("card-content","grey","lighten-2")
        const createCardContentp1=document.createElement("p")
        createCardContentp1.classList.add('card-title','activator','myfonts','grey-text','text-darken-4')
    createCardContentp1.innerHTML=objectDeveloper.Name
        const ContentIcon=document.createElement("i")
        ContentIcon.classList.add('material-icons','right')
        ContentIcon.innerHTML="more_vert"
        createCardContentp1.appendChild(ContentIcon)
    const createCardContentp2=document.createElement("p")
        createCardContentp2.className="myfonts"
        createCardContentp2.innerHTML=objectDeveloper.Designation
        createCardContent.appendChild(createCardContentp1)
    createCardContent.appendChild(createCardContentp2)
    
    
    const createCardAction =document.createElement("div")
        createCardAction.className="card-action"
    const cardActionp=document.createElement("p")
    const actionUpdate=document.createElement("a")
    actionUpdate.innerHTML="Update"
    actionUpdate.classList.add("btn","left","myfonts","modal-trigger","blue")
    actionUpdate.setAttribute("href","#update_modal")
    actionUpdate.addEventListener('click',function(){
        developerDisplay(objectDeveloper)
    })
    const actionDelete=document.createElement("button")
    actionDelete.innerHTML="Delete"
    actionDelete.classList.add("btn","right","myfonts","red")
    actionDelete.addEventListener('click',function(){
        delete_developer(objectDeveloper)
    })
    const actionClear=document.createElement("div")
    actionClear.className="clearfix"
    
    cardActionp.appendChild(actionUpdate)
    cardActionp.appendChild(actionDelete)
    createCardAction.appendChild(cardActionp)
    createCardAction.appendChild(actionClear)
    
    const createCareReveal=document.createElement("div")
    createCareReveal.classList.add("card-reveal","left-align","grey","lighten-2")
    createCareReveal.innerHTML=`
    <span class="card-title grey-text myfonts text-darken-4">${objectDeveloper.Name}
    <i class="material-icons right">close</i>
</span>


<table class="highlight">
    <tbody>
      <tr>
        <td class="mytextstyle">Designation</td>
        <td>${objectDeveloper.Designation}</td>
        
      </tr>
      <tr>
        <td class="mytextstyle">Email</td>
        <td>${objectDeveloper.Email}</td>
        
      </tr>
      <tr>
        <td class="mytextstyle">Programming Languages</td>
        <td>${objectDeveloper.Languages}</td>
        
      </tr>
      <tr>
        <td class="mytextstyle">Salary</td>
        <td>${objectDeveloper.Salary}</td>
        
      </tr>
      
    </tbody>
  </table>
  <p  class="mytextstyle"> <a href="${objectDeveloper.Linkedin}">Linkedin</a></p>
  <p  class="mytextstyle"> <a href="${objectDeveloper.Github}">Github</a></p>
    `    


    createCard.appendChild(createCardImage)
    createCard.appendChild(createCardContent)
    createCard.appendChild(createCardAction)
    createCard.appendChild(createCareReveal)
    

    developers_list.appendChild(createCard)
    
}
function display_developers(mydevs= devObjects){
    
    for(let objectDeveloper of mydevs){
        createDeveloperCard(objectDeveloper);
    }
}
// this functions enables to read all the developer data from local storage 
function read(){
    let AllKeys = Object.keys(localStorage);
    devKeys=AllKeys.filter(value => value.startsWith('Sdev'));
    // the global variable for al the objects
    devObjects=devKeys.map(obj => JSON.parse(localStorage.getItem(obj)));
    display_developers();
}
// This function is used to sort the list
function sorting_developers(){
    let developers_list=document.getElementById("developers_list");

    let sortedDevs=devObjects.slice(0);
    // sorting the list
    for(let j=1;j<sortedDevs.length;j++){
        let key=sortedDevs[j]
        let i=j-1;
        while( i>=0 && sortedDevs[i].Name >key.Name){
            sortedDevs[i+1]=sortedDevs[i]
            i-=1
        }
        sortedDevs[i+1]=key
    }

    const sort_button=document.getElementById("sorting_devs");
    const unsort_button=document.getElementById("unsorting_devs");
    sort_button.addEventListener('click' ,()=> {
        
        developers_list.innerHTML="";
        sort_button.classList.toggle("hide")
        unsort_button.classList.toggle("hide")
        display_developers(sortedDevs)    
        
    })
    unsort_button.addEventListener('click' ,()=> {
        
        developers_list.innerHTML="";
        sort_button.classList.toggle("hide")
        unsort_button.classList.toggle("hide")
        display_developers()    
        
    })

}
read();
sorting_developers();