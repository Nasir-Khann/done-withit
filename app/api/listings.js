import client from './client';

const endPoint = '/listings'

const getListings = () => client.get(endPoint)
// const addListing = (listings, onUploadProgress) => {
//     const data = new FormData();
//     data.append('title', listings.title);
//     data.append('price', listings.price);
//     data.append('categoryId', listings.category.value)
//     data.append('description', listings.description)
//     listings.images.forEach((image, index) => {
//         console.log("single image:", image);
//         data.append("images", {
//         name: `image${index}.jpg`,
//         type: "image/jpeg",
//         uri: image,
//         });
//     });


//     return client.post(endPoint, data, {
//         onUploadProgress:(progess) => {
//             onUploadProgress(progess.loaded/progess.total);
//         }
        
//     });
// //     return client.post(endPoint, data, {
// //   onUploadProgress: (progressEvent) => {
// //     console.log("RAW:", progressEvent.loaded, progressEvent.total);

// //     const progress = progressEvent.loaded / progressEvent.total;
// //     if (onUploadProgress) onUploadProgress(progress);
// //   }
// // });
// }
const addListing = async (listing, onUploadProgress) => {
  const data = new FormData();

  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  for (let index = 0; index < listing.images.length; index++) {
    const image = listing.images[index];// 

    console.log("single image:", image);

    if (typeof image === "string" && image.startsWith("blob:")) {
      const response = await fetch(image);
      const blob = await response.blob();

      data.append("images", blob, `image${index}.jpg`);
    } else {
      data.append("images", {
        name: `image${index}.jpg`,
        type: "image/jpeg",
        uri: typeof image === "string" ? image : image.uri,
      });
    }
  }

  return client.post(endPoint, data, {
    onUploadProgress: (progressEvent) => {
      console.log("progressEvent:", progressEvent);
      console.log("loaded:", progressEvent.loaded);
      console.log("total:", progressEvent.total);

      if (progressEvent.total) {
        onUploadProgress?.(progressEvent.loaded / progressEvent.total);
      }
    },
  });
};
export default {
    getListings,
    addListing
}