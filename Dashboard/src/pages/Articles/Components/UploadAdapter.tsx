import { BASE_URL } from "../../../utils/BaseUrl";

// components/CustomUploadAdapter.jsx
class CustomUploadAdapter {
  constructor(loader) {
    this.loader = loader;
    this.url = `${BASE_URL}/ckeditor5/image_upload/`; // Here we define the path we specified in django
  }

  upload() {
    return this.loader.file.then(file => new Promise((resolve, reject) => {
      const data = new FormData();
      data.append('upload', file);
      
      const token = localStorage.getItem('token');

      if (!token) {
        reject('No token found. User must be logged in to upload images.');
        return;
      }
      fetch(this.url, {
        method: 'POST',
        body: data,
        headers: {
          "Authorization": `Token ${token}`
        },
        
      })
        .then((response) => response.json())
        .then(response => {
          if (response.url) {
            resolve({
              default: response.url 
            });
          } else {
            reject(response.error ? response.error.message : 'An error occurred while uploading the file.');
          }
        })
        .catch(error => {
          reject('An error occurred while uploading the file: ' + error.message);
        });
    }));
  }

  abort() {
    console.log('Wasted...');
  }
}

export default CustomUploadAdapter;