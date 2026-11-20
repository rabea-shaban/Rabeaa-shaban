import { readFile } from "node:fs/promises";
import { join } from "node:path";

const portraitData = await readFile(
  join(process.cwd(), "public", "cv", "portrait-share.jpg")
).then((image) => `data:image/jpeg;base64,${image.toString("base64")}`);

export const cvShareImageSize = {
  width: 1200,
  height: 630,
};

export const cvShareImageAlt =
  "Rabea Shaban Ibrahim — Software Engineer and Full-Stack MERN Developer";

export function CvShareImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        padding: "56px 68px",
        background:
          "linear-gradient(135deg, #030b17 0%, #071a32 58%, #0a2546 100%)",
        color: "#f8fafc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "-100px",
          top: "-180px",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background: "rgba(14, 165, 233, 0.12)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "8px",
          background: "linear-gradient(180deg, #22d3ee, #0ea5e9)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "720px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            border: "1px solid rgba(34, 211, 238, 0.42)",
            borderRadius: "999px",
            background: "rgba(8, 47, 73, 0.7)",
            color: "#67e8f9",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "1.5px",
          }}
        >
          DIGITAL CV
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "24px",
            fontSize: "54px",
            lineHeight: 1.08,
            fontWeight: 800,
            letterSpacing: "-1.5px",
          }}
        >
          Rabea Shaban Ibrahim
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "16px",
            color: "#dbeafe",
            fontSize: "32px",
            fontWeight: 600,
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "7px",
            color: "#7dd3fc",
            fontSize: "24px",
          }}
        >
          Full-Stack MERN · React.js · Next.js
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            marginTop: "24px",
            padding: "12px 18px",
            borderRadius: "14px",
            background: "rgba(3, 105, 161, 0.52)",
            color: "#a5f3fc",
            fontSize: "19px",
            fontWeight: 700,
          }}
        >
          <div style={{ display: "flex" }}>Digilians Specialized Diploma</div>
          <div style={{ display: "flex", fontSize: "17px", fontWeight: 500 }}>
            AI-based Software Development
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "26px",
            color: "#94a3b8",
            fontSize: "18px",
          }}
        >
          www.rabea-shaban.com/cv
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "350px",
          height: "350px",
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #22d3ee, #0ea5e9 55%, #0369a1)",
        }}
      >
        <img
          src={portraitData}
          alt="Rabea Shaban Ibrahim"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "50% 20%",
            background: "#fff",
          }}
        />
      </div>
    </div>
  );
}
