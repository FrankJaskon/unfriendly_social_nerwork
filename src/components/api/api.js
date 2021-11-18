import axios from 'axios';

const requestPattern = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'f8e1a50a-a804-47c5-b709-d1554c611319'}
});

export const postData = async (URL, body = {}) => {
    const {data} = await requestPattern.post(URL, body);
    return data;
}

export const getPage = async (URL) => {
    const {data} = await requestPattern.get(URL);
    return data;
}

export const putData = async (URL, body = {}) => {
    const {data} = await requestPattern.put(URL, body);
    return data;
}

export const profileAPI =  {
    updateUserImg: (URL, body) => {
        return putData(URL, body, {headers: {'Content-Type': 'multipart/form-data'}});
    }
}

export const usersAPI =  {
    postFollowing: (URL, body) => {
        return postData(URL, body);
    },
    deleteFollowing: async (URL) => {
        const data = await requestPattern.delete(URL);
        return data;
    }
}

export const loginAPI =  {
    getLoginData: (URL) => {
        return getPage(URL);
    },
    postLoginData: (URL, body) => {
        return postData(URL, body);
    },
    deleteLoginData: async (URL) => {
        const {data} = requestPattern.delete(URL);
        return data;
    }
}

// export const settingsAPI =  {
//     updateImg: (URL, body) => {
//         return putData(URL, body, {headers: {'Content-Type': 'multipart/form-data'}});
//     }
// }