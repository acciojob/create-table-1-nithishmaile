
const tableElement=document.getElementById("sampleTable");
function insert_Row() {
    //Write your code
            const trElement=document.createElement("tr");
            const td1=document.createElement("td");
            const td2=document.createElement("td");
            td1.innerText="New Cell1";
            td2.innerText="New Cell2";
            trElement.append(td1,td2);
            tableElement.insertBefore(trElement,tableElement.children[0]);
  
  
  
}
