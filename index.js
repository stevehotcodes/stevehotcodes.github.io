async  function fetchdata(){
 await fetch('https://jsonplaceholder.typicode.com/users/5')
 .then(res=>res.json())
 .then(data=>{
        let profiledata=data.name;
        let names=document.querySelectorAll(".name");
        names.forEach(element => {
            element.innerText=profiledata;
            console.log(element);
        });
      

   //    // let username =data.name
   //   document.getElementById("name").innerHTML=username;
     
   //    console.log(data.name);

    //  <div class="user-name">
    // <h2>${data.name}</h2>
    // <p>32.2K Tweets</p>
    // </div>
     
    //  document.querySelector(".user-name").innerHTML=username;
 });
}
fetchdata();

async function getTweets(){
   await fetch('https://jsonplaceholder.typicode.com/posts/6')
   .then(res=>res.json())
   .then(posts=>{
      let poster=posts.title;
     let title1= document.querySelectorAll(".title1");
     title1.forEach(element=>{
      element.innerHTML=poster;
     })
      // console.log(poster)

      let poster1=posts.body;
     let body= document.querySelectorAll(".body");
     body.forEach(element=>{
      element.innerHTML=poster1;
     })
      


      let postBody=posts.body
      document.getElementById("body").innerHTML=postBody
   })
}
getTweets();
 



