import axios from "axios";

export async function verifyTokenGoogle(tokenID) {
  try {
    const { data } = await axios.post(
      "localhost:5000/api/v1/Firebase/verifyGoogle",
      {
        authToken: tokenID,
      }
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject({ error });
  }
}
