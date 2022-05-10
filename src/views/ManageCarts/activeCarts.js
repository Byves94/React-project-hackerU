let activeCarts = [];

let nameValues = [];

fetch("users/users.json", {
    method: "GET",
})
    .then((response) => response.json())
    .then((data) => {
        let userString;
        let user;
        let _activeCarts = [];
        let _nameValues = [];
        for (let i = 0; i < data.length; i++) {
            userString = `${data[i].userName}'s cart`;
            user = JSON.parse(localStorage.getItem(userString));
            if (user !== null) {
                user.Key = `${data[i].userName}`;
                _activeCarts.push(user);
                _nameValues.push(user.Key);
            }
        }
        localStorage.setItem('tempNames', JSON.stringify(_nameValues));
        localStorage.setItem('allCarts', JSON.stringify(_activeCarts));
    });
activeCarts = JSON.parse(localStorage.getItem('allCarts'));
nameValues = JSON.parse(localStorage.getItem('tempNames'));
for (let i = 0; i < activeCarts.length; i++) {
    activeCarts[i].Key = nameValues[i];
}


export default activeCarts;