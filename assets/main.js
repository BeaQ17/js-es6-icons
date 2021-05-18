/*
Milestone 1:
Partendo dalla seguente struttura dati, mostriamo in pagina tutte le icone disponibili come da layout.
*/

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];







/*
Milestone 2:
Coloriamo le icone per tipo
*/

const colorsArray = icons.map((element) => {
    if(element.type == "animal"){
        element.color = "blue";
    } else if (element.type == "vegetable"){
        element.color = "orange";
    } else {
        element.color = "purple";
    }

    return element;
});
console.log(colorsArray);

colorsArray.forEach((icon) => {

	const {family, prefix, name, color} = icon
	document.getElementById("container").insertAdjacentHTML("beforeend",
	`
	<div class="icon">
		<i class="${family} ${prefix}${name}" style="color:${color}"></i>
		<p>${name}</p>
	</div>
	`);
});



/*
Milestone 3: 
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

const type = "user";
const filteredIcons = icons.filter((element) =>{
    if(element.type == type){
        return element;
    }
});
console.log(filteredIcons);