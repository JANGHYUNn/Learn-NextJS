import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export async function getStaticProps() {
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Ssg({ time }) {
  return (
    <>
      <h1>{time}</h1>
    </>
  );
}

Ssg.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
