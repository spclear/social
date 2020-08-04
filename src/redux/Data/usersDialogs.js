import usersList from './usersList';

let usersDialogs = [
  {
    userId: "184760497",
    messagesHistory: [
      {
        id: "184760497",
        time: 1,
        text: 'Message1',
      },
      {
        id: "641006348",
        time: 2,
        text: 'Message2',
      },
      {
        id: "184760497",
        time: 3,
        text: 'Message3',
      },
      {
        id: "184760497",
        time: 4,
        text: 'Wow, the last from Vitaliy. He\'s da best!!',
      }
    ]
  },
  {
    userId: "084926135",
    messagesHistory: [
      {
        id: "084926135",
        time: 1,
        text: 'Message112',
      },
      {
        id: "641006348",
        time: 2,
        text: 'Message223',
      },
      {
        id: "641006348",
        time: 3,
        text: 'Message334',
      },
      {
        id: "084926135",
        time: 4,
        text: 'This one is the last from Ann. Actually truth',
      }
    ]
  },
  {
    userId: "987343516",
    messagesHistory: [
      {
        id: "987343516",
        time: 1,
        text: 'Message1',
      },
      {
        id: "641006348",
        time: 2,
        text: 'Message2',
      },
      {
        id: "987343516",
        time: 3,
        text: 'Message3',
      },
      {
        id: "987343516",
        time: 4,
        text: 'Last message from Victoria!',
      }
    ]
  },
];

const dialogs = usersDialogs.forEach(item => {
  for (let i = 0; i < usersList.length; i++) {
    if (item.userId == usersList[i].ID) {
      item.avatar = usersList[i].avatar;
      item.name = usersList[i].firstName;
      break;
    }
  }
});


export default usersDialogs;