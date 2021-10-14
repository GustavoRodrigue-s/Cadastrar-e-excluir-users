(() => {
    const getArrayFromLocalStorage = () => {
        const getUsersItem = localStorage.getItem("users");

        return getUsersItem !== null ? JSON.parse(getUsersItem) : [];
    }

    //Delete users from local storage and remove the user row from the table.
    const deleteUsers = e => {
        if(e.target.tagName === "BUTTON") {
            e.currentTarget.remove();

            const arrayforUsers = getArrayFromLocalStorage();

            const currentId = Number(e.currentTarget.dataset.id);

            const newArrayForUsers = arrayforUsers.filter(({ id }) => currentId !== id);

            localStorage.setItem("users", JSON.stringify(newArrayForUsers));
        }
    }

    //Update the table with all users of local storage.
    const updateTable = (arry = getArrayFromLocalStorage()) => {
        const arrayforUsers = arry;
        
        const tbody_user = document.querySelector("#tbody-user");

        if(arrayforUsers !== []) {
            tbody_user.innerHTML = "";

            arrayforUsers.forEach(({ name, year, id }) => {
                tbody_user.innerHTML += `
                    <tr data-id="${id}">
                        <td>${name}</td>
                        <td>${year}</td>
                        <td><button class="button-delete">X</button></td>
                    </tr>`
            });
            
            document.querySelectorAll('#tbody-user > tr')
                .forEach(tableRow => tableRow.addEventListener('click', deleteUsers));
        }
    };
    updateTable();

    const formForSearchUser = document.querySelector('[data-js="user-search-form"]');

    //Filter searched users.
    formForSearchUser.addEventListener("submit", e => {
        e.preventDefault();

        const arrayforUsers = getArrayFromLocalStorage();

        const inputSearch = formForSearchUser.inputSearch.value.toLowerCase();

        const newFilteredArray = arrayforUsers.filter(({ name }) => name.includes(inputSearch));

        inputSearch !== '' && newFilteredArray.length !== 0
            ? updateTable(newFilteredArray)
            : alert('Não temos este usuário!');
    })

    const userRegistrationForm = document.querySelector('[data-js="user-registration-form"]');

    //Create a new object of user and add at the local storage!
    const createUserForLocalStorage = e => {
        e.preventDefault();
        
        const { inputUsername, inputAge } = userRegistrationForm;

        if(inputUsername.value !== '' && inputAge.value !== '') {
            const arrayforUsers = getArrayFromLocalStorage();

            //Return the new Obj. Design pattern Factory function
            const createUser = (name, year) => ({
                name: name.toLowerCase(),
                year,
                id: Math.floor(Math.random() * 1000)
            })

            const user = createUser(inputUsername.value, inputAge.value);

            arrayforUsers.push(user);
            localStorage.setItem("users", JSON.stringify(arrayforUsers));

            updateTable();
        }
    }

    userRegistrationForm.addEventListener('submit', createUserForLocalStorage);
})();