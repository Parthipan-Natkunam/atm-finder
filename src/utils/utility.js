export const getCurrentLocation = ()=>{
    
    return new Promise((resolve,reject)=>{
        
        if (!navigator.geolocation) {
            reject("Geolocation not supported by the browser");
        } else {
            navigator.geolocation.getCurrentPosition(
                //success callback
                (position)=>{
                    const {latitude:lat,longitude:lng}   = position.coords;
                    if(typeof lat === void 0 || typeof lng === void 0){
                        reject("Browser returned invalid location");
                    }
                    resolve({lat,lng});
                }, 
                 //error callback
                ()=>reject("Unable to get device location")
            );
        }
    });
}