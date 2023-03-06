const getOtherEmail = (users: any, currentUser: any) => {
  return users?.filter((user: any) => user != currentUser.email);
};

export default getOtherEmail;
