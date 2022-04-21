import MainLayout from "../Layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1
        style={{ 
          marginTop: "20px",
          fontSize: "40ox",
          color: "skyblue",
          translate: "translate(0, -50% )",
        }} 
      >
        Home
      </h1>
    </MainLayout>
  );
}
