setTimeout(function() {
 console.log('hello from callback');
},2000);

console.log('hello from global scope scope');


function  changetext() {
    document.querySelector('h1').textContent = 'Hello World';
}

const timerId =setTimeout(changetext, 3000);

function  mycallback(){
    // console.log(Date.now());
const IntervalId = setInterval(Callback, 1000);
console.log(Date.now());
}   
 function startChange() {
   if(!intervalID){
     intervalID =setInterval(changeColor ,2000);
   }
 }

 function changeColor(){
    if(document.body.style.backgroundColor !== 'black'){
       document.body.style.backgroundColor ='black'
       document.body.style.color ='white';
    } else{
         document.body.style.backgroundColor ='white';
         document.body.style.color ='black';  
    }
 }
   function stopChange(){
    clearInterval(intervalID);
   }

   //  document.getElementById('start').addEventListener('click', startChange );
   //  document.getElementById('stop').addEventListener('click', stopChange );


 function toggle(e){
    e.target.classList.toggle('danger');
            
}
document.querySelector('button').addEventListener('click',toggle);


const posts = [
 {Title: 'post one' , body:'This is post one'},
 {Title: 'post two' ,body:'This is post two'},

];
 function getposts () {
    setTimeout(() => {
   posts.forEach(function (post) {
    const div=document.createElement('div')
    div.innerHTML =`<strong>${post.title}</strong> - ${post.body}`;
    document.querySelector('.posts').appendChild(div);
   
});
}, 1000);

}
 getposts();


 const xhr =  new XMLHttpRequest();
 xhr.open ('GET', './movies.json');

//  xhr.onreadystatechange = function () {
//   console.log(this.status)
//  }
//  xhr.send();

//  xhr.onreadystatechange = function() {
//   if (this .readyState ===4 && this.status===200) {
//     console.log(JSON.parse(this.responseText));
//   }
//  };

//  const data = JSON.parse(this.responseText);
//  data.forEach((movie) => {
//    const li = document.createElement('data') ('li')
//    li.innerHTML `<strong>${movies.title}</strong> -${movies.year}`
//    document.querySelector('#results').appendChild ('li')
//  })

//  xhr.send();


function getData(endpoint) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', endpoint);

  this.onreadystateChange = function() {
    if (this .readystate === 4 && xhr.status===200){
      console.log(JSON.parse(xhr.Responsetext));
    }
  };
  setTimeout(() => {
  xhr.send();
  }, Math.floor(Math.random() *3000) + 1000);

}

getData('./movies.json');
getData('./actors.json');
getData('./directors.json');




//  const promise = new Promise((resolve, reject) => {

//    setTimeout(() =>{
//      console.log('Async task complete');

//      resolve();
//    }, 2000);
//  });

//  promise.then(() => {
//    console.log('Promise consumed..');
//  });

 console.log('Hello from global scope');


 fetch('./movies.json')
  .then((response) =>{
    console.log(response)
  })
 
  // fetching atext file

  fetch ('./movies.json')
  .then((response) =>{
    return response.json
  })
  .then((data) =>{
    console.log(data);
  });

  fetch('http://api.github.com/users/')
  .then((response) =>response.json())
  .then((data) => console.log(data))
  
  function createpost(post){
    fetch('http://jsonplaceholder.typicode.com/posts',{
      method:'POST',
      body:JSON.stringify({
        body:post. body,
        title:post. title

      }),
      headers: {
        'content-type': 'application/json',
        token: 'abc123'

      }

    
    }).then(res =>res.json())
      .then(data => console.log(data));
  }

//   const apiurl = 'http://jsonplaceholder.typicode.com/todos';
   
//   const getTodos =() => {
//     fetch(apiurl + '?_limit=5')
//     .then((res)  => res.json())
//     .then((data)=> {
//       console.log(data);
//     });
// };
// getTodos();


const apiurl = 'http://jsonplaceholder.typicode.com/todos';
   
  const getTodos =() => {
    fetch(apiurl + '?_limit=6')
    .then((res)  => res.json())
    .then((data)=> {
      data.forEach((todo) =>{
        const div =document.createElement('div')
        div.appendChild(document.createTextNode(todo.title));

        if (todo.completed) {
          div.classList.add('done')
        }
        document.getElementById('todo-list').appendChild(div);
      });
    });
};
getTodos();

const createTodo = (e)  =>{
  e.preventDefault();


const newTodo = {
 title: e.target.firstElementChild.value,

 completed: false
}

};

// fetch API error Handling

// fetch ('http://httpstat.us/200') 
// .then((response) =>{
//   return response;
// })
//  .then(() =>{
//   console.log('sucess')
//  });


 fetch('http://httpstat.us/404')

 .then((respose)=>{
   return respose
 })
