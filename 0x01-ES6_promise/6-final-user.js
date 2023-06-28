import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = (firstName, lastName, fileName) => Promise.allSettled([
  signUpUser(firstName, lastName),
  uploadPhoto(fileName),
]).then((values) => values.map((item) => ({
  status: item.status,
  value: item.value || item.reason,
})));

export default handleProfileSignup;
