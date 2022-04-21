import { FC, ReactNode } from "react";

export const DarkLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#1d1d1d",
        color: "#fff",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        fontSize: "1.5rem",
        fontWeight: "bold",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <main>{children}</main>
    </div>
  );
};
