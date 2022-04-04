import { useState } from "react";

let currentUser = localStorage.getItem('user')
// localStorage.setItem('user', currentUser);
console.log(currentUser)

export function userOnline() {
    if (currentUser != null || currentUser != undefined)
        return true;
    else
        return false;
}

export default currentUser;