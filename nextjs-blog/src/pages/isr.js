import Head from "next/head";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  };
}

export default function Isr({ time }) {
  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}
