import axios from "axios";

const instance = axios.create({
  baseURL: "https://neko-cafe-back.herokuapp.com/"
})

export const API = {
  f(isDone) {
    return instance.post("auth/test",
      {success: isDone}
    )
  },

}

export const tryCatch = async (f) => {
  try {
    const response = await f();
    console.log('answer: ', response.data);
    return response;
  } catch (e) {
    console.log('error: ', {...e});
    return 'Произошла ошибка';
  }
}