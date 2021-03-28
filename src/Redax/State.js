let store = {

  _state: {
    profilePage: {
      posts: [
        {
          id: 1, 
          message: 'как дела', 
          name: 'Ilta',
          urlAvatar: 'https://c.wallhere.com/photos/1e/7d/1600x1200_px_action_adventure_alien_Aliens_Avatar_fantasy_fi-1635355.jpg!d'
        },
        {
          id: 2, 
          message: 'Я русский', 
          name: 'Ilta',
          urlAvatar: 'https://img3.goodfon.ru/wallpaper/nbig/4/99/neytiri-avatar.jpg'
        },
      ],
      newPostText: '',
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
  
      newMessageText: '',
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
        urlAvatar: 'https://i.artfile.ru/1772x1182_621388_[www.ArtFile.ru].jpg',
      },
      {
        id: 5,
        name: 'Vasily',
        surname: 'kozel',
        age: 51,
        sity: 'Moscow',
        urlAvatar: 'https://i.ytimg.com/vi/CHNZGlNMcfA/maxresdefault.jpg',
      },
      {
        id: 6,
        name: 'Vasily',
        surname: 'kozel',
        age: 51,
        sity: 'Moscow',
        urlAvatar: 'https://avatars.mds.yandex.net/get-zen_doc/2420191/pub_5ed52bb28e01ac7640649d2c_5ed52d618a58f81e15b685d2/scale_1200',
      },
      {
        id: 7,
        name: 'Vasily',
        surname: 'kozel',
        age: 51,
        sity: 'Moscow',
        urlAvatar: 'https://artfiles.alphacoders.com/972/97278.jpg',
      },
    ],
  },

  getState () {
    return this._state;
  },

  rerenderEntireTree () {
    console.log('lol');
  },

  addPost () {
    let post = {
      id: 4,
      name: ' ',
      message: this.state.profilePage.newPostText,
    };
  
    this.state.profilePage.posts.push(post);
    this.state.profilePage.newPostText = '';
    this.store.rerenderEntireTree(this._state);
  },

  updateTextPost (text) {
    this.state.profilePage.newPostText = text;
    this.store.rerenderEntireTree();
  },

  updateTextMessage (text) {
    this.state.messagePage.newMessageText = text;
    this.store.rerenderEntireTree();
  },

  addMessage () {
    let message = {
      id: 4,
      message: this.state.messagePage.newMessageText,
    };
  
    this.state.messagePage.messageData.push(message);
    this.state.messagePage.newMessageText = '';
    this.store.rerenderEntireTree();
  },

  subscribe (observer) {
    this.rerenderEntireTree = observer;
  },

};

export default store;
window.store = store;