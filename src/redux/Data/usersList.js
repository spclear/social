import avatar1 from './Avatars/avatar1.jpg';
import avatar2 from './Avatars/avatar2.jpg';
import avatar3 from './Avatars/avatar3.jpg';
import avatar4 from './Avatars/avatar4.jpg';

const usersList = [
  {
    id: "641006348",
    firstName: "Sasha",
    lastName: "Plotnikov",
    fullName: "Sasha Plotnikov",
    photos: {
      small: avatar1,
      large: avatar1,
    },
    location: {
      countryName: "Ukraine",
      cityName: "Kyiv"
    },
    followed: false,
    status: 'I want to be a good person...',
    contacts: {
      facebook: "facebook.com",
      website: "https://github.com/spclear",
      vk: "vk.com/",
      twitter: "https://twitter.com/@sdf",
      instagram: "instagra.com/sds",
      youtube: null,
      github: "github.com",
      mainLink: null
    },
    aboutMe: "Like playing the guitar, learning math and programming. ",
    lookingForAJob: true,
    lookingForAJobDescription: "Reactjs/native js or something related to those two",
  },
  {
    id: "184760497",
    firstName: "Vitaliy",
    lastName: "Boom",
    fullName: "Vitaliy Boom",
    photos: {
      small: avatar2,
      large: avatar2,
    },
    location: {
      countryName: "Russia",
      cityName: "Moscow"
    },
    followed: true,
    status: 'Professionals have standarts.',
    contacts: {
      facebook: "facebook.com",
      website: null,
      vk: "vk.com/",
      twitter: "https://twitter.com/@sdf",
      instagram: "instagra.com/sds",
      youtube: null,
      github: "github.com",
      mainLink: null
    },
    aboutMe: "Traveling around the world with my family and enjoying my life!",
    lookingForAJob: false,
    lookingForAJobDescription: null,
  },
  {
    id: "084926135",
    firstName: "Ann",
    lastName: "Melnik",
    fullName: "Ann Melnik",
    photos: {
      small: avatar3,
      large: avatar3,
    },
    location: {
      countryName: "Great Britain",
      cityName: "London"
    },
    followed: true,
    status: 'Does anyone what to hang out?',
    contacts: {
      facebook: "facebook.com",
      website: null,
      vk: "vk.com/",
      twitter: "https://twitter.com/@sdf",
      instagram: "instagra.com/sds",
      youtube: null,
      github: "github.com",
      mainLink: null
    },
    aboutMe: "I do like watching anime and drawing anime characters!",
    lookingForAJob: false,
    lookingForAJobDescription: null,
  },
  {
    id: "987343516",
    firstName: "Victoria",
    lastName: "Kupisheva",
    fullName: "Victoria Kupisheva",
    photos: {
      small: avatar4,
      large: avatar4,
    },
    location: {
      countryName: "Belarus",
      cityName: "Minsk"
    },
    followed: false,
    status: 'I Am Not Arguing, I’M Simply Explaining Why I Am Right.',
    contacts: {
      facebook: "facebook.com",
      website: null,
      vk: "vk.com/",
      twitter: "https://twitter.com/@sdf",
      instagram: "instagra.com/sds",
      youtube: null,
      github: "github.com",
      mainLink: null
    },
    aboutMe: "If you want to know something about me, feel free to ask me :)",
    lookingForAJob: true,
    lookingForAJobDescription: "Wanna be a part of a big team!",
  },
];

export default usersList;