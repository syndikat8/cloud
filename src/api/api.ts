import axios from "axios";

const instance = axios.create({
  baseURL: "https://neko-cafe-back.herokuapp.com/"
})

type DataType = {
  errorText: string
  info: string
  yourBody: {success: boolean}
  yourQuery: {}
}

type CommonApiType = {
  status: number
  data: DataType
}

export const API = {
  f(isDone: boolean) {
    return instance.post<CommonApiType>("auth/test",
      {success: isDone}
    )
  },
}

export const tryCatch = async (f: any) => {
  try {
    const response = await f();
    console.log('answer: ', response.data);
    return response;
  } catch (e) {
    console.log('error: ', {...e});
    return e.response || e.message;
  }
}