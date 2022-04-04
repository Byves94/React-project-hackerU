import { useState } from "react";

let currentUser = localStorage.getItem('user')

export function userOnline() {
    if (currentUser != null || currentUser != undefined)
        return true;
    else
        return false;
}

export default currentUser;