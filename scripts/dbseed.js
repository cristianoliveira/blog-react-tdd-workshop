const seed = {
  "posts": [
    {
      "id": 1,
      "image": "./images/saopaulo.jpg",
      "title": "São Paulo - Brazil",
      "body": "São Paulo, Brazil’s vibrant financial center, is among the world's most populous cities, with numerous cultural institutions and a rich architectural tradition. Its iconic buildings range from its neo-Gothic cathedral and the 1929 Martinelli skyscraper to modernist architect Oscar Niemeyer’s curvy Edifício Copan. The colonial-style Pátio do Colégio church marks where Jesuit priests founded the city in 1554.",
      "author": "Felipe"
    },
    {
      "id": 2,
      "image": "./images/berlin.jpg",
      "title": "Berlin - Germany",
      "body": "Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city's also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.",
      "author": "Tobias"
    },
    {
      "id": 3,
      "image": "./images/sofia.jpg",
      "title": "Sofia - Bulgaria",
      "body": "Sofia is the capital of the Balkan nation of Bulgaria. It’s in the west of the country, below Vitosha Mountain. The city’s landmarks reflect more than 2,000 years of history, including Greek, Roman, Ottoman and Soviet occupation. Medieval Boyana Church has 13th-century frescoes. Built by the Romans in the 4th century, St. George Rotunda Church has medieval and Ottoman decoration dating to the 10th century.",
      "author": "Ivan"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "Sao paulo is cool.",
      "postId": 1
    },
    {
      "id": 2,
      "body": "Berlin is awesome!",
      "postId": 2
    },
    {
      "id": 3,
      "body": "Sofia is amazing!",
      "postId": 3
    }
  ],
  "profile": {
    "name": "typicode"
  }
};

console.log(JSON.stringify(seed));
