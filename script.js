const submitBtn = document.querySelector(".btn-submit");
const ratingInputs = document.querySelectorAll('input[name="rating"]');
const ratingContainer = document.querySelector(".rating-container");
const thanksContainer = document.querySelector(".thanks-container");
const result = document.querySelector(".rate");

submitBtn.addEventListener("click", function () {
  let selectedRating;
  for (let i = 0; i < ratingInputs.length; i++) {
    if (ratingInputs[i].checked) {
      selectedRating = ratingInputs[i].value;
      break;
    }
  }

  if (selectedRating) {
    ratingContainer.style.display = "none";
    thanksContainer.style.display = "grid";
    result.insertAdjacentHTML(
      "beforeend",
      "&nbsp;" + selectedRating + "&nbsp;"
    );
  }
});

// <!-- Thank you state start -->

//     You selected
//     <!-- Add rating here -->
//     out of 5 Thank you! We appreciate you taking the time to give a rating. If
//     you ever need more support, don’t hesitate to get in touch!

//     <!-- Thank you state end -->
