import { useEffect, useState } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CartDateSlug() {
  const router = useRouter();
  const { date } = router.query;

  useEffect(() => {}, []);

  return (
    <>
      <h1>{date}</h1>
      <Link href="/cart/2023/02/24">
        <a>2023/02/24 이동</a>
      </Link>
    </>
  );
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
