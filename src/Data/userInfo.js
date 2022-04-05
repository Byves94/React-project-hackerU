let currentUser = localStorage.getItem('user');

export function isUserOnline() {
    return !(currentUser === null || currentUser === undefined);
}


export default currentUser;