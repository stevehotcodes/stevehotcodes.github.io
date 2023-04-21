async  function fetchdata(){
 await fetch('https://jsonplaceholder.typicode.com/users/4')
 .then(res=>res.json())
 .then(data=>{
        let profiledata=data.name;
        document.getElementById("u").innerHTML=profiledata
        console.log(data);

      let username =data.name
     document.getElementById("name").innerHTML=username;
     
      console.log(data.name);

    //  <div class="user-name">
    // <h2>${data.name}</h2>
    // <p>32.2K Tweets</p>
    // </div>
     
    //  document.querySelector(".user-name").innerHTML=username;
 });
}
fetchdata();

async function getTweets(){
   await fetch('https://jsonplaceholder.typicode.com/posts/3')
   .then(res=>res.json())
   .then(posts=>{
      let poster=posts.title;
      document.getElementById("title1").innerHTML=poster;
      console.log(poster)
      let postBody=posts.body
      document.getElementById("body").innerHTML=postBody
   })
}
getTweets();


