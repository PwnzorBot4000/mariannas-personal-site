class Products {
  constructor() {
    this.images = [];

    document.addEventListener('DOMContentLoaded', this.init.bind(this));
  }

  addImage() {
    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/150';
    image.alt = 'Εικόνα';
    this.images.push(image);
    this.refreshImages();
  }

  init() {
    this.form = document.getElementById('add-product-form');
    this.imagesContainer = document.getElementById('images');
    this.refreshImages();
  }

  refreshImages() {
    this.imagesContainer.innerHTML = '';
    this.images.forEach(image => {
      this.imagesContainer.appendChild(image);
    });
    // Add image button
    const addImageButton = document.createElement('button');
    addImageButton.classList.add('add-image-button');
    addImageButton.innerText = 'Προσθήκη εικόνας';
    addImageButton.onclick = this.addImage.bind(this);
    this.imagesContainer.appendChild(addImageButton);
  }

  save(event) {
    event.preventDefault();
    const formData = new FormData(this.form);
  }
}

const app = new Products();
window.app = app;
