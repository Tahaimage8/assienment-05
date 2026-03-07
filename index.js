let currentTab = "all";
const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';


let allIssues = [];


fetch(url)
  .then((res) => res.json())
  .then((data) => {
    allIssues = data.data;
    issues({ data: allIssues });
  });


const sectionOfMain= document.getElementById("sectionsIT");
const loadWordDetails = async (id)=>{
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    // console.log(url);
    const res = await fetch(url);
    const details = await res.json();
    displayWordDetails(details.data);
    
}
const displayWordDetails = (word)=>{

const detailsContainer = document.getElementById("details-container");

let labelsHTML="";

word.labels.forEach(label=>{
labelsHTML += `<span class="px-2 py-1 text-xs border rounded">${label}</span>`
})

detailsContainer.innerHTML= `
<h3 class="text-lg font-bold">${word.title}</h3>

<div class="flex gap-4">
<p>${word.status}</p>
<p>${word.author}</p>
<p>${word.updatedAt}</p>
</div>

<div class="flex gap-2 flex-wrap mt-3">
${labelsHTML}
</div>

<div class="mt-3">
<p>${word.description}</p>
</div>

<div class="mt-3">
<p class="font-bold">${word.priority}</p>
</div>
`;

document.getElementById("my_modal_5").showModal()

}
// displayWordDetails();
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// },
// {
// "id": 2,
// "title": "Add dark mode support",
// "description": "Users are requesting a dark mode option. This would improve accessibility and user experience.",
// "status": "open",
// "labels": [
// "enhancement",
// "good first issue"
// ],
// "priority": "medium",
// "author": "sarah_dev",
// "assignee": "",
// "createdAt": "2024-01-14T14:20:00Z",
// "updatedAt": "2024-01-16T09:15:00Z"
// },




function issues(objectsOfData) {
    const allIssue =document.getElementById("all-issue-update");
allIssue.innerText = objectsOfData.data.length;

sectionOfMain.innerHTML = ""; 

const dates = objectsOfData.data;

dates.forEach(data => {

let labelsHTML = "";
data.labels.forEach(label => {

if(label === "bug"){
labelsHTML += `<span class="px-2 py-1 text-[10px] border border-red-200 text-red-500 rounded-full"> BUG</span>`;
}

else if(label === "help wanted"){
labelsHTML += `<span class="px-2 py-1 text-[10px] border border-orange-200 text-orange-500 rounded-full"> HELP WANTED</span>`;
}

else if(label === "enhancement"){
labelsHTML += `<span class="px-2 py-1 text-[10px] border border-blue-200 text-blue-500 rounded-full"> ENHANCEMENT</span>`;
}

else if(label === "good first issue"){
labelsHTML += `<span class="px-2 py-1 text-[10px] border border-green-200 text-green-500 rounded-full"> GOOD FIRST ISSUE</span>`;
}
else if(label === "documentation"){
labelsHTML += `<span class="px-2 py-1 text-[10px] border border-yellow-200 text-yellow-500 rounded-full"> documentation</span>`;
}
});

const div = document.createElement("div");

if(data.status === "open"){
    div.classList.add("border-t-4","border-green-500","rounded-2xl");
}
else if(data.status === "closed"){
    div.classList.add("border-t-4","border-purple-500", "rounded-2xl");
}


let priorityColor = "";

if(data.priority === "high"){
    priorityColor = "bg-red-200";
}
else if(data.priority === "medium"){
    priorityColor = "bg-yellow-200";
}
else if(data.priority === "low"){
    priorityColor = "bg-gray-200 ";
}



let images ="";
if(data.status === "open"){
    images = `<img src="assets/Open-Status.png">`;
}
else if(data.status === "closed"){
    images = `<img src="assets/closed-Status.png">`;
}



div.innerHTML = `
<div class="p-4 space-y-4 gap-5 shadow-2xl h-[400px] rounded-2xl  cursor-pointer" onclick="loadWordDetails('${data.id}')">
    <div class="flex justify-between ">
       <div>${images}</div>
        <div id="status2" class="${priorityColor}  text-white px-2 rounded-full"><p>${data.priority}</p></div>
    </div>

    <div class="h-40">
        <h2 class="font-semibold">${data.title}</h2>
        <p class="text-[#64748B]">${data.description}</p>
    </div>
<div class="flex gap-2 flex-wrap flex-row">
${labelsHTML}
</div>
    <div>
        <p>${data.author}</p>
        <p>${data.updatedAt}</p>
    </div>
</div>
`;

sectionOfMain.appendChild(div);

});
  



}



// ALL
document.getElementById("All-tabs").addEventListener("click", () => {
    currentTab = "all";
  issues({ data: allIssues });
//   variable.classList.remove("hidden")

});


// OPEN
document.getElementById("Open-tabs").addEventListener("click", () => {

    currentTab = "open";
  const openIssues = allIssues.filter(
    (issue) => issue.status === "open"
  );
  
  issues({ data: openIssues });



});


// CLOSED
document.getElementById("Closed-tabs").addEventListener("click", () => {
    currentTab = "closed";
  const closedIssues = allIssues.filter(
    (issue) => issue.status === "closed"
  );

  issues({ data: closedIssues });

});

// search option    


document.getElementById("btn-search").addEventListener("click",()=>{

const input = document.getElementById("input-search");
const searchValue = input.value.trim().toLowerCase();

fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
.then((res)=> res.json())
.then((data)=> {

let results = data.data;

if(currentTab === "open"){
results = results.filter(issue => issue.status === "open");
}

else if(currentTab === "closed"){
results = results.filter(issue => issue.status === "closed");
}

issues({ data: results });

})

})
