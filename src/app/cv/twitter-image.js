import { ImageResponse } from "next/og";
import {
  CvShareImage,
  cvShareImageAlt,
  cvShareImageSize,
} from "./share-image";

export const alt = cvShareImageAlt;
export const size = cvShareImageSize;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<CvShareImage />, size);
}
