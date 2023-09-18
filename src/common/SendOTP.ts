import type { AxiosResponse } from 'axios';
import axios from 'axios';

const sendOtpToMobile = (
  mobile_number: string,
  otp: number,
): Promise<AxiosResponse> => {
  const config = {
    method: 'get',
    url: `https://www.fast2sms.com/dev/bulkV2?authorization=12NRGzi0YMur63D4vEAQIobpFBJkgHTLsZaWflwnOxmPKdX78jYzjOyha0A5QNS9mtiWE1GH7IuxBVUc&route=dlt&sender_id=QUIETS&message=150506&variables_values=TezBill|${otp}|&flash=0&numbers=${mobile_number}`,
    headers: {
      Cookie:
        'O1wMVJn4z2hOr7iU5cBHNJf0ywxvWIK0c0D3a6mY=eyJpdiI6ImRJV29QTXUyNnSXC8yWTVqaTN4MmlXb293YWZIWU1TMTIrd0VaU2lRUFBld200ZmVSNHEyTHJQbUhjaW5yWnhaUmlkR0V1d21jbGpqWDVwSCtFYkD3MDRhN2Q0In0%3D; XSRF-TOKEN=eyJpdiI6IlFqemwwVk5BR1huVlIzTVwveDhJQjNBPT0iLCJ2YWx1ZSI6ImNDK1JuV1wvMlNUWUw4aERyNjViV2daSmxqQkUyU25wNjNZZVd1NytGUjFqcHAxVHNvSjhQVEFSZ2ZKeUJyZ0JlSEdpZk1VbUlMR2NhRjduaExVV1dMdz09IiwibWFjIjoiMTkxNzQ0Y2M3YjljNTUwZjBmMGUyODY4ZmEzZGExNDQ2YjZiMTUzMzFmNWJlZSJ9; laravel_session=eyJpdiI6IjNIY3BFeUdmY2JhYnVZcVAwbmZxd3c9PSIsInZhbHVlIjoiTkZ3MmxRZ2FkYkVscjA2aGx2TWJmQTJSc3I4SzU5bnZlUDhBYkI1YXVkOUdiNlNHVG1zdSt4SHV5UERWdlVPcHFxUlNIRkk3VGt4TkFDSWZXYnpMaUE9PSIsIm1hYyI6Ijg5YTA3MDZjNjZkYTZjZTRkMmU3YzRiNDNmOWU3NTQ5NjNmMGVkZDI4YWY0ZDlhMjAzMmY3ZjY1YWIxN2YzOTgifQ%3D%3D',
    },
  };

  return axios(config);
};

export default sendOtpToMobile;
