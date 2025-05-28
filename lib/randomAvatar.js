const femaleAvatarIds = [
  2, 5, 9, 10, 16, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39,
  40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
];

const maleAvatarIds = Array.from({ length: 70 }, (_, i) => i + 1).filter(
  (id) => !femaleAvatarIds.includes(id)
);

export const maleNames = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Joseph",
  "Thomas",
  "Charles",
  "Christopher",
  "Daniel",
  "Matthew",
  "Anthony",
  "Mark",
  "Donald",
  "Steven",
  "Paul",
  "Andrew",
  "Joshua",
  "Kenneth",
  "Kevin",
  "Brian",
  "George",
  "Edward",
  "Ronald",
  "Timothy",
  "Jason",
  "Jeffrey",
  "Ryan",
  "Jacob",
  "Gary",
  "Nicholas",
  "Eric",
  "Jonathan",
];

export const femaleNames = [
  "Mary",
  "Patricia",
  "Linda",
  "Barbara",
  "Elizabeth",
  "Jennifer",
  "Maria",
  "Susan",
  "Margaret",
  "Dorothy",
  "Lisa",
  "Nancy",
  "Karen",
  "Betty",
  "Helen",
  "Sandra",
  "Donna",
  "Carol",
  "Ruth",
  "Sharon",
  "Michelle",
  "Laura",
  "Sarah",
  "Kimberly",
  "Deborah",
  "Jessica",
  "Shirley",
  "Cynthia",
  "Angela",
  "Melissa",
  "Brenda",
  "Amy",
  "Anna",
  "Rebecca",
  "Virginia",
];

const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const generateRandomProfile = () => {
  const gender = Math.random() < 0.5 ? "Male" : "Female";
  const name = gender === "Male" ? getRandomItem(maleNames) : getRandomItem(femaleNames);
  const avatarId =
    gender === "Male" ? getRandomItem(maleAvatarIds) : getRandomItem(femaleAvatarIds);

  return {
    name,
    gender,
    avatar: `https://i.pravatar.cc/150?img=${avatarId}`,
  };
};

export default generateRandomProfile;
