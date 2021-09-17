"use strict";

//  Выведите этот массив на экран в виде списка (тег ul - список должен быть сгенерирован с помощью Javascript).
// На странице должен находиться div с id="root", куда и нужно будет положить этот список (похожая задача была дана в модуле basic).
// Перед выводом обьекта на странице, нужно проверить его на корректность (в объекте должны содержаться все три свойства - author, name, price). Если какого-то из этих свойств нету, в консоли должна высветиться ошибка с указанием - какого свойства нету в обьекте.
// Те элементы массива, которые являются некорректными по условиям предыдущего пункта, не должны появиться на странице.
const books = [
	{ 
	  author: "Скотт Бэккер",
	  name: "Тьма, что приходит прежде",
	  price: 70 
	}, 
	{
	 author: "Скотт Бэккер",
	 name: "Воин-пророк",
	}, 
	{ 
	  name: "Тысячекратная мысль",
	  price: 70
	}, 
	{ 
	  author: "Скотт Бэккер",
	  name: "Нечестивый Консульт",
	  price: 70
	}, 
	{
	 author: "Дарья Донцова",
	 name: "Детектив на диете",
	 price: 40
	},
	{
	 author: "Дарья Донцова",
	 name: "Дед Снегур и Морозочка",
	}
 ];

 const properties = ["author", "name", "price"];

 function validateBook(book){
	if(typeof book !== "object"){
		throw new Error('Not object');
	}

	for (let i = 0; i < properties.length; i++){
		let attribute = properties[i];
		if(!book[attribute]){
			throw new Error(JSON.stringify(book) + " " + attribute + " is required.");
		}
	}
}

(function (){
	let list = "";
	for (let i = 0; i < books.length; i++){
		let currentBook = books[i];
		try {
			validateBook(currentBook);
			let li = `<li>Author: ${currentBook.author}, Name: ${currentBook.name}, Price: ${currentBook.price}</li>`;
			list += li;
		} catch(e){
			console.log(e.message)
		}
	}

	if(list.length){
		let ul = `<ul>${list}</ul>`
		let container = document.getElementById('root');
		if(container){
			container.innerHTML = ul;
		}
	}
})();
