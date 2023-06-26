fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function(datas){
    let placeholder = document.querySelector('#data-ouput');
    let out = "";
    
    for (let data of datas){
        var isnew = "";
        var isfeatured = "";
        if (data.new==true){
            isnew = "NEW!";
        }else{
            isnew = "";
        }
        if(data.featured==true){
            isfeatured="FEATURED"
        }

        out += `
        <div class="container shadow m-3 ml-5 mr-5 p-3 rounded">
            <div class="row">
                <div class="col-2 d-flex align-content-center">
                    <img src="${data.logo}" class="logo-style rounded-circle" >
                </div>
                <div class="col ">
                    <div class="row d-flex flex-row">
                        <p class="wfit">${data.company}</p>
                        <p class="wfit">${isnew}</p>
                        <p class="wfit">${isfeatured}</p>
                    </div>
                    <div class="row">
                        <h3>${data.position}</h3>
                        <p>${data.postedAt}
                        ${data.contract}
                        ${data.location} </p>
                    </div>
                </div>      
                <div class="col d-flex align-items-center justify-content-end pr-6">
                 
                    <div class ="row">
                        <!-- Role -->
                        ${data.role}
                        <!-- Level -->
                        ${data.level}
                        <!-- Languages -->
                        ${data.languages.toString()} 
                        <!-- Item End -->
                    </div>

        
                </div>

          


            </div>
        </div>
        `;
    }
    //populating info
    frontend = document.getElementById("data-output");
    frontend.innerHTML = out;
})