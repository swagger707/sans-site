let currentImageIndex = 0;
const centralImage = document.getElementById("centralImage");
// Add paths to your images here
const images = [
  "images/sans1.jpeg",
    "images/sans2.jpeg",
    "images/sans3.jpeg",
    "images/sans4.jpeg",
    "images/sans5.jpeg",
    


];
// Initialize the slideshow with the first image
window.onload = () => {
    centralImage.src = images[currentImageIndex];
  };
  // Show the next image
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    centralImage.src = images[currentImageIndex];
  }
  // Show the previous image
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    centralImage.src = images[currentImageIndex];
  }