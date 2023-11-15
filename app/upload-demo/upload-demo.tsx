'use client';

import { saveData } from "./action";

export default function UploadDemo() {
  return (
    <form action={saveData} className="min-h-screen p-8">
      <div>first name</div>
      <input type="text" name="firstName" required className="border py-2 px-2 min-w-full rounded" />
      <br />
      <br />
      <div>last name</div>
      <input type="text" name="lastName" required className="border py-2 px-2 min-w-full rounded" />
      <br />
      <br />
      <div>email</div>
      <input type="email" name="email" required className="border py-2 px-2 min-w-full rounded" />
      <br />
      <br />
      <div>upload</div>
      <input type="file" name="file" required className="" />
      <br />
      <br />
      <button type="submit" className="border rounded py-2 px-4 bg-indigo-500 text-white">Submit</button>
    </form>
  )
} 