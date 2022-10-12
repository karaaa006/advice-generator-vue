export const fetchRandomAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    return data.slip;
  } catch (e) {
    return e;
  }
};
