const dialog = document.querySelector("#listingDialog");
const openListing = document.querySelector("#openListing");

openListing?.addEventListener("click", () => {
  if (typeof dialog?.showModal === "function") {
    dialog.showModal();
  }
});
