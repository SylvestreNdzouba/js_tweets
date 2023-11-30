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

//Je crée une boucle qui va parcourir tous les tweets grâce à la longueur du tableau tweets en utilisants tweets.length
//Et je mets tout simplement à l'intérieur de la boucle le code précédent en remplaçant l'index 0 par i

for (let i = 0; i < tweets.length; i++) {
  const baliseLi = document.createElement("li");
  baliseLi.classList.add("tweet");
  baliseUl.appendChild(baliseLi);

  const baliseP = document.createElement("p");
  baliseP.classList.add("content");
  baliseP.textContent = tweets[i].content;
  baliseLi.appendChild(baliseP);

  const baliseP2 = document.createElement("p");
  baliseP2.classList.add("likes");
  baliseP2.textContent = tweets[i].likes;
  baliseLi.appendChild(baliseP2);

  const baliseP3 = document.createElement("p");
  baliseP3.classList.add("author");
  baliseP3.textContent = tweets[i].author;
  baliseLi.appendChild(baliseP3);
}
