import Link from "next/link";
import { useRouter } from "next/router";
import Hello from "../components/hello";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/vegetablesquiz");
  };
  return (
    <div>
      <h1>home</h1>
      <Hello />
      <Link href="/vegetablesquiz">
        <a>Vegetables Quiz</a>
      </Link>
      <button onClick={handleClick}>Same Vegetables Quiz</button>
    </div>
  );
};

export default Home;
