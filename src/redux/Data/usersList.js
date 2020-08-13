import avatar1 from './Avatars/avatar1.jpg';
import avatar2 from './Avatars/avatar2.jpg';
import avatar3 from './Avatars/avatar3.jpg';
import avatar4 from './Avatars/avatar4.jpg';

const usersList = [
  {
    id: "641006348",
    firstName: "Sasha",
    lastName: "Plotnikov",
    avatar: avatar1,
    location: {
      countryName: "Ukraine",
      cityName: "Kyiv"
    },
    followed: false,
    status: 'I want to be a good person...',
  },
  {
    id: "184760497",
    firstName: "Vitaliy",
    lastName: "Boom",
    avatar: avatar2,
    location: {
      countryName: "Russia",
      cityName: "Moscow"
    },
    followed: true,
    status: 'Professionals have standarts.',
  },
  {
    id: "084926135",
    firstName: "Ann",
    lastName: "Melnik",
    avatar: avatar3,
    location: {
      countryName: "Great Britain",
      cityName: "London"
    },
    followed: true,
    status: 'Does anyone what to hang out?',
  },
  {
    id: "987343516",
    firstName: "Victoria",
    lastName: "Kupisheva",
    avatar: avatar4,
    location: {
      countryName: "Belarus",
      cityName: "Minsk"
    },
    followed: false,
    status: 'Skeletons everywhere #.#',
  },
];

export default usersList;