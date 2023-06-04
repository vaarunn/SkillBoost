export const checkUserService = async () => {
  const response = await axios("http://localhost:5000/api/users/me", {
    withCredentials: true,
  });
  return response.data;
};
