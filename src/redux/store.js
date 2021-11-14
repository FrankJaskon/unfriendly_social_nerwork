import asideReducer from './aside-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

const store = {
    _state: {
        profile: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: ''
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 20088,
            photos: {
                small: '',
                large: ''
            },
            postsData: [
                {id: 0, message: `Hello, retard. You aren't welcome here.`, likesCount: 12},
                {id: 1, message: `Get out of here!`, likesCount: 10},
                {id: 2, message: `Get out of here!`, likesCount: 101},
                {id: 3, message: `Get out of here!`, likesCount: 120},
                {id: 4, message: `I'm so happy to be here`, likesCount: 11}
            ],
            placeholderText: 'Enter your message',
            newPostBody: ''
        },
        dialogs: {
            dialogsData: [
                {id: 0, name: 'Irene'},
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'Mark'},
                {id: 3, name: 'Helena'}
            ],
            messagesData: [
                {id: 0, name: 'Irene', message: `Hello, retat of here!Hello, retard. You aren't welcome here. Get out of here!`},
                {id: 1, name: 'You', message: `But I'm so happy to be here`},
                {id: 2, name: 'Irene', message: 'Mark'},
                {id: 3, name: 'You', message: 'IreneIreneIreneIrene'},
                {id: 4, name: 'Irene', message: 'Dmitriy'},
                {id: 5, name: 'You', message: 'Mark'},
                {id: 6, name: 'Irene', message: 'Helena'}
            ],
            placeholderText: 'Hello',
            newMessageBody: ''
        },
        aside: {
            navbar: [
                {id: 0, title: 'Profile', url: '/profile'},
                {id: 1, title: 'Messages', url: '/dialogs'},
                {id: 2, title: 'Users', url: '/users'},
                {id: 3, title: 'News', url: '/news'},
                {id: 4, title: 'Music', url: '/music'},
                {id: 5, title: 'Settings', url: '/settings'}
            ],
            friends: [
                {id: 0, name: 'Irene'},
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'Mark'},
                {id: 3, name: 'Helena'}
            ]
        },
        users: {
            usersList: [
                {id: 0, fullname: 'Igor', age: 20, location: {country: 'Roman', city: 'Rome'}, status: 'Doing some businessDoing some business.some business.s', followed: true},
                {id: 1, fullname: 'NoIgor', age: 20, location: {country: 'Roman', city: 'Rome'}, status: 'Doing some business', followed: true},
                {id: 2, fullname: 'YesIgor', age: 20, location: {country: 'Roman', city: 'Rome'}, status: 'Doing some business', followed: true},
                {id: 3, fullname: 'Igor?', age: 20, location: {country: 'Roman', city: 'Rome'}, status: 'Doing some business', followed: false},
                {id: 4, fullname: 'IgorNo!', age: 20, location: {country: 'Roman', city: 'Rome'}, status: 'Doing some business', followed: true},
            ]
        }
    },
    _callSubscriber() {},
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.aside = asideReducer(this._state.aside, action);

        this._callSubscriber(this._state);
    }
}

export default store;