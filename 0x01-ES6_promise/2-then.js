/* eslint-disable no-unused-vars */
function handleResponseFromAPI(promise) {
  promise.then((response) => ({
    status: 200,
    body: 'success',
  }), (error) => new Error());

  promise.then(() => {
    console.log('Got a response from the API');
  });
}
