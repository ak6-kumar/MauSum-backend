console.log(window.navigator.geolocation.getCurrentPosition((data)=>{
    console.log({
        latitude:data.coords.latitude,
        longitude:data.coords.longitude
    });
}));

const data = document.querySelector('form');
const inp = document.querySelector('input');
data.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(inp.value);
})
fetch()