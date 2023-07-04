console.log('%c Výběr více prvků na stránce ', 'background:black; color:lime;');


const jmena = ['Anna', 'Eva', 'Jana', 'Jirka', 'Klotylda'];

// console.log( jmena[2] );
// console.log( jmena.length );


for (let i = 0; i < jmena.length; i++) {
	console.log( jmena[i] );
}

jmena.forEach(
	(jmeno) => {
		console.log(`Ahoj, ja jsem ${jmeno}`);
	}
);



const odstavec = document.querySelector('p');
odstavec.style.color = 'red';
odstavec.textContent = 'Toto je odstavec';

console.log(odstavec);


const tlacitko = document.querySelector('button');

tlacitko.addEventListener(
	'click',
	() => {
		console.log('klik na tlacitko');
	}
);


const texty = document.querySelectorAll('p');
console.log( texty );

for (let i = 0; i < texty.length; i++) {
	texty[i].style.color = 'dodgerblue';
}

texty.forEach( (text) => { text.style.color = 'orange'; } );
