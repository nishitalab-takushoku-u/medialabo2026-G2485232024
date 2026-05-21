let i = document.querySelector('img#bluemoon');
undefined
i.setAttribute('src', 'bluemoon.jpg');
undefined
let a =　document.createElement('a');
undefined
a.textContent = '拓殖大学HP';
"拓殖大学HP"
a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
undefined
let p = document.querySelector('p#takudai');
undefined
p.insertAdjacentElement('afterend', a);
<a href="https://www.takushoku-u.ac.jp">

u = document.createElement('ul');


l = document.createElement('li');


l.textContent = '赤';
"赤"
u.insertAdjacentElement('beforeend', l);
<li>

l = document.createElement('li');
<li>

l.textContent = '緑';
"緑"
u.insertAdjacentElement('beforeend', l);
<li>

l = document.createElement('li');
<li>

l.textContent = '青';
"青"
u.insertAdjacentElement('beforeend', l);
<li>

p = document.querySelector('p#primary');
<p id="primary">

p.insertAdjacentElement('afterend', u);
<ul>

u = document.querySelector('ul#kassen');
<ul id="kassen">

u.remove();
undefined

​

