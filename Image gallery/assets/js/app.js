let container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", () => {
    loadImages();
});




function loadImages() {
    fetch("https://picsum.photos/v2/list?page=2&limit=10")
    .then(function (res) {
        return res.json();
    })
    .then(function (imgs) {
        let output = ``;
        for (let i = 0; i < imgs.length; i++) {
            if (i == 0) {
                output += `<div class="carousel-item active" data-bs-interval="2000">
                <img width="800px" height="730px" src="${imgs[i].download_url}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Author -- ${imgs[i].author}</h5>
                </div>
              </div>`;
                continue
            }
            output += `<div class="carousel-item" data-bs-interval="2000">
            <img width="800px" height="730px" src="${imgs[i].download_url}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Author -- ${imgs[i].author}</h5>
            </div>
          </div>`
            
        }
        output += `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>`
        container.innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    });
}