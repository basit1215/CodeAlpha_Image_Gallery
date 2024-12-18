
const images = [
   "Images/img1.jpg",
   "Images/img2.jpg",
   "Images/img3.jpg",
   "Images/img4.jpg",
   "Images/img5.jpg",
   "Images/img6.jpg",
   "Images/img7.webp",
   "Images/img8.jpg",
   "Images/img9.jpg",
   "Images/img10.jpg",
   "Images/img11.webp",
   "Images/img12.jpg",
   "Images/img13.jpg",
   "Images/img14.jpg",
   "Images/img15.jpg",
   "Images/img16.jpg",
   "Images/img17.jpg",
   "Images/img18.jpg",
   "Images/img19.jpg",
   "Images/img20.jpg",
   "Images/img21.webp",
  ];
  
  let currentIndex = 0;
  
  const currentImage = document.getElementById("currentImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  
  images.forEach((imgSrc, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = imgSrc;
    thumbnail.alt = `Thumbnail ${index + 1}`;
    thumbnail.classList.add("thumbnail");
    thumbnail.addEventListener("click", () => {
      currentIndex = index;
      updateImage();
    });
    thumbnailContainer.appendChild(thumbnail);
  });
  
  function updateImage() {
    currentImage.src = images[currentIndex];
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumb, index) => {
      thumb.classList.toggle("active", index === currentIndex);
    });
  }
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
  
  updateImage();