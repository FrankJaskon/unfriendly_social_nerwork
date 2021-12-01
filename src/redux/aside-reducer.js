const initialState = {
    navbar: [
        {id: 0, title: 'Profile', url: '/profile'},
        // {id: 1, title: 'Messages', url: '/dialogs'},
        {id: 2, title: 'Users', url: '/users'},
        // {id: 3, title: 'News', url: '/news'},
        // {id: 4, title: 'Music', url: '/music'},
        {id: 5, title: 'Settings', url: '/settings'}
    ],
    friends: []
};

const asideReducer = (state = initialState, action) => {
    // const type = action.type;

    return state;
}

export default asideReducer;