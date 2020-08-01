import usersList from './usersList'

let friends = [
  { userId: "184760497" },
  { userId: "987343516" },
  { userId: "084926135" },
];

const list = friends.map(item => {
  for (let i = 0; i < usersList.length; i++) {
    if (item.userId == usersList[i].ID) {
      item.avatar = usersList[i].avatar;
      item.name = usersList[i].firstName;
      break;
    }
  }
})

export default friends;