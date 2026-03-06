
const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';

fetch(url)
.then((res)=>res.json())
.then((data)=>issues(data))


const sectionOfMain= document.getElementById("sectionsIT");



// {
//     "id": 1,
//     "title": "Fix navigation menu on mobile devices",
//     "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
//     "status": "open",
//     "labels": [
//         "bug",
//         "help wanted"
//     ],
//     "priority": "high",
//     "author": "john_doe",
//     "assignee": "jane_smith",
//     "createdAt": "2024-01-15T10:30:00Z",
//     "updatedAt": "2024-01-15T10:30:00Z"
// }





function issues(objectsOfData) {
    const allIssue =document.getElementById("all-issue-update");
allIssue.innerText = objectsOfData.data.length;


const dates = objectsOfData.data;

dates.forEach(data => {

const div = document.createElement("div");

// priority color
if(data.status === "open"){
    div.classList.add("border-t-2","border-green-500");
}
else if(data.status === "closed"){
    div.classList.add("border-t-2","border-purple-500");
}
let priorityColor = "";

if(data.priority === "high"){
    priorityColor = "bg-red-500";
}
else if(data.priority === "medium"){
    priorityColor = "bg-yellow-500";
}
else if(data.priority === "low"){
    priorityColor = "bg-gray-500";
}

div.innerHTML = `
<div class="p-4 space-y-4 gap-5 shadow-2xl h-75">
    <div class="flex justify-between ">
        <img src="assets/Open-Status.png">
        <div id="status2" class="${priorityColor} text-white px-2 rounded"><p>${data.priority}</p></div>
    </div>

    <div class="h-40">
        <h2 class="font-semibold">${data.title}</h2>
        <p class="text-[#64748B]">${data.description}</p>
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