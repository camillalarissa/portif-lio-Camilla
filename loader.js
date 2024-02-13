document.addEventListener("DOMContentLoaded", function () {
  var loadingContainer = document.getElementById("loading-container");
  var contentContainer = document.getElementById("content-container");

  if (loadingContainer && contentContainer) {
    simulateAsyncLoading().then(function () {
      loadingContainer.style.display = "none";
      contentContainer.style.display = "block";
    });
  }
});

function simulateAsyncLoading() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
}
            