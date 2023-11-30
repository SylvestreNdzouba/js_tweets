const tweets = [
  {
    id: 1,
    content: "Lorem ipsum",
    author: "Ada",
    likes: 10,
  },
  {
    id: 2,
    content: "Dolor sit amet",
    author: "Steve",
    likes: 8,
  },
  {
    id: 3,
    content: "Consectetur adipiscing elit",
    author: "Grace",
    likes: 12,
  },
  {
    id: 4,
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    author: "Alan",
    likes: 2,
  },
  {
    id: 5,
    content: "Ut enim ad minim veniam",
    author: "Ada",
    likes: 20,
  },
];

//Je récupère la balise ul grâce à son id
const baliseUl = document.getElementById("tweets-list");

//Je crée une balise li
const baliseLi = document.createElement("li");
//Je lui ajoute la classe tweet
baliseLi.classList.add("tweet");
//Et je l'affiche dans la balise ul
baliseUl.appendChild(baliseLi);

//Je crée une balise p
const baliseP = document.createElement("p");
//Je lui ajoute la classe content
baliseP.classList.add("content");
//Il prend comme texte le contenu du premier tweet grâce à sa clé content et l'index 0
baliseP.textContent = tweets[0].content;
//Et je l'affiche dans la balise li
baliseLi.appendChild(baliseP);

//Je fais la même chose pour les 2 balises p suivantes
const baliseP2 = document.createElement("p");
baliseP2.classList.add("likes");
baliseP2.textContent = tweets[0].likes;
baliseLi.appendChild(baliseP2);

const baliseP3 = document.createElement("p");
baliseP3.classList.add("author");
baliseP3.textContent = tweets[0].author;
baliseLi.appendChild(baliseP3);
