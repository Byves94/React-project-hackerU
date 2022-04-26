let currentUser = localStorage.getItem('user');

export function isUserOnline() {
    return !(currentUser === null || currentUser === undefined);
}

export function isUserAdmin() {
    if (currentUser === null)
        return false
    return JSON.parse(currentUser).admin;
}


export default currentUser;