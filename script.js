
/*const tableElement=document.getElementById("sampleTable");
function insert_Row() {
    //Write your code
            const trElement=document.createElement("tr");
            const td1=document.createElement("td");
            const td2=document.createElement("td");
            td1.textContent="New Cell1";
            td2.textContent="New Cell2";
            trElement.append(td1,td2);
            tableElement.insertBefore(trElement,tableElement.children[0]);
  
  
  
}*/
function insert_Row() {
    const tableBody = document.querySelector("#sampleTable tbody");
    const trElement = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.textContent = "New Cell1";
    td2.textContent = "New Cell2";
    trElement.append(td1, td2);
    tableBody.insertBefore(trElement, tableBody.firstChild);
}
