import axios, {AxiosResponse} from "axios";

const instance = axios.create({
  baseURL: "https://neko-cafe-back.herokuapp.com/"
})

type DataType = {
  errorText: string
  info: string
  yourBody: {success: boolean}
  yourQuery: {}
}


export const API = {
  f(isDone: boolean) {
    return instance.post<DataType>("auth/test",
      {success: isDone}
    )
  },
}

export const tryCatch = async (f: () => Promise<AxiosResponse<DataType>>) => {
  try {
    const response = await f();
    console.log('answer: ', response.data);
    return response;
  } catch (e) {
    console.log('error: ', {...e});
    return e.response || e.message;
  }
}