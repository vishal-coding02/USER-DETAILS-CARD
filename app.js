const btn = document.querySelector("button");
const userData = document.querySelector(".userData");

let users = [
  {
    name: "Vishal",
    age: 21,
    gender: "Male",
    img: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
  },
  {
    name: "Shubham",
    age: 22,
    gender: "Male",
    img: "https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg",
  },
  {
    name: "Tashu",
    age: 23,
    gender: "Female",
    img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726272000&semt=ais_hybrid",
  },
  {
    name: "Mohit",
    age: 24,
    gender: "Male",
    img: "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
  },
  {
    name: "Pooja",
    age: 25,
    gender: "Female",
    img: "https://www.shutterstock.com/image-photo/young-asian-woman-professional-entrepreneur-600nw-2127014192.jpg",
  },
  {
    name: "Rohit",
    age: 26,
    gender: "Male",
    img: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726185600&semt=ais_hybrid",
  },
  {
    name: "Neha",
    age: 27,
    gender: "Female",
    img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-170195-1036623.jpg&fm=jpg",
  },
  {
    name: "Roshni",
    age: 28,
    gender: "Female",
    img: "https://img.freepik.com/free-photo/beautiful-female-with-lively-blue-eyes-well-shaped-lips-pure-skin-having-hair-bun-wearing-blue-casual-sweater-having-pleased-look-sensual-young-woman-with-appealing-face-looking_273609-7637.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726185600&semt=ais_hybrid",
  },
  {
    name: "Sumit",
    age: 29,
    gender: "Male",
    img: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  },
  {
    name: "Sunil",
    age: 30,
    gender: "Male",
    img: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  },
];

btn.addEventListener("click", () => {
  let inputSerach = document.querySelector("input").value;
  let findData = users.find((data) => {
    if (data.name == inputSerach) {
      return data;
    }
  });
  if (findData) {
    findUserData(findData);
  } else {
    userNotFound(inputSerach)
  }
});

function userNotFound(userCardError){
  userData.innerHTML = `
  <p class="userCardError">user ${userCardError} is not found </p>
  `
}

function findUserData(createUserCard) {
  userData.innerHTML = ""; // Yeh line .userData element ki innerHTML ko khali karta hai.

  let userDataCont = document.createElement("div");
  userDataCont.classList = "userDataCont";

  const userImage = document.createElement("img");
  userImage.src = createUserCard.img;
  userImage.alt = createUserCard.name;

  let userName = document.createElement("h2");
  userName.textContent = createUserCard.name;

  let userGender = document.createElement("h6");
  userGender.textContent = createUserCard.gender;

  let userAge = document.createElement("p");
  userAge.textContent = createUserCard.age;

  userDataCont.appendChild(userImage);
  userDataCont.appendChild(userName);
  userDataCont.appendChild(userGender);
  userDataCont.appendChild(userAge);

  userData.appendChild(userDataCont);
  console.log(userData);
}
