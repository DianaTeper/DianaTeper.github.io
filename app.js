var productsCount=document.getElementById('products-count');
var addToCardButtons=document.querySelectorAll(".add-to-cart");
for (var i=0; i<addToCardButtons.length;i++)
{
		addToCardButtons[i].addEventListener("click", function(){
		var prevProductsCount = +(productsCount.textContent);
		prevProductsCount++;
		productsCount.textContent=prevProductsCount;
	});

}



var likeButtons = document.querySelectorAll(".button-like");
for (var i=0; i<likeButtons.length;i++)
{
	likeButtons[i].addEventListener("click", function(){
		if (this.classList.contains("bkwhite"))
		{
			this.classList.remove("bkwhite");
			this.classList.add("bkblue");
		}
		else if (this.classList.contains("bkblue"))
		{
			this.classList.remove("bkblue");
			this.classList.add("bkwhite");
		}
	});
}