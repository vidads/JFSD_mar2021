//Doing a Product web app, in product page to display the name, description, imageUrl, style, price
const createHTMLList = (
  index,
  name,
  description,
  imageUrl1,
  imageUrl2,
  carou
) => `      
            <div class="col-lg-4">
              <div class="card" style="width: 18rem">
                <div class="content">
                  <div id="${carou}" class="carousel slide" data-bs-interval="false">
                    <div class="carousel-inner">
                     <div class="carousel-item active">
                     <img src=${imageUrl1} class="card-img-top" alt="First Slide">
                     </div>
                     <div class="carousel-item">
                     <img src=${imageUrl2} class="card-img-top" alt="Second Slide">
                     </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#${carou}" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                       <span class="visually-hidden">Previous</span>
                    </button>
                     <button class="carousel-control-next" type="button" data-bs-target="#${carou}" data-bs-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Next</span>
                     </button>
                 </div>             
                </div>
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${description}</p>
                  <a
                    id="${index}"
                    href="#"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#cardModal"
                    >More</a
                  >
                  
                </div>
              </div>
            </div>
            `;

// function displayProductDetails(item) {
//   document.querySelector("#modalName").innerText = item.oName;
//   document.querySelector("#modalImg").src = item.oImageUrl;
//   document.querySelector("#modalStyle").innerText = item.oStyle;
//   document.querySelector("#modalPrice").innerText = item.oPrice;
// }
class CardController {
  constructor() {
    this._items = [];
  }
  //method to add the items into the array
  addItem(name, description, imageUrl1, imageUrl2, carou) {
    const itemObj = {
      oName: name,
      oDescription: description,
      oImageUrl1: imageUrl1,
      oImageUrl2: imageUrl2,
      oCarou: carou,
    };
    this._items.push(itemObj);
  }
  displayItem() {
    var cardHTMLList = [];
    for (var i = 0; i < this._items.length; i++) {
      const item = this._items[i];
      const cardHTML = createHTMLList(
        i,
        item.oName,
        item.oDescription,
        item.oImageUrl1,
        item.oImageUrl2,
        item.oCarou
      );
      cardHTMLList.push(cardHTML);
    }
    //Join all the elements in my productHTMLList into one string, and separate by a break
    const pHTML = cardHTMLList.join(`\n`);
    document.querySelector("#row").innerHTML = pHTML;

    //addEventListener - click
    // for (var i = 0; i < this._items.length; i++) {
    //   const item = this._items[i];
    //   document.getElementById(i).addEventListener("click", function () {
    //     displayProductDetails(item);
    //   });
    // }
  }
} //End of CardController class
