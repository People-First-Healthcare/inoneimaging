"use server";

import fs from "fs";
import path from "path";

export async function saveData(formData: FormData) {
  const file = formData.get("file") as File;
  const buffer = await file.arrayBuffer();
  const filePath = path.join("./", file.name);
  fs.writeFileSync(filePath, Buffer.from(buffer));
  console.log(formData, formData.get("file"));
  const payload = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    file: filePath,
  };

  console.log("payload", payload);
}
