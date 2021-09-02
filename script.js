const myFunction = () => {
  document.getElementById('drop-menu').classList.add('show');
  document.body.classList.add('overflow');
}

const myFunction1 = () => {
  document.getElementById('drop-menu').classList.remove('show');
  document.body.classList.remove('overflow');
}


const mobile_container =  [
  {
    name: "Professional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ["css", "html", "bootstrap", "Ruby"],
    button: "See Project"
  },

  {
    name: "Professional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ["css", "html", "bootstrap", "Ruby"],
    button: "See Project"
  },

  {
    name: "Professional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ["css", "html", "bootstrap", "Ruby"],
    button: "See Project"
  },

  {
    name: "Professional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ["css", "html", "bootstrap", "Ruby"],
    button: "See Project"
  },


  {
    name: "Professional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ["css", "html", "bootstrap", "Ruby"],
    button: "See Project"
  }
]

const projects_container = [
  p1 = {
    title: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ["css", "html", "bootstrap", "Ruby"],
    "image desktop": "images/Img.png",
    "image mobile": "images/image1.png",
    button: "See Project",
    "link to live version": "#1",
    "link to source": "#2"
  },

  p2 = {
    title: "Professional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ["html", "bootstrap", "Ruby"],
    button: "See Project",
    "link to live version": "#3",
    "link to source": "#4"
  },

  p3 = {
    title: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ["html", "bootstrap", "Ruby"],
    button: "See Project",
    "link to live version": "#5",
    "link to source": "#6"
  },

  p4 = {
    title: "Website Portfolio",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ["html", "bootstrap", "Ruby"],
    button: "See Project",
    "link to live version": "#7",
    "link to source": "#8"
  },

  p5 = {
    title: "Keeping track of hundreds of components website",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    tech: ["html", "Bootstrap", "Ruby on rails"],
    "live button": "See live",
    "source button": "See Source",
    "image desktop": "images/Snapshoot.png"
  }
  
]

//first mobile project
const div21 = document.getElementById("ret")
const img6 = document.createElement("img")
img6.src = p1["image mobile"]
img6.alt = "alt"
div21.appendChild(img6)

const div22 = document.getElementById("works_mobile")
const h38 = document.createElement("h3")
h38.className = "heed"
h38.innerText = p1.title
div22.appendChild(h38)
const para9 = document.createElement("p")
para9.innerText = p1.description
div22.appendChild(para9)

const div23 = document.getElementById("works2")
const div24 = document.createElement("div")
div24.className = "sites"
const tech9 = document.createElement("ul")
for (let i of p1.tech) {
  let li = document.createElement("li");
  li.innerText = i;
  tech9.appendChild(li)
}
div24.appendChild(tech9)
div23.appendChild(div24)
const button10 = document.createElement("button")
button10.type = "button"
button10.className = "button1"
button10.innerText = p1.button
button10.onclick = function() {myFunction4()};
div23.appendChild(button10)


//rendering mobile projects
function renderProject (p) {
  const projectHtml = `<div class='projects'>
   <h3>${p.name}</h3>
   <p>${p.description}</p>
   <div class="sites1">
   <ul>
   <li><a href="#">${p.tech[0]}</a><li>
   <li><a href="#">${p.tech[1]}</a><li>
   <li><a href="#">${p.tech[2]}</a><li>
   </ul>
  <div></div>
   <button class='button2' type='button' onclick="myFunction4()">See Project</button>
</div>
`;
return projectHtml;
 }
 const pro = document.getElementById("pro")
 pro.className = "project_container"

 mobile_container.forEach(p => {
  pro.insertAdjacentHTML("afterend", renderProject(p))
   
 });

 //mobile popup window
const popup_mobile = document.getElementById("popup_mobile")
const div25 = document.createElement("div")
div25.className = "mult1"
const div26 = document.createElement("div")
div26.className = "head1"
const h2 = document.createElement("h2")
h2.innerText = "Multi Post Stories"
div26.appendChild(h2)
div25.appendChild(div26)
popup_mobile.appendChild(div25)

const img8 = document.createElement("img")
img8.src = "images/iconx.png"
img8.alt = "cancel icon"
img8.onclick = function() {myFunction5()};
div26.appendChild(img8)
const list = document.createElement("ul")
for (let i of p5.tech) {
  let li = document.createElement("li");
  li.innerText = i;
  list.appendChild(li)
}
div25.appendChild(list)
const img9 = document.createElement("img")
img9.className = "snap1"
img9.src = "images/Snapshoot1.png"
img9.alt = "snapshoot"
div25.appendChild(img9)
const para10 = document.createElement("p")
para10.innerText = p5.description
div25.appendChild(para10)

const div27 = document.createElement("div")
div27.className = "but1"
const img11 = document.createElement("img")
img11.src = "images/power.png"
img11.alt = "power"
img11.className = "cat"
const button11 = document.createElement("button")
button11.type = "button"
button11.className = "button5"
button11.innerText = p5["live button"]
button11.appendChild(img11)
div27.appendChild(button11)
div25.appendChild(div27)

const img10 = document.createElement("img")
img10.src = "images/catc.png"
img10.className = "cat"
const button12 = document.createElement("button")
button12.type = "button"
button12.className = "button6"
button12.innerText = p5["source button"]
button12.appendChild(img10)
div27.appendChild(button12)



// fist desktop project
const works3 = document.getElementById("works3")
works3.className = "works3"
const img1 = document.createElement("img")
img1.src = p1["image desktop"]
img1.alt = "alt"
works3.appendChild(img1)

const div1 = document.createElement("div")
div1.className = "store"
const h31 = document.createElement("h3")
h31.className = "heed"
h31.innerText = p1.title
div1.appendChild(h31)
works3.appendChild(div1)
const para1 = document.createElement("p")
para1.innerText = p1.description
div1.appendChild(para1)

const div2 = document.createElement("div")
div2.className = "site1"
const tech1 = document.createElement("ul")
for (let i of p1.tech) {
  let li = document.createElement("li");
  li.innerText = i;
  tech1.appendChild(li)
}
div2.appendChild(tech1)
div1.appendChild(div2)
const button1 = document.createElement("button")
button1.type = "button"
button1.className = "button1"
button1.innerText = p1.button
button1.onclick = function() {myFunction2()};
div1.appendChild(button1)

//first card
const project_desktop = document.getElementById("project_desktop")
project_desktop.className = "project_desktop"
const div3 = document.createElement("div")
div3.className = "projects_art"

const h32 = document.createElement("h3")
h32.innerText = p2.title
div3.appendChild(h32)
project_desktop.appendChild(div3)

const para2 = document.createElement("p")
para2.innerText = p2.description
div3.appendChild(para2)

const div4 = document.createElement("div")
div4.className = "sites12"
const tech2 = document.createElement("ul")
for (let i of p2.tech) {
    let li = document.createElement("li");
    li.innerText = i;
    tech2.appendChild(li);
}
div4.appendChild(tech2)
div3.appendChild(div4)
const button2 = document.createElement("button")
button2.type = "button"
button2.className = "button2"
button2.innerText = p2.button
button2.onclick = function() {myFunction2()};
div3.appendChild(button2)

//second card
const div5 = document.createElement("div")
div5.className = "projects_data"

const h33 = document.createElement("h3")
h33.innerText = p3.title
div5.appendChild(h33)
project_desktop.appendChild(div5)

const para3 = document.createElement("p")
para3.innerText = p3.description
div5.appendChild(para3)

const div6 = document.createElement("div")
div6.className = "sites12"
const tech3 = document.createElement("ul")
for (let i of p3.tech) {
    let li = document.createElement("li");
    li.innerText = i;
    tech3.appendChild(li);
}
div6.appendChild(tech3)
div5.appendChild(div6)
const button3 = document.createElement("button")
button3.type = "button"
button3.className = "button2"
button3.innerText = p3.button
button3.onclick = function() {myFunction2()};
div5.appendChild(button3)





