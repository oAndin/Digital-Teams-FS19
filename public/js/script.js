console.log("Hello World!");

popupBtn.onclick=("openPopup", function() {
    console.log("clickou");
    popup.style.visibility = 'visible';
});
    
myBtn.onclick=("closePopUp", function closePopup() {
    popup.style.visibility = 'hidden';
});