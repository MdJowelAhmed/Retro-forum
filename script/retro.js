 const loadDiscussData=async()=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data=await res.json()
    const allData=data.posts
    // console.log(allData)
    const cardContainer=document.getElementById('card-container')
    allData.forEach((singleData)=>{
        console.log(singleData)
        const div=document.createElement('div')
        div.innerHTML=`
        <div class=" flex gap-6 p-10 bg-[#797DFC] space-y-3 rounded-2xl">
          <img class="h-full" src="image/Rectangle 4.png" alt="">
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
                    <p>560</p>
                  </div>
                  <div class="flex gap-2">
                    <img src="image/Group 16.png" alt="">
                    <p>560</p>
                  </div>
                  <div class="flex gap-2">
                    <img src="image/Group 18.png" alt="">
                    <p>560</p>
                  </div>
                  <div>
                    <img src="image/Group 40106.png" alt="">
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