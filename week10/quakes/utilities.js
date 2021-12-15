function getJSON(url) {
    fetch(url)
    .then(response=>response.json())
    .then(data=> console.log(data));


}

 export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};
function resolve(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);

}
    



export{getJSON}
