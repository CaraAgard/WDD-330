import { getJSON,  getLocation} from "./utilities.js";
const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
window.addEventListener('load', () => {
    var location = getLocation();
    location
       
        .then(data=>getJSON(getURL(data)));
   
   

}

);
function getURL(data) {
    var latitude = data.coords.latitude;
    var longitude = data.coords.longitude;
    
    var url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=${latitude}&longitude=${longitude}&maxradiuskm=100`;
    return url;
}
