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
  {
    id: "JAseBBv3tUwC",
    title: "The Power of Six",
    authors: ["Pittacus Lore"],
    description:
      "The second book of the #1 New York Times bestselling I Am Number Four series! In the beginning, nine aliens left their home planet Lorien when it fell under attack by the evil Mogadorians. They scattered on Earth and went into hiding. They look like ordinary teenagers but have extraordinary powers. The Mogs have come for them. They killed Number One in Malaysia, Number Two in England, and Number Three in Kenya. They tried to get John Smith, Number Four, in Ohio—but they failed. Now John has joined forces with Number Six, and they are on the run. But they are not alone. Already John and Six have inspired Marina, Number Seven, who has been hiding in Spain. She’s been following the news of what’s happening, and she’s certain this is the sign she’s been waiting for. It’s time to come together. Michael Bay, director of Transformers, raved: “Number Four is a hero for this generation.” This epic story is perfect for fans of action-packed science fiction like The Fifth Wave series by Rick Yancey, The Maze Runner series by James Dashner, and Orson Scott Card’s Ender’s Game. The battle for Earth’s survival wages on. Don’t miss the rest of the series: #3: The Rise of Nine, #4: The Fall of Five, #5: The Revenge of Seven, #6: The Fate of Ten, and #7: United as One. Don’t miss the first book in the brand-new I Am Number Four spin-off series: Generation One.",
    image:
      "http://books.google.com/books/content?id=JAseBBv3tUwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=JAseBBv3tUwC&source=gbs_api",
  },
  {
    id: "0nGcngEACAAJ",
    title: "Tales from Grimm",
    authors: ["Wanda Gág", "Wilhelm Grimm", "Jacob Grimm"],
    description:
      'In "Tales from Grimm" readers will find Wanda Gag\'s touch on timeless stories like "Hansel and Gretel," "The Musicians of Bremen," "Rapunzel," and others.',
    image:
      "http://books.google.com/books/content?id=0nGcngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=0nGcngEACAAJ&dq=Grimm&hl=&source=gbs_api",
  },
  {
    id: "GfMSW5w3NTwC",
    title: "The Twilight Saga Complete Collection",
    authors: ["Stephenie Meyer"],
    description:
      'This stunning set, which includes Twilight, New Moon, Eclipse, Breaking Dawn, and The Short Second Life of Bree Tanner: An Eclipse Novella, is the perfect gift for fans of the bestselling vampire love story. Whether you`re Team Edward or Team Jacob, fall in love with the Twilight series all over again with this beautiful complete collection! Deeply romantic and extraordinarily suspenseful, The Twilight Saga captures the struggle between defying our instincts and satisfying our desires. Experience the entire breathtaking love story with this perfect gift for new and longtime fans alike. It`s here! #1 bestselling author Stephenie Meyer makes a triumphant return to the world of Twilight with the highly anticipated companion, Midnight Sun: the iconic love story of Bella and Edward told from the vampire`s point of view. "People do not want to just read Meyer`s books; they want to climb inside them and live there." -- Time "A literary phenomenon." -- The New York Times',
    image:
      "http://books.google.com/books/content?id=GfMSW5w3NTwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=GfMSW5w3NTwC&source=gbs_api",
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
