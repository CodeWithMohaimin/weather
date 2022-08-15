


    const searchBtn = document.getElementById('searchBtn');
    const input = document.getElementById('input');
    const name = document.getElementById('name');
    const desc = document.getElementById('desc');
    const temp = document.getElementById('temp');
    const icon = document.getElementById('icon');
    


let listItem = document.getElementById('myUl')
let listItems = listItem.children;

    //list item
input.addEventListener('click', function () {
    if (listItem.style.display === 'block') {
        listItem.style.display = 'none'
        
    } else if (listItem.style.display = 'none') {
        listItem.style.display = 'block'
    }

    [...listItems].forEach(listElement => {
        listElement.addEventListener('click', function () {
            input.value = listElement.innerText

        })
    })


})

// const searchCity = () => {

//     let filter = input.value.toUpperCase()
    
//     let li = listItem.getElementsByTagName('li');

//     for (var i = 0; i < li.length; i++){
//         let a = li[i].getElementsByTagName('a')[0];

//         let textValue = a.textContent || a.innerHTML

//         if (textValue.toUpperCase().indexOf(filter) < -1) {
//             li[i].style.display = ''
//         } else {
//             li[i].style.display = 'none'
//         }
//     }

// }

searchBtn.addEventListener('click', function () {

        
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value +
                '&appid=01c2f892726aa9e0f3da2b6bf00c254b&units=metric')
            .then(res => res.json())
            .then(data => {
                let nameObject = data['name'];
                let tempObject = data['main']['temp'];
                let descObject = data['weather'][0]['description'];
                let imgIconObject = data['weather'][0]['icon'];

                name.innerText = nameObject;
                temp.innerText = tempObject;
                desc.innerText = descObject;

                //icon
                const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

                icon.setAttribute('src', url);
            })

            .catch(error => {
            alert('Name is not Valid')
        })
        // empty input value
    input.value = "";
    

    })



//practice



// const searchBtn = document.getElementById('searchBtn');
// const input = document.getElementById('input');
// const name = document.getElementById('name');
// const desc = document.getElementById('desc');
// const temp = document.getElementById('temp');
// const icon = document.getElementById('icon');
    


// let listItem = document.getElementById('myUl')
// let listItems = listItem.children;

// input.addEventListener('click', function () {
//     if (listItem.style.display === 'block') {
//         listItem.style.display = 'none'
        
//     } else if (listItem.style.display = 'none') {
//         listItem.style.display = 'block'
//     }

//     [...listItems].forEach(listElement => {
//         listElement.addEventListener('click', function () {
//             input.value = listElement.innerText

//         })
//     })
// })
// searchBtn.addEventListener('click', function () {
        
//         fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value +
//                 '&appid=01c2f892726aa9e0f3da2b6bf00c254b&units=metric')
//             .then(res => res.json())
//             .then(data => {
//                 let nameObject = data['name'];
//                 let tempObject = data['main']['temp'];
//                 let descObject = data['weather'][0]['description'];
//                 let imgIconObject = data['weather'][0]['icon'];

//                 name.innerText = nameObject;
//                 temp.innerText = tempObject;
//                 desc.innerText = descObject;
//                 const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

//                 icon.setAttribute('src', url);
//             })
//             .catch(error => {
//             alert('Name is not Valid')
//         })
//     input.value = "";
//     })
