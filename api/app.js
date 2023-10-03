async function apitester() {
  const response = await fetch("https://dummyjson.com/products/1");
  const data = await response.json();
  console.log(data);

  //pegar o titulo do produto e colocar em uma div
  const title = document.createElement("h1");
  title.innerHTML = data.title;
  document.body.appendChild(title);
  //pegar a imagem do produto e colocar em uma div
  const img = document.createElement("img");
  img.src = data.images[0];
  document.body.appendChild(img);
  //pegar o preço do produto e colocar em uma div
  const price = document.createElement("h2");
  price.innerHTML = "Preço=";
  price.innerHTML += data.price;
  document.body.appendChild(price);
  //pegar a descrição do produto e colocar em uma div
  const description = document.createElement("h3");
  description.innerHTML = "Descrição=";
  description.innerHTML += data.description;
  document.body.appendChild(description);
  //pegar o link do produto e colocar em uma div
  const link = document.createElement("a");
  link.innerHTML = "Link=";
  link.innerHTML += data.link;
  document.body.appendChild(link);
}
apitester();
