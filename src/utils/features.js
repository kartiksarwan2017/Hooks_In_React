export const checkAvailability = () => {
    console.log("Checking...");
    return Math.random() < 0.5;
};

export const generateID = () => {
  
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonopqrstuvwxyz";
    console.log("Generating");
    let result = "";
    for(let i = 0; i < 35; i++){
      const randomNumber = ~~(Math.random() * 52);
      result += str[randomNumber];
    }
  
    return result;
  
};
  