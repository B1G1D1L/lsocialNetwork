let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'как дела'},
      {id: 2, message: 'Я русский'},
    ],
  },

  messagePage: {

    dialogData: [
      { id: 1, name: 'Ilya' },
      { id: 2, name: 'Vasily' },
      { id: 3, name: 'Yura' },
      { id: 4, name: 'Nataly' },
    ],

    messageData : [
      {id: 1, message: 'Hello world'},
      {id: 2, message: 'Жопа полная'},
    ],

  },

  friends: [
    {
      id: 1,
      name: 'Ilya',
      surname: 'Babay',
      age: 14,
      sity: 'Ishim',
      urlAvatar: 'https://c.wallhere.com/photos/1e/7d/1600x1200_px_action_adventure_alien_Aliens_Avatar_fantasy_fi-1635355.jpg!d',
    },
    {
      id: 2,
      name: 'Yura',
      surname: 'Imba',
      age: 99,
      sity: 'Kirow',
      urlAvatar: 'https://img3.goodfon.ru/wallpaper/nbig/4/99/neytiri-avatar.jpg',
    },
    {
      id: 3,
      name: 'Natalia',
      surname: 'Barabek',
      age: 21,
      sity: 'Moscow',
      urlAvatar: 'https://million-wallpapers.ru/wallpapers/5/51/505015039754505/avatar.jpg',
    },
    {
      id: 4,
      name: 'Vasily',
      surname: 'kozel',
      age: 51,
      sity: 'Moscow',
      urlAvatar: 'https://million-wallpapers.ru/wallpapers/5/51/505015039754505/avatar.jpg',
    },
    {
      id: 5,
      name: 'Vasily',
      surname: 'kozel',
      age: 51,
      sity: 'Moscow',
      urlAvatar: 'https://million-wallpapers.ru/wallpapers/5/51/505015039754505/avatar.jpg',
    },
    {
      id: 6,
      name: 'Vasily',
      surname: 'kozel',
      age: 51,
      sity: 'Moscow',
      urlAvatar: 'https://million-wallpapers.ru/wallpapers/5/51/505015039754505/avatar.jpg',
    },
    {
      id: 7,
      name: 'Vasily',
      surname: 'kozel',
      age: 51,
      sity: 'Moscow',
      urlAvatar: 'https://million-wallpapers.ru/wallpapers/5/51/505015039754505/avatar.jpg',
    },
  ],
};

export const addPost = text => {
  let post = {
    id: 4,
    message: text,
  };

  state.profilePage.posts.push(post);
}; 


export default state;