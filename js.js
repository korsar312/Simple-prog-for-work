let mount = document.getElementById('worm')
let dotArea = document.getElementById('dot')
let znakArea = document.getElementById('znak')
let roolArea = document.getElementById('rool')
let mountArea = []
let finishArr = [] 
let roolArr = [] 

function toGo(num){
	if(num=='1'){
		mountArea = mount.value.split('\n')
		for(let n in mountArea){
			if(mountArea[n].length == 0){continue}
			warm(n)
		}
	}
	else if(num=='2'||num=='3'){
		if(num=='2'){toLower();}
		mountArea = mount.value.split('\n')
		for(let n in mountArea){
			if(mountArea[n].length == 0){continue}
			toCRUpper(n)
		}
	}
	else{return}

	finishArr = finishArr.join('\n')
	mount.value = finishArr
	finishArr = []
}

function delDot(){
	let mountText = mount.value.split('');
	let znak = znakArea.value;

	for (let i = 0; i < mountText.length; i++){
		function qwe(){
			if(znak.length > 1){
				let u = ''
				let iter = 0
				for(let y in znak){
					u += mountText[i+iter]
					iter += 1
				}
				return u
			}
			else {
				return mountText[i]
			}
		}

		if(qwe() == znak){
			mountText.splice(i,znak.length)
			i = i - 1
		}
	};

	mountText = mountText.join('')
	mount.value = mountText
}

function warm(n){
	let mountText = mountArea[n].split('');
	let znak = znakArea.value;
	let dot = dotArea.value.split(',');
	let numberIterat = 0;

	for (let i in dot){
		mountText.splice((dot[i]-0) + numberIterat, 0, znak);
		numberIterat++;
	};

	finishArr.push(mountText.join(''));
	numberIterat = 0;
}

function toUpper(){
	mount.value = mount.value.toUpperCase();
}

function toCRUpper(n){
	let mountText = mountArea[n].split('');
	mountText = (mountText[0].toUpperCase()) + (mountText.slice(1).join(''));
	finishArr.push(mountText);
}

function toLower(){
	mount.value = mount.value.toLowerCase();
}

function selectUp(){
	if(window.getSelection){
		let text = window.getSelection().toString()
		mount.value = text
	}
}

function zagotovki(n){
	let mountText = mount.value
	let start = 0
	let stop = 0
	if(n == 1){
		while((mount.value.toUpperCase()).includes('ЦИВР', start)){
			start = (mount.value.toUpperCase()).indexOf('ЦИВР', start)
			stop = start + 4

			if(mount.value[stop] == '.' && mount.value[stop+7] == '.'){
				start += 1
				continue
			}
			else{
				if(!(mount.value[stop] == '.')){
					mountArea = mountText.split('')
					mountArea.splice(stop, 0, '.')
					mountText = mountArea.join('')
					mount.value = mountText
				}
				if(!(mount.value[stop+7] == '.')){
					mountArea = mountText.split('')
					mountArea.splice(stop+7, 0, '.')
					mountText = mountArea.join('')
					mount.value = mountText
				}
			}
		}
	}
}
