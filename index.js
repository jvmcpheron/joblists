fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function(datas){
    let placeholder = document.querySelector('#data-ouput');
    let out = "";
    for (let data of datas){
        out += `
        <div class="container border m-3">
        <div class="row">
            Company
            New
            Feat
        </div>
        <div class="row">
            <div class="col">
                <h3>${data.position}</h3>
                <p>When Posted
                Job type
                Locaion </p>
            </div>
            <div class="col">
                <!-- Role -->
                Role
                <!-- Level -->
                Level
                <!-- Languages -->
                Skills
                Skills
                Skills
                <!-- Item End -->
            </div>
        </div>
        </div>
        `;
    }
    //populating info
    frontend = document.getElementById("data-output");
    frontend.innerHTML = out;
})