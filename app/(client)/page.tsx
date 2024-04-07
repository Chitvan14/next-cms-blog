import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  // const posts: Post[] = await getPosts();
  const posts: Post[] = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
  ];

  return (
    <div>
      <div className="flex">
        {/* <div className=" "></div> */}
        <div className="border-b-4 border-red-500 mb-1 w-4/5 text-lg text-red-500">
          {" "}
          TOP NEWS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full">
        <div className="md:col-span-2  h-auto">
          {posts?.length > 0 && (
            <>
              <PostComponent
                key={posts[0]?._id}
                post={posts[0]}
                cardNumber={1}
              />
              <div className="md:col-span-1 bg-yellow-500 h-16 md:hidden block mb-2">
                <div className="text-xs text-gray-500">Ad</div>
                <div></div>
              </div>

              {posts?.slice(2, 4)?.map((post) => (
                <PostComponent key={post?._id} post={post} cardNumber={2} />
              ))}
            </>
          )}
        </div>

        <div className="md:col-span-2 md:border-l-2 md:border-gray-200  pl-2 h-auto">
          {" "}
          {posts?.length > 0 &&
            posts
              ?.slice(4, 10)
              .map((post) => (
                <PostComponent key={post?._id} post={post} cardNumber={2} />
              ))}
        </div>
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
