/* eslint no-undef: "error" */

const myFunction = () => {
  document.getElementById('drop-menu').classList.add('show');
  document.body.classList.add('overflow');
};

const myFunction1 = () => {
  document.getElementById('drop-menu').classList.remove('show');
  document.body.classList.remove('overflow');
};

const myFunction2 = () => {
  document.getElementById('popup_desktop').classList.add('view');
  window.scrollTo(0, 0);
  document.body.classList.add('overflow');
  document.getElementById('sect').classList.add('blur');
};

const myFunction3 = () => {
  document.getElementById('popup_desktop').classList.remove('view');
  window.scrollTo(0, 1000);
  document.body.classList.remove('overflow');
  document.getElementById('sect').classList.remove('blur');
};

const myFunction4 = () => {
  document.getElementById('popup_mobile').classList.add('see');
  window.scrollTo(0, 0);
  document.body.classList.add('overflow');
  document.getElementById('sect').classList.add('blur');
};

const myFunction5 = () => {
  document.getElementById('popup_mobile').classList.remove('see');
  window.scrollTo(0, 1000);
  document.body.classList.remove('overflow');
  document.getElementById('sect').classList.remove('blur');
};

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
    class: "hide"
  },

  {
    title: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    'link to live version': '#3',
    'link to source': '#4',
    class: "projects_art"
  },

  {
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    'link to live version': '#5',
    'link to source': '#6',
    class: "projects_data"
  },

  {
    title: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    'link to live version': '#7',
    'link to source': '#8',
    class: "projects_web"
  },

  {
    title: 'Keeping track of hundreds of components website',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    tech: ['html', 'Bootstrap', 'Ruby on rails'],
    'live button': 'See live',
    'source button': 'See Source',
    'image desktop': 'images/Snapshoot.png',
    class: "hide"
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
   <h3>${p.title}</h3>
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

for (let j = 0; j < 2; j++) {
  for (let i = 3; i > 0; i--) {
    p = projects_container[i];
    pro.insertAdjacentHTML('afterend', renderProject(p));
  }  
}

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

// rendering desktop projects
function desktopProject(p) {
  const projectDesktop = `
  <div class=${p.class}>
  <h3>${p.title}</h3>
  <p>${p.description}</p>
  <div class="sites12">
    <ul>
      <li>${p.tech[0]}</li>
      <li>${p.tech[1]}</li>
      <li>${p.tech[2]}</li>
    </ul>
  </div>
  <button onclick="myFunction2()" type="button" class="button2">${p.button}</button>
</div>
  `;
  return projectDesktop;
}
const project_desktop = document.getElementById('project_desktop');


for (let j = 0; j < 2; j++) {
  for (let i = 1; i < 4; i++) {
    p = projects_container[i];
    project_desktop.insertAdjacentHTML('afterend', desktopProject(p));
  }
}

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
