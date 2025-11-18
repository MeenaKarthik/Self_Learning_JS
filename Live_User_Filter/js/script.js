//ul
const result = document.getElementById('result');
//input
const filter = document.getElementById('filter');
//to put the data that we fetch
const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value));


async function getData(){
    //response from fetch request
    //fetch returns a promise
    const res = await fetch('https://randomuser.me/api?results=50');

    //to get data
    const data = await res.json();
    //console.log(data);

    //clear results
    result.innerHTML = '';

    data.results.forEach(user => {
        console.log(user);

        //construct a list item for each user
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
           <img src="${user.picture.large}" alt="${user.name.
           first}">
           <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.
                country}</p>
           </div>
        `
        //put the li into result (html)
        //report li into ul
        result.appendChild(li);
    });
}

function filterData(searchTerm){
    console.log(searchTerm);

    //take the array of users and loop through each item
    listItems.forEach(item => {
        //if item matches with the user
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            //remove any class of hide
            item.classList.remove('hide');
        } 
        //if it doesn't match
        else {
            item.classList.add('hide');
        }
    })

}