"use server";

import axios from "axios";

export default async function captchaTurnstileVerify({
  token,
}: {
  token: string;
}) {
  const data = {
    // Refer: https://developers.cloudflare.com/turnstile/reference/testing/
    secret: process.env.TURNSTILE_SECRET_KEY,
    response: token,
  };
  return axios
    .post("https://challenges.cloudflare.com/turnstile/v0/siteverify", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.data);
}
