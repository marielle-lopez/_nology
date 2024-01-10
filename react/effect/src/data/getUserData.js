// js function that fetches and returns data
export const fetchUserData = async () => {
  const fetchedUsers = await fetch("https://randomuser.me/api");
  const userData = await fetchedUsers.json();
  // console.log(userData.results[0]);

  // this could be turned into a separate function
  const randomUser = {
    name: userData.results[0].name.first,
    city: userData.results[0].location.city,
    age: userData.results[0].dob.age,
  };

  return randomUser;
};
