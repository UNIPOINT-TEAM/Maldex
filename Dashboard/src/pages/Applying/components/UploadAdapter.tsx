import { BASE_URL } from "../../../utils/BaseUrl";

class CustomUploadAdapter {
  constructor(loader) {
    this.loader = loader;
    this.url = `${BASE_URL}/ckeditor5/image_upload/`; // Here we define the path we specified in django
  }

  upload() {
    return this.loader.file.then(file => new Promise((resolve, reject) => {
      const data = new FormData();
      data.append('upload', file);
      
      // Fetch CSRF token from the cookie
      const csrfToken = getCookie('csrftoken'); // Implement getCookie function accordingly

      fetch(this.url, {
        method: 'POST',
        body: data,
        headers: {
          // Include CSRF token in the request headers
          "X-CSRFToken": csrfToken
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
