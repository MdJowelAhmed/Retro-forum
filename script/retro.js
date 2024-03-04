const loadDiscussData = async (isAll,value) => {
  
  let res;
  if(isAll){
    res=await fetch(`
    https://openapi.programming-hero.com/api/retro-forum/posts
    `)
  }
  else{
    res=await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${value}`)
  }
  const data = await res.json()
  const allData = data.posts
  // console.log(allData)
  const cardContainer = document.getElementById('card-container')
  cardContainer.innerHTML = "";
  allData.forEach((singleData) => {
    document.getElementById('spinner').style.display="none"
    let isActive=''
   
    if(singleData.isActive){
      isActive=`<div class="bg-green-700 h-5 w-5 rounded-full relative">`
    }
    else{
      isActive=`<div class="bg-red-400 h-5 w-5 rounded-full relative">`
    }
    // console.log(singleData)
    
    const div = document.createElement('div')
    div.innerHTML = `
        <div class=" flex gap-6 p-10 bg-[#797DFC] space-y-3 rounded-2xl">
          <div>
          <img class="w-24 h-24 rounded-2xl" src="${singleData.image} " alt="">
          ${isActive}
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
                    <img onclick="clickWorked('${singleData.title.replace("'", "")}, ${singleData.view_count} ')" id="mark-as-read" src="image/Group 40106.png" alt="">
                   </div>
                </div>
               
             
             
            </div>
          </div>
        </div>
        `;
    cardContainer.appendChild(div)
  })
}
loadDiscussData(true)

const handleSearch=(value)=>{
  document.getElementById('spinner').style.display="block"
  const valueText=document.getElementById('input-search-field').value;
  valueText.innerValue=''
    loadDiscussData(false,valueText)
    console.log(valueText)
    
   
}

const valueText2=document.getElementById('input-search-field').addEventListener('click',function(){

})


const markReadContainer = document.getElementById('mark-read-container')
let count=1;
const clickWorked = (text,value) => {
  let reading=document.getElementById('read')
  let total=count++;
  reading.innerText=total;
  const div = document.createElement('div')
  div.innerText =text;
  markReadContainer.appendChild(div) 
  

}

// latest card container section 

const loadLatestData=async()=>{
  const res=await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
  const data=await res.json()
  // console.log(data[1].title)
  const latestContainer=document.getElementById('latest-card-container');
 
  data.forEach((singleData2)=>{
    // console.log(singleData2)
    const div=document.createElement('div')
    div.innerHTML=`
    <div class="card  bg-base-100 shadow-xl">
            <figure class="lg:px-10 pt-10 mb-6">
              <img src="${singleData2.cover_image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="flex gap-5">
              <img class="ml-10" src="image/Frame (4).png" alt="">
              <h3>${singleData2.author?.posted_date?.toString()??"No published date"} </h3>
            </div>
            <div class="card-body ">
              <h2 class="font-bold">${singleData2.title} </h2>
              <p>${singleData2.description.slice(0,80)} </p>
             <div class="flex gap-3">
              <div>
                <img class="w-16 h-16 rounded-full" src="${singleData2.profile_image} " alt="">
              </div>
              <div>
                <h3 class="text-xl font-bold">${singleData2.author.name} </h3>
                <h3>${singleData2.author?.designation?.toString()??"Unknown"} </h3>
              </div>
             </div>
            </div>
          </div>
    `;
    latestContainer.appendChild(div)
  })
}

loadLatestData()


