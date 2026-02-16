export const getHeaders = () => {
  console.log("KEY:", process.env.FOOTBALL_API_KEY);
  
  return {
    "x-apisports-key": process.env.FOOTBALL_API_KEY || "",
  };
};
