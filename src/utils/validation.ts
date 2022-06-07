export const isValidLskAddress = (address: string) => {
  const regex = /^lsk[a-zA-Z0-9]{38}$/;
  return regex.test(address);
};
