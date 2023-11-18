let rowcount=0;
// add new row to the table
document.querySelector("#submit").addEventListener("click",(e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let phone = document.getElementById('phone').value;
    if(name == "" || age == "" || phone == "") {
        alert("All fields are required");
        } else {
            rowcount++;
            const tbody=document.querySelector('tbody');
            let tr=document.createElement('tr');
            let td1=document.createElement('td');
            let td2=document.createElement('td');
            let td3=document.createElement('td');
            let td4=document.createElement('td');
            let td5=document.createElement('td');
            td1.innerText=rowcount;
            td2.innerText=name;
            td3.innerText=age;
            td4.innerText=phone;
            td5.innerHTML=`<button class="edit"><i class="fa-solid fa-pen-to-square fa-lg"></i></button> 
            <button class="save mx-2"><i class="fa-solid fa-file-circle-check fa-lg"></i></button> 
            <button class="delete"><i class="fa-solid fa-trash-can fa-lg"></i></button> 
             `
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tbody.append(tr);
        let editbtn=document.querySelectorAll(".edit");
        let savebtn=document.querySelectorAll(".save");
        let deletebtn=document.querySelectorAll(".delete");
            console.log(editbtn)
          for(let k=0;k<editbtn.length;k++){
            console.log(editbtn[k])
        editbtn[k].onclick=function(){
           let parent= this.parentElement.parentElement
           parent.style.border="2px solid black";
           parent.contentEditable=true;
           console.log(this.parentElement.parentElement)
        }
        savebtn[k].onclick=function(){
            let parent= this.parentElement.parentElement
            parent.style.border="";
            parent.contentEditable=false;
            
            }
            deletebtn[k].onclick=function(){
                let parent= this.parentElement.parentElement
                parent.remove()
                }
            }

    }

})