var getinput = document.getElementById("search")
var getul = document.getElementById("member")
var getli = getul.getElementsByTagName("li") // HTML Collection
var getsortazm1btn = document.querySelector("#sortazm1")
var getsortzam1btn = document.querySelector("#sortzam1")
var getsortazm2btn = document.querySelector("#sortazm2")
var getsortzam2btn = document.querySelector("#sortzam2")


getsortazm1btn.addEventListener("click",sortingazm1)
getsortzam1btn.addEventListener("click",sortingzam1)
getsortazm2btn.addEventListener("click",srotingazm2)
getsortzam2btn.addEventListener("click",sortingzam2)


// For Sorting A~Z m1

	function sortingazm1(){

		let lisaz = [];

		for(var i = 0; i < getli.length; i++){
			lisaz.push(getli[i].querySelector("a").textContent)
		}

		// console.log(lis.sort())

		var azlis = lisaz.sort();
		// console.log(azlis)

		getul.innerHTML = "";

		azlis.forEach(function(azli){
			let newlisaz = document.createElement("li")
			let newlink = document.createElement("a")
			newlink.href = "javascript:void(0)"
			newlink.appendChild(document.createTextNode(azli))
			newlisaz.appendChild(newlink)
			// console.log(newlisaz)

			getul.appendChild(newlisaz)
		})

	}

// ---------------------------------------------------------------------------------------------------------

// For Sorting Z~A m2

	function sortingzam1(){

		let lisza = [];

		for(var i = 0; i < getli.length; i++){
			lisza.push(getli[i].getElementsByTagName("a")[0].textContent)
		}

		let zalis = lisza.sort().reverse();
		// console.log(zalis)

		getul.textContent = "";

		zalis.forEach(function(zali){
			let newlisza = document.createElement("li")
			let newlinks = document.createElement("a")
			newlinks.href = `javascript:void(0)`
			newlinks.appendChild(document.createTextNode(zali))
			newlisza.appendChild(newlinks)
			// console.log(newlisza)

			getul.appendChild(newlisza)
		})
	}

// ---------------------------------------------------------------------------------------------------------

// For Sorting A~Z m2

	function srotingazm2(){

		let shouldswitch = true;
		let switching = true;

		do{
			switching = false;

			var i = 0;
			for(i;i<getli.length-1;i++){
				shouldswitch = false
				if(getli[i].textContent.toLowerCase() > getli[i+1].textContent.toLowerCase()){
					shouldswitch = true;
					break;
				}
			}

			if(shouldswitch){

				getli[i].parentElement.insertBefore(getli[i+1],getli[i])
				switching = true;
			}

		}while(switching)

	}

// ---------------------------------------------------------------------------------------------------------

// For Sorting Z~A m2

	function sortingzam2(){


		var shouldswitch = true;
		var switching = true;

		while(switching){
			switching = false;

			var i = 0;
			for(i; i < getli.length-1; i++){
				shouldswitch = false;
				if(getli[i].textContent.toLowerCase() < getli[i+1].innerText.toLowerCase()){
					shouldswitch = true;
					break;
				}				
			}

			if(shouldswitch){
				getli[i].parentElement.insertBefore(getli[i+1],getli[i])
				switching = true;
			}

		}

	}

// ---------------------------------------------------------------------------------------------------------

// For Filter

getinput.addEventListener("keyup",filter)
	
function filter(){

	let inputfilter = this.value.toLowerCase()

	for(var x=0; x < getli.length; x++){
		let getavalue = getli[x].getElementsByTagName('a')[0].textContent.toLowerCase();

		if(getavalue.indexOf(inputfilter) > -1 ){
			getli[x].style.display = "";
		}else{
			getli[x].style.display = "none"
		}

	}

// ---------------------------------------------------------------------------------------------------------

}