let container = document.getElementById('container');


const getGiphys = () => {
    fetch(`http://api.giphy.com/v1/gifs/trending?&api_key=dc6zaTOxFJmzC`)
    
    .then(result => {
        return result.json();
    })
    .then(data => {
        let gifs = data;
        console.log(data);

        container.innerHTML =  gifs.data.map(gif => {
        
            return `<ul>
               <li> <img src=${gif.images.original.url}> </li>
            </ul>`;
        }).join('')

    })
    .catch(error => console.log(error));
}


getGiphys();


