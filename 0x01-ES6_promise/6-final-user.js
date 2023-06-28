import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

const handleProfileSignup = (firstName, lastName, fileName) => {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    return values.map((item) => ({ status: item.status, value: item.value ?? item.reason }));
  });
}

export default handleProfileSignup;