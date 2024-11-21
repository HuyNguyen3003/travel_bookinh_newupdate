import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
const bucket = "data_bookingtravel";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  // const newName = `/users/${timestamp}-${image.name}`;
  const newName = `${timestamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, {
      cacheControl: "3600",
    });

  console.log(error);

  if (!data) throw new Error("Image upload failed");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const uploadImageLocal = async (pathImage: string) => {
  try {
    const imageBuffer = fs.readFileSync(pathImage);
    const fileName = path.basename(pathImage);
    const timestamp = Date.now();
    const newName = `${timestamp}-${fileName}`;

    await supabase.storage.from(bucket).upload(newName, imageBuffer, {
      cacheControl: "3600",
    });

    return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
  } catch (error) {
    return "error";
  }
};
