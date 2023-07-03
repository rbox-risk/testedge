/** Add your relevant code here for the issue to reproduce */
import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const runtime = process.env.NEXT_RUNTIME || "";

  return {
    props: { runtime },
  };
};
export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <div>{props.runtime}</div>;
}

export const runtime = "experimental-edge";
