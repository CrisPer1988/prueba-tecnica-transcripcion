import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import os from "os";
import path from "path";
import middleware from "@/middleware";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file found in form data" });
    }

    const tempFilePath = path.join(os.tmpdir(), file.name);

    fs.writeFileSync(tempFilePath, Buffer.from(await file.arrayBuffer()));

    try {
      const result = await cloudinary.uploader.upload(tempFilePath, {
        resource_type: "auto",
      });

      fs.unlinkSync(tempFilePath);

      const response = NextResponse.json({
        url: result.secure_url,
      });

      return response;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      return NextResponse.json({
        error: "Error uploading file to Cloudinary",
        errorCode: error,
      });
    }
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return NextResponse.json({
      error: "Internal server error",
      errorCode: error,
    });
  }
}
