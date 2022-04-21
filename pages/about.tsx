import { DarkLayout } from "../Layout/DarkLayout";
import MainLayout from "../Layout/MainLayout";

const About = () => {
  return (
    <>
      <h1 style={{ marginTop: "20px", fontSize: "40ox", color: "skyblue" }}>
        About
      </h1>
     
    </>
  );
};

About.getLayout = function getLayout(page:JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  );
};

export default About;
