const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
db.connect();

const bookSeed = [
  {
    id: "O53jCwAAQBAJ",
    title: "The Dead Zone",
    authors: ["Stephen King"],
    description:
      'A number-one national best seller about a man who wakes up from a five-year coma able to see people\'s futures and the terrible fate awaiting mankind in The Dead Zone - a "compulsive page-turner" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people\'s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a "faultlessly paced...continuously engrossing" (Los Angeles Times) novel of second sight.',
    image:
      "http://books.google.com/books/content?id=O53jCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=O53jCwAAQBAJ&dq=The+Dead+Zone&hl=&source=gbs_api",
  },
  {
    id: "f2ieoAEACAAJ",
    title: "The Hunger Games",
    authors: ["Suzanne Collins"],
    description:
    "First in the ground-breaking HUNGER GAMES trilogy. Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image:
      "http://books.google.com/books/content?id=f2ieoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=f2ieoAEACAAJ&dq=HungerGames&hl=&source=gbs_api",
  },
  {
    id: "J-YwDxwV9Q8C",
    title: "I Am Number Four",
    authors: ["Pittacus Lore"],
    description:
      "The first book of the #1 New York Times bestselling series and the inspiration for the hit movie from Dreamworks! John Smith seems like an ordinary teenager, living a normal life with his guardian Henri in Paradise, Ohio. But for John, keeping a low profile is essential, because he is not an ordinary teenager. He’s an alien from the planet Lorien, and he’s on the run. A group of evil aliens from the planet Mogadore, who destroyed his world, are hunting anyone who escaped. Nine Loric children were sent to Earth to live in hiding until they grew up and developed their Legacies, powers that would help them fight back—and help them save us. Three of them are now dead. John is Number Four, and he knows he’s next…. Michael Bay, director of Transformers, raved: “Number Four is a hero for this generation.” This epic story is perfect for fans of action-packed science fiction like The 5th Wave series by Rick Yancey, The Maze Runner series by James Dashner, and Orson Scott Card’s Ender’s Game. The battle for Earth’s survival wages on. Read all of the books: #2: The Power of Six, #3: The Rise of Nine, #4: The Fall of Five, #5: The Revenge of Seven, #6: The Fate of Ten, and #7: United as One. Don’t miss the first book in the brand-new I Am Number Four spin-off series: Generation One.",
    image:
      "http://books.google.com/books/content?id=J-YwDxwV9Q8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=J-YwDxwV9Q8C&source=gbs_api",
  },
];

db.Book.deleteMany({})
  .then(() => db.Book.insertMany(bookSeed))
  .then((data) => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