.then (() =>{
  console.log ('sucess')
})

.catch((error) => {
  console.log(error);
});
 

// async and await
const promise = new Promise ((resolve, reject) => {
 setTimeout (() => {
 resolve ({name: 'john' , age: 20});
 } ,1000);

});
promise.then((data) => console.log(data));


async function getPromise() {
  const response = await promise 
  console.log(response)
}

//  getPromise();

//  async function getUsers () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');

//   const data = await res.json();
//   console.log(data);

// }
//  getUsers();


 const getPosts =async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await res.json();
  console.log(data)
 }
 getPosts();

//  async and await error handling

// const getUsers = async () => {

//   try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/user');

//      const data =await response.json();
//      console.log(data);

//    } catch (error) {
//       console.log(error);
//     }
//     };

// getUsers();


const getUsers = async () => {

  try {
    //  const response = await fetch('https://jsonplaceholder.typicode.com/user');

     const respose = await fetch('http://httpstat.us/500');

     if(!respose.ok) {
      throw new error('resquest failed')
     }
     const data =await respose.text();
     console.log(data);

   } catch (error) {
      console.log(error);
    }
    };

getUsers();


async function getAllData() {
  const movies = await getData('./movies.json');
  console.log(movies)
}
getAllData();



console.log(window.location.pathname);

const global={
  currentPage:window.location.pathname
};

console.log(global.currentPage);

// async function displaypopularmovies(){
//  constresults = await fetchAPIData('');
//  console.log(results);
// }

async function displayPopularMovies() {
  const results =await fetchAPIData('movie/popular');
  console.log(results);
  results.forEach((movie) => {
    const div=document.createElement('div');
    div.classList.add('card');
    div.innerHTML=`<a href="movie-details.html?id=${movie.id}">
    ${
      movie.poster_path ?`<img src="https://image.tmdb.org/t/p/w500$
      {movie.poster_path}"
      class="card-img-top"
      alt="${movie.title}"
      >`
       :`<img src="../images/no-image.jpg"
      class="card-img-top"
      alt="${movie.title}"
      />`
    }
    // <img src="../images/no-image.jpg"
    // class="card-img-top"
    // alt="Movie Title"/>
    // /a>
    <div class ="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">
    <small class="text-muted">Release:&{
    movie.release_date}</small>
    </p>
    </div>
    `;
    document.querySelector('#popular-movies').appendChild(div);
  });
}
  

async function displayPopularShows() {
  const results =await fetchAPIData('shows/popular');
  console.log(results);
  
results.forEach((show) => {
  const div=document.createElement('div');
  div.classList.add('card');
  div.innerHTML=`<a href="show-details.html?id=${show.id}">
  ${
    show.poster_path ?`<img src="https://image.tmdb.org/t/p/w500$
    {show.poster_path}"
    class="card-img-top"
    alt="${show.name}"
    >`
     :`<img src="../images/no-image.jpg"
    class="card-img-top"
    alt="${show.name}"
    />`
  }
  // <img src="../images/no-image.jpg"
  // class="card-img-top"
  // alt="Movie Title"/>
  // /a>
  <div class ="card-body">
  <h5 class="card-title">${show.name}</h5>
  <p class="card-text">
  <small class="text-muted"> Air Date:&{
  show.first_air_date}</small>
  </p>
  </div>
  `;
  document.querySelector('#popular-shows').appendChild(div);
});

}


// Fetch data from TMDB API

async function fetchAPIData(endpoint){
  const  $API_KEY ='3fd2be6f0c70a220a598f084ddfb75487c';

  const API_URL ='https://api.themoviedb.org/3/';

  showSpinner();

  const response= await fetch(
    `${API_URL}${endpoint}?api_key={API_KEY}&language=en-US`
  );
  const data= await response.json();

  hideSpinner();

  return data;
}

function showSpinner(){
  document.querySelector('.spinner').classlist.add('show');
}

function hideSpinner(){
  document.querySelector('.spinner').classlist.remove('show');
}

// Highlight active link
 function Highlightactivelink() {
  const links=document.querySelectorALL('.nav-link');
  links.forEach((link) => {
  if(link.getAttribute('href')===global.currentPage) {
    link.classlist.add('active');
  }
  });
 }

// Init app

function Init () {
  switch(global.currentPage){
    case '/':
    case '/index.html':
    // console.log('Home');
    displaypopularmovies();

    break;
    case '/shows.html':
      console.log('shows');
      break;
      case '/movies-details.html':
        console.log('movies-Details');
        break;
        case '/tv-details.html':
        console.log('TV Details');

  }
   highlightActiveLink();
 
}

document.addEventListener('DOMContentLoaded' , Init);

