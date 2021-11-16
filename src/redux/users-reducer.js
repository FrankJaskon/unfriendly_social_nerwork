import {getPage, usersAPI} from '../components/api/api';

const TOGGLE_FOLLOWING_STATUS = 'unfriendly-network/users/TOGGLE-FOLLOWING-STATUS',
      SET_USERS = 'unfriendly-network/users/SET-USERS',
      DELETE_USERS = 'unfriendly-network/users/DELETE-USERS',
      SET_TOTAL_PAGES_COUNT = 'unfriendly-network/users/SET-TOTAL-PAGES-COUNT',
      SET_CURRENT_PAGE = 'unfriendly-network/users/SET-CURRENT-PAGE',
      SET_PRELOADER = 'unfriendly-network/users/SET-PRELOADER',
      TOGGLE_IS_FOLLOWING_PROGRESS = 'unfriendly-network/users/TOGGLE-IS-FOLLOWING-PROGRESS';

const initialState = {
    usersList: [],
    usersNumber: 50,
    totalPagesNumber: null,
    isFetching: false,
    usersFollowingInProgress: [],
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    const type = action.type;

    switch(type) {
        case TOGGLE_FOLLOWING_STATUS:
            return {
                ...state,
                usersList: state.usersList.map(user => {
                    if (+action.userId === +user.id) {
                        return {
                            ...user,
                            followed: action.isFollowed ? action.isFollowed : false
                        };
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                usersList: [...action.users]
            };
        case DELETE_USERS:
            return {
                ...state,
                usersList: []
            };
        case SET_TOTAL_PAGES_COUNT:
            return {
                ...state,
                totalPagesNumber: action.totalCount,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                usersFollowingInProgress:
                    action.isInProgress
                    ? [...state.usersFollowingInProgress, action.userId]
                    : [state.usersFollowingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state;
    }
}

export const toggleFollowingStatus = (userId, isFollowed) => ({type: TOGGLE_FOLLOWING_STATUS, userId, isFollowed});
export const setUsers = (users) => ({type: SET_USERS, users});
export const deleteUsers = () => ({type: DELETE_USERS});
export const setTotal = (total) => ({type: SET_TOTAL_PAGES_COUNT, totalCount: total});
export const setCurrentPage = (value) => ({type: SET_CURRENT_PAGE, currentPage: value});
export const setPreloadValue = (value) => ({type: SET_PRELOADER, isFetching: value});
export const toggleFollowingProgress = (value, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isInProgress: value, userId});

export const showUsers= (page, usersNumber = initialState.usersNumber) => {
    return async (dispatch) => {
        dispatch(setPreloadValue(true));
        const {items, totalCount} = await getPage(`users?count=${usersNumber}&page=${page}`);
        dispatch(setPreloadValue(false));
        dispatch(setUsers(items));
        dispatch(setTotal(totalCount));
        dispatch(setCurrentPage(page));
    };
}

export const clearUserPage = () => {
    return (dispatch) => {
        dispatch(deleteUsers());
        dispatch(setCurrentPage(1));
        dispatch(setTotal(0));
    }
}

export const toggleSubscription = (userId, isFollowed) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        const {resultCode} = isFollowed
            ? await usersAPI.postFollowing(`follow/${userId}`)
            : await usersAPI.deleteFollowing(`follow/${userId}`);
        dispatch(toggleFollowingProgress(false, userId));
        if (!resultCode) dispatch(toggleFollowingStatus(userId, isFollowed));
    };
}

export default usersReducer;