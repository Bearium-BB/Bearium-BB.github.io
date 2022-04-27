const api = 'https://randomuser.me/api/?nat=CA&results=5&seed=019c38b4aa2f7bf1';
const opions = {
    method: 'Get',
    mode: 'cors'
};

const getUsers = async() => {
    try {
        const response = await fetch(api, opions)
        if (response.ok) {
            const data = await response.json()
            const friends = data.results;


            console.log(friends)
            friends.forEach(element => {
                document.getElementById('col3').innerHTML += `
                <div id="addPeople">
                <img src="${element.picture.thumbnail}" alt="">
                <div>
                    <p id='name1'>${element.name.first} ${element.name.last}</p>
                    <p id='city'>${element.location.city}</p>
                </div>
                <i class="fa-solid fa-circle-plus"></i>
            </div>
                `
            });
        }
    } catch (error) {
        console.log(error);
    }
}

getUsers();