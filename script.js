/* eslint no-undef: "error" */

const myFunction = () => {
  document.getElementById('drop-menu').classList.add('show');
  document.body.classList.add('overflow');
};

const myFunction1 = () => {
  document.getElementById('drop-menu').classList.remove('show');
  document.body.classList.remove('overflow');
};



const mobile_container = [
  {
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ['css', 'html', 'bootstrap', 'Ruby'],
    button: 'See Project',
  },

  {
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ['css', 'html', 'bootstrap', 'Ruby'],
    button: 'See Project',
  },

  {
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ['css', 'html', 'bootstrap', 'Ruby'],
    button: 'See Project',
  },

  {
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ['css', 'html', 'bootstrap', 'Ruby'],
    button: 'See Project',
  },

  {
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ['css', 'html', 'bootstrap', 'Ruby'],
    button: 'See Project',
  },
];

const projects_container = [
  {
    title: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['css', 'html', 'bootstrap', 'Ruby'],
    'image desktop': 'images/Img.png',
    'image mobile': 'images/image1.png',
    button: 'See Project',
    'link to live version': '#1',
    'link to source': '#2',
  },

  {
    title: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    'link to live version': '#3',
    'link to source': '#4',
  },

  {
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    'link to live version': '#5',
    'link to source': '#6',
  },

  {
    title: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    'link to live version': '#7',
    'link to source': '#8',
  },

  {
    title: 'Keeping track of hundreds of components website',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    tech: ['html', 'Bootstrap', 'Ruby on rails'],
    'live button': 'See live',
    'source button': 'See Source',
    'image desktop': 'images/Snapshoot.png',
  },

];

const p1 = projects_container[0];
const p2 = projects_container[1];
const p3 = projects_container[2];
const p4 = projects_container[3];
const p5 = projects_container[4];

// first mobile project
const div21 = document.getElementById('ret');
const img6 = document.createElement('img');
img6.src = p1['image mobile'];
img6.alt = 'alt';
div21.appendChild(img6);

const div22 = document.getElementById('works_mobile');
const h38 = document.createElement('h3');
h38.className = 'heed';
h38.innerText = p1.title;
div22.appendChild(h38);
const para9 = document.createElement('p');
para9.innerText = p1.description;
div22.appendChild(para9);

const div23 = document.getElementById('works2');
const div24 = document.createElement('div');
div24.className = 'sites';
const tech9 = document.createElement('ul');
for (const i of p1.tech) {
  const li = document.createElement('li');
  li.innerText = i;
  tech9.appendChild(li);
}
div24.appendChild(tech9);
div23.appendChild(div24);
const button10 = document.createElement('button');
button10.type = 'button';
button10.className = 'button1';
button10.innerText = p1.button;
button10.onclick = function () { myFunction4(); };
div23.appendChild(button10);

// rendering mobile projects
function renderProject(p) {
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
const pro = document.getElementById('pro');
pro.className = 'project_container';

mobile_container.forEach((p) => {
  pro.insertAdjacentHTML('afterend', renderProject(p));
});

// mobile popup window
const popup_mobile = document.getElementById('popup_mobile');
const div25 = document.createElement('div');
div25.className = 'mult1';
const div26 = document.createElement('div');
div26.className = 'head1';
const h2 = document.createElement('h2');
h2.innerText = 'Multi Post Stories';
div26.appendChild(h2);
div25.appendChild(div26);
popup_mobile.appendChild(div25);

const img8 = document.createElement('img');
img8.src = 'images/iconx.png';
img8.alt = 'cancel icon';
img8.onclick = function () { myFunction5(); };
div26.appendChild(img8);
const list = document.createElement('ul');
for (const i of p5.tech) {
  const li = document.createElement('li');
  li.innerText = i;
  list.appendChild(li);
}
div25.appendChild(list);
const img9 = document.createElement('img');
img9.className = 'snap1';
img9.src = 'images/Snapshoot1.png';
img9.alt = 'snapshoot';
div25.appendChild(img9);
const para10 = document.createElement('p');
para10.innerText = p5.description;
div25.appendChild(para10);

const div27 = document.createElement('div');
div27.className = 'but1';
const img11 = document.createElement('img');
img11.src = 'images/power.png';
img11.alt = 'power';
img11.className = 'cat';
const button11 = document.createElement('button');
button11.type = 'button';
button11.className = 'button5';
button11.innerText = p5['live button'];
button11.appendChild(img11);
div27.appendChild(button11);
div25.appendChild(div27);

const img10 = document.createElement('img');
img10.src = 'images/catc.png';
img10.className = 'cat';
const button12 = document.createElement('button');
button12.type = 'button';
button12.className = 'button6';
button12.innerText = p5['source button'];
button12.appendChild(img10);
div27.appendChild(button12);

// fist desktop project
const works3 = document.getElementById('works3');
works3.className = 'works3';
const img1 = document.createElement('img');
img1.src = p1['image desktop'];
img1.alt = 'alt';
works3.appendChild(img1);

const div1 = document.createElement('div');
div1.className = 'store';
const h31 = document.createElement('h3');
h31.className = 'heed';
h31.innerText = p1.title;
div1.appendChild(h31);
works3.appendChild(div1);
const para1 = document.createElement('p');
para1.innerText = p1.description;
div1.appendChild(para1);

const div2 = document.createElement('div');
div2.className = 'site1';
const tech1 = document.createElement('ul');
for (const i of p1.tech) {
  const li = document.createElement('li');
  li.innerText = i;
  tech1.appendChild(li);
}
div2.appendChild(tech1);
div1.appendChild(div2);
const button1 = document.createElement('button');
button1.type = 'button';
button1.className = 'button1';
button1.innerText = p1.button;
button1.onclick = function () { myFunction2(); };
div1.appendChild(button1);

// first card
const project_desktop = document.getElementById('project_desktop');
project_desktop.className = 'project_desktop';
const div3 = document.createElement('div');
div3.className = 'projects_art';

const h32 = document.createElement('h3');
h32.innerText = p2.title;
div3.appendChild(h32);
project_desktop.appendChild(div3);

const para2 = document.createElement('p');
para2.innerText = p2.description;
div3.appendChild(para2);

const div4 = document.createElement('div');
div4.className = 'sites12';
const tech2 = document.createElement('ul');
for (const i of p2.tech) {
  const li = document.createElement('li');
  li.innerText = i;
  tech2.appendChild(li);
}
div4.appendChild(tech2);
div3.appendChild(div4);
const button2 = document.createElement('button');
button2.type = 'button';
button2.className = 'button2';
button2.innerText = p2.button;
button2.onclick = function () { myFunction2(); };
div3.appendChild(button2);

// second card
const div5 = document.createElement('div');
div5.className = 'projects_data';

const h33 = document.createElement('h3');
h33.innerText = p3.title;
div5.appendChild(h33);
project_desktop.appendChild(div5);

const para3 = document.createElement('p');
para3.innerText = p3.description;
div5.appendChild(para3);

const div6 = document.createElement('div');
div6.className = 'sites12';
const tech3 = document.createElement('ul');
for (const i of p3.tech) {
  const li = document.createElement('li');
  li.innerText = i;
  tech3.appendChild(li);
}
div6.appendChild(tech3);
div5.appendChild(div6);
const button3 = document.createElement('button');
button3.type = 'button';
button3.className = 'button2';
button3.innerText = p3.button;
button3.onclick = function () { myFunction2(); };
div5.appendChild(button3);

// third card
const div7 = document.createElement('div');
div7.className = 'projects_web';

const h34 = document.createElement('h3');
h34.innerText = p4.title;
div7.appendChild(h34);
project_desktop.appendChild(div7);

const para4 = document.createElement('p');
para4.innerText = p4.description;
div7.appendChild(para4);

const div8 = document.createElement('div');
div8.className = 'sites12';
const tech4 = document.createElement('ul');
for (const i of p4.tech) {
  const li = document.createElement('li');
  li.innerText = i;
  tech4.appendChild(li);
}
div8.appendChild(tech4);
div7.appendChild(div8);
const button4 = document.createElement('button');
button4.type = 'button';
button4.className = 'button2';
button4.innerText = p4.button;
button4.onclick = function () { myFunction2(); };
div7.appendChild(button4);

// fourth card
const div9 = document.createElement('div');
div9.className = 'projects_art';

const h35 = document.createElement('h3');
h35.innerText = p2.title;
div9.appendChild(h35);
project_desktop.appendChild(div9);

const para5 = document.createElement('p');
para5.innerText = p2.description;
div9.appendChild(para5);

const div10 = document.createElement('div');
div10.className = 'sites12';
const tech5 = document.createElement('ul');
for (const i of p2.tech) {
  const li = document.createElement('li');
  li.innerText = i;
  tech5.appendChild(li);
}
div10.appendChild(tech5);
div9.appendChild(div10);
const button5 = document.createElement('button');
button5.type = 'button';
button5.className = 'button2';
button5.innerText = p2.button;
button5.onclick = function () { myFunction2(); };
div9.appendChild(button5);

// fifth card
const div11 = document.createElement('div');
div11.className = 'projects_data';

const h36 = document.createElement('h3');
h36.innerText = p3.title;
div11.appendChild(h36);
project_desktop.appendChild(div11);

const para6 = document.createElement('p');
para6.innerText = p3.description;
div11.appendChild(para6);

const div12 = document.createElement('div');
div12.className = 'sites12';
const tech6 = document.createElement('ul');
for (const i of p3.tech) {
  const li = document.createElement('li');
  li.innerText = i;
  tech6.appendChild(li);
}
div12.appendChild(tech6);
div11.appendChild(div12);
const button6 = document.createElement('button');
button6.type = 'button';
button6.className = 'button2';
button6.innerText = p3.button;
button6.onclick = function () { myFunction2(); };
div11.appendChild(button6);

// sisth card
const div13 = document.createElement('div');
div13.className = 'projects_web';

const h37 = document.createElement('h3');
h37.innerText = p4.title;
div13.appendChild(h37);
project_desktop.appendChild(div13);

const para7 = document.createElement('p');
para7.innerText = p4.description;
div13.appendChild(para7);

const div14 = document.createElement('div');
div14.className = 'sites12';
const tech7 = document.createElement('ul');
for (const i of p4.tech) {
  const li = document.createElement('li');
  li.innerText = i;
  tech7.appendChild(li);
}
div14.appendChild(tech7);
div13.appendChild(div14);
const button7 = document.createElement('button');
button7.type = 'button';
button7.className = 'button2';
button7.innerText = p4.button;
button7.onclick = function () { myFunction2(); };
div13.appendChild(button7);

// designing popup window
const popup_desktop = document.getElementById('popup_desktop');
popup_desktop.className = 'final';
const div15 = document.createElement('div');
div15.className = 'mult';
const div16 = document.createElement('div');
div16.className = 'head';
const h1 = document.createElement('h1');
h1.innerText = p5.title;
div16.appendChild(h1);
div15.appendChild(div16);
popup_desktop.appendChild(div15);

const img2 = document.createElement('img');
img2.src = 'images/Iconx.png';
img2.alt = 'cancel2';
img2.onclick = function () { myFunction3(); };
div16.appendChild(img2);

const tech8 = document.createElement('ul');
for (const i of p5.tech) {
  const li = document.createElement('li');
  li.innerText = i;
  tech8.appendChild(li);
}
div15.appendChild(tech8);

const div17 = document.createElement('div');
div17.className = 'grid';
const img3 = document.createElement('img');
img3.src = p5['image desktop'];
img3.className = 'snap';
img3.alt = 'alt';
div17.appendChild(img3);
div15.appendChild(div17);

const div18 = document.createElement('div');
div18.className = 'live';
const para8 = document.createElement('p');
para8.innerText = p5.description;
div18.appendChild(para8);
div17.appendChild(div18);

const div19 = document.createElement('div');
div19.className = 'but';
const img5 = document.createElement('img');
img5.src = 'images/power.png';
img5.alt = 'power';
img5.className = 'cat';
const button8 = document.createElement('button');
button8.type = 'button';
button8.className = 'button5';
button8.innerText = p5['live button'];
button8.appendChild(img5);
div19.appendChild(button8);
div18.appendChild(div19);

const img4 = document.createElement('img');
img4.src = 'images/catc.png';
img4.alt = 'github';
img4.className = 'cat';
const button9 = document.createElement('button');
button9.type = 'button';
button9.className = 'button7';
button9.innerText = p5['source button'];
button9.appendChild(img4);
div19.appendChild(button9);
