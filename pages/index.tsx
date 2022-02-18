import type { NextPage, GetStaticProps, GetServerSideProps} from "next";
import Head from "next/head";
import CardItem from "../Components/CardItem";
import Modal from "../Components/Modal";


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/feed");
  const posts = await res.json();
  return {
    props: {
      posts: posts,
    },
  };
};

const Home: NextPage = ({ posts }: any) => {
 


  return (
    <div className="px-2">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       {/* <Modal/> */}
      <div className="  p-3 flex flex-col items-center justify-center">
        {posts &&
          posts.map((post: any) => {
            return <CardItem key={post.id} post={post} />;
          })}
      </div>
    </div>
  );
};

export default Home;

// const getAuthor =prisma.post.create({
//   data: {
//     title:"This is a Test post by Ash",
//     desc:"Hello World",
//     tags:'General',
//     cover:"/eren.jpg",
//     author:{connect:{email:"ash@gmail.com"}}
//   },
// }).then(res=>console.log(res))
