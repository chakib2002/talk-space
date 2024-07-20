const getToken = (pathname: string) => {
  const token = pathname.toString().slice(1);
  return token;
};

export default getToken;
