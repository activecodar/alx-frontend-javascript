export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Successfully!' });
    } else {
      reject(new Error('An error occurred!'));
    }
  });
}
