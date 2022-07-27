document.addEventListener('DOMContentLoaded', loadInternalJSONData);

function loadInternalJSONData() {

    // INSTANTIATE XHR OBJECT
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '../data/users.json', true);

    xhr.onload = function() {

        if (this.status === 200) {
            
            let output = '';

            const response = JSON.parse(this.responseText);

            response.forEach(function(data) {

                output += `
               
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <img src="${data.characterImage}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title text-center">${data.characterName}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item "><strong>Level:</strong> ${data.level}</li>
                            <li class="list-group-item"><strong>Type:</strong> ${data.character}</li>
                            <li class="list-group-item"><strong>School:</strong> ${data.school}</li>
                            </ul>
                        </div>
                    </div>
                
                `
            });

            document.querySelector('#json-body').innerHTML = output;

        }   else {
            console.log('There\'s an error fetching JSON Data');
        }
    }

    xhr.send();
}