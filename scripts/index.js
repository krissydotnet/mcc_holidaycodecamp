/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
$(document).ready(function(){
	$(".checkout").on("keyup", ".quantity", function(){
   
		var price = +$(".price").data("price");
    console.log($(".price").data("price"));
		var quantity = +$(this).val();
		$("#total").text("$" + price * quantity);
	})
})


const message = document.getElementById('message');
const brulee = document.getElementById('brulee');
brulee.addEventListener("click", () => {
  openPopup("brulee")
});

const spice= document.getElementById('spice');
spice.addEventListener("click", () => {
  openPopup("spice")
});

const creamcheese = document.getElementById('creamcheese');
creamcheese.addEventListener("click", () => {
  openPopup("creamcheese")
});

message.addEventListener("click", changeMessage);
function changeMessage() {
  alert('Warning! Most Delicious Cupcakes!');
}

function openPopup(cupcakeType) {
  console.log(cupcakeType);
  const popup = document.getElementById(`${cupcakeType}_popup`);
  popup.classList.toggle("show");
}

