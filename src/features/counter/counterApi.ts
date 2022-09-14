// A mock function to mimic making an async request for data
import axios from 'axios';

export function fetchCount() {
  // return new Promise<{ data: any }>((resolve) =>
    const test = axios.get('https://reqres.in/api/products/3')
      .then(res => {
        console.log(res.data.data)
        return res.data.data.year
      })
    return test
  // );
}
