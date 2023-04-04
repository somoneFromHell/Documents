let yearElement:HTMLElement|null = document.getElementById('year') as HTMLElement

const year:string = new Date().getFullYear().toString()

if(yearElement){
    yearElement.setAttribute('datetime',year )  
    yearElement.textContent = year 

}