class Buildings{
	constructor(name, price, income, ecologie, social){
		this.name = name;
		this.price = price;
		this.income = income;
		this.ecologie = ecologie;
		this.social = social;
	}
}


function allowDrop(ev) {
	ev.preventDefault();
}
  
function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
        ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
        var elem = document.getElementById(data);
	    ev.target.appendChild(elem);
        elem.setAttribute('draggable', false);
}