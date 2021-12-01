import {getPage, usersAPI} from '../components/api/api';
import {setLoadingError} from './profile-reducer';

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
                    if (+action.payload.userId === +user.id) {
                        return {
                            ...user,
                            followed: action.payload.isFollowed || false
                        };
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                usersList: [...action.payload.usersList]
            };
        case DELETE_USERS:
            return {
                ...state,
                usersList: []
            };
        case SET_TOTAL_PAGES_COUNT:
        case SET_CURRENT_PAGE:
        case SET_PRELOADER:
            return {
                ...state,
                ...action.payload
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                usersFollowingInProgress: action.payload.isInProgress
                    ? [...state.usersFollowingInProgress, action.payload.userId]
                    : [state.usersFollowingInProgress.filter(id => id !== action.payload.userId)]
            }
        default:
            return state;
    }
}

export const toggleFollowingStatus = (userId, isFollowed) => ({type: TOGGLE_FOLLOWING_STATUS, payload: {userId, isFollowed}});
export const setUsers = (usersList) => ({type: SET_USERS, payload: {usersList}});
export const deleteUsers = () => ({type: DELETE_USERS});
export const setTotal = (totalPagesNumber) => ({type: SET_TOTAL_PAGES_COUNT, payload: {totalPagesNumber}});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, payload: {currentPage}});
export const setPreloadValue = (isFetching) => ({type: SET_PRELOADER, payload: {isFetching}});
export const toggleFollowingProgress = (value, userId) => (
    {type: TOGGLE_IS_FOLLOWING_PROGRESS, payload: {isInProgress: value, userId}});

export const showUsers= (page, usersNumber = initialState.usersNumber) => {
    return async (dispatch) => {
        dispatch(setPreloadValue(true));
        try {
            const {items, totalCount} = await getPage(`users?count=${usersNumber}&page=${page}`);
            dispatch(setPreloadValue(false));
            dispatch(setUsers(items));
            dispatch(setTotal(totalCount));
            dispatch(setCurrentPage(page));
        } catch({response: {status, data: {message}}}) {
            dispatch(setLoadingError(status, message));
        }
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