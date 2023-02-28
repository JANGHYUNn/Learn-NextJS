import { useState } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  console.log("server");

  return {
    props: {},
  };
}

export default function MyInfo() {
  const [clicked, setClicked] = useState(false);

  const router = useRouter();
  const { status = "initial" } = router.query;
  return (
    <>
      <h1>My info</h1>
      <h1>Clicked {String(clicked)}</h1>
      <h1>status {status}</h1>
      <button
        onClick={() => {
          alert("edit");
          setClicked(true);
          location.replace("/setting/my/info?status=edit");
        }}
      >
        edit(location.replace)
      </button>
      <br />
      <button
        onClick={() => {
          alert("edit");
          setClicked(true);
          router.push("/setting/my/info?status=edit");
        }}
      >
        edit(router.push)
      </button>
      <br />
      <button
        onClick={() => {
          alert("edit");
          setClicked(true);
          router.push("/setting/my/info?status=edit", undefined, {
            shallow: true,
          });
        }}
      >
        edit((shallow)router.push)
      </button>
    </>
  );
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
