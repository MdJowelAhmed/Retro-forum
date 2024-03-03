const loadDiscussData = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
  const data = await res.json()
  const allData = data.posts
  // console.log(allData)
  const cardContainer = document.getElementById('card-container')
  allData.forEach((singleData) => {
    console.log(singleData)
    const daynamic = `${singleData.title} `
    console.log(daynamic)
    const div = document.createElement('div')
    div.innerHTML = `
        <div class=" flex gap-6 p-10 bg-[#797DFC] space-y-3 rounded-2xl">
          <div>
          <img class="w-24 h-24 rounded-2xl" src="${singleData.image} " alt="">
          <div class="bg-green-900 h-5 w-5 rounded-full relative">
          <p class="-mt-[108px] -ml-16"> </p>
          </div>
          </div>
          <div class="">
            <div class="flex">
              <p class="mr-10 lg:mr-32">#${singleData.category} </p>
              <p>author:${singleData.author.name} </p>
            </div>
            <div>
              <h2 class="text-2xl font-bold">${singleData.title} </h2>
            </div>
            <div class="mb-5">
              <p>${singleData.description} </p>
            </div>
            <hr>
            
              <div>
                <div  class="flex mt-5 justify-between">
                  <div class="flex gap-2">
                    <img src="image/Group 13.png" alt="">
                    <p>${singleData.comment_count} </p>
                  </div>
                  <div class="flex gap-2">
                  <img src="image/Group 16.png" alt="">
                    <p>${singleData.view_count} </p>
                  </div>
                  <div class="flex gap-2">
                    <img src="image/Group 18.png" alt="">
                    <p>${singleData.posted_time} </p>
                  </div>
                  <div>
                    <img onclick="clickWorked('${singleData.title} ${singleData.view_count} ')" id="mark-as-read" src="image/Group 40106.png" alt="">
                   </div>
                </div>
               
             
             
            </div>
          </div>
        </div>
        `;
    cardContainer.appendChild(div)
  })
}
loadDiscussData()



const markReadContainer = document.getElementById('mark-read-container')
let count=1;
const clickWorked = (text) => {
  let reading=document.getElementById('read')
  let total=count++;
  reading.innerText=total;
  const div = document.createElement('div')
  div.innerText =text;
  markReadContainer.appendChild(div) 
  

}
let read=0
const increased=()=>{

}

