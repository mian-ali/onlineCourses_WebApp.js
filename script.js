var datalist=[]
var tbody = document.querySelector('tbody')
var clearbtn = document.querySelector('.clearbtn');
var allbtn = document.querySelectorAll('.btn1');

var showcart = document.querySelector('.showcart')



       allbtn.forEach((btn)=>{
           btn.addEventListener('click',(e)=>{
               var pdiv = e.target.parentElement
               getdata(pdiv)
           })
       })

       function getdata(x){
        //    console.log(x);
           var image=x.querySelector("img").src
           var hd=x.querySelector("h2").textContent;
           var pr=x.querySelector("span").textContent;
           let obj={image,hd,pr}


           var datalist = localStorage.getItem('datakey')

           if(datalist){
       
                datalist = JSON.parse(datalist)
                datalist.push(obj);
                localStorage.setItem('datakey',JSON.stringify(datalist))
                
                render(obj)
            }
            else{
                localStorage.setItem('datakey',JSON.stringify([obj]))
                render(obj)

            }
               
        }
        
        function render(obj){
            var datalist = localStorage.getItem('datakey')
            if(datalist){
                datalist=JSON.parse(datalist)
              
                var itemHTML = "";
                    datalist.forEach((ele,index) =>{
                        itemHTML +=`<tr>
                                        <td><img src="${ele.image}"></td>                                         
                                        <td>${ele.hd}</td>
                                        <td><b>${ele.pr}<b></td>
                                        <td onclick="dltindex(${index})">
                                            <a href="#" class="delete"> X </a>
                                        </td>
                                    </tr>`
                    counter(index)
                    })
                    tbody.innerHTML = itemHTML
                  
            }
        }
        
        render()

       

        function dltindex(index) {
            
            var data = localStorage.getItem('datakey')
            if(data){
                data = JSON.parse(data)
                data.splice(index,1)
                localStorage.setItem('datakey',JSON.stringify(data))
                render()
            }
        }


        clearbtn.addEventListener('click',()=>{
            var data = localStorage.getItem('datakey');
            localStorage.removeItem('datakey');
            tbody.innerHTML= "";
        })


        function counter(index){
           showcart.innerHTML = index+1
            
        }