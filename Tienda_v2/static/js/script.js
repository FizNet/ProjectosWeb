import { CATALOGO } from "./datos.js";

const TrendingBox = document.getElementById("trending-box");

CATALOGO.forEach((smartphone) => {
  const main_box = document.createElement("div");
  const props_box = document.createElement("div");
  const phone_name_box = document.createElement("div");

  const phone_img = document.createElement("img");
  const phone_name = document.createElement("p");
  const phone_brand = document.createElement("p");
  const phone_price = document.createElement("p");
  
  phone_price.textContent = `$${smartphone["precio"]}`;
  phone_name.textContent = smartphone["modelo"];
  phone_brand.textContent = smartphone["marca"];
  phone_img.src = smartphone["img"];
  // phone_img.width = 200;
  // phone_img.height = 200;

  phone_name_box.appendChild(phone_brand);
  phone_name_box.appendChild(phone_name);

  props_box.appendChild(phone_name_box);
  props_box.appendChild(phone_price);

  main_box.appendChild(props_box);
  main_box.appendChild(phone_img);

  phone_brand.setAttribute("id", "phone-brand");
  phone_name.setAttribute("id", "phone-name");
  phone_price.setAttribute("id", "phone-price");
  phone_name_box.setAttribute("id", "phone-name-box");

  props_box.setAttribute("id", "phone-props-box");
  main_box.setAttribute("class", "phone-box");

  TrendingBox.appendChild(main_box);
});