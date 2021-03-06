import { DataFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Layout } from '~/components/Layout';
import { PostDetails } from '~/components/PostDetails';
import { PostTags } from '~/components/PostTags';
import { ScrollProgressBar } from '~/components/ScrollProgressBar';
import { getDefaultRouteMetadata } from '~/config/meta';
import { getPost } from '~/lib/posts';
import { InferAwaitedReturn } from '~/lib/types';

export const loader = async ({ params }: DataFunctionArgs) => {
  try {
    return await getPost(params.slug as string);
  } catch {
    throw new Response('Not Found', {
      status: 404,
    });
  }
};

export const meta: MetaFunction = ({ data }: { data: InferAwaitedReturn<typeof loader> }) => {
  return getDefaultRouteMetadata({
    titlePrefix: data.title,
    description: data.preview,
  });
};

export default function PostLayout() {
  const post = useLoaderData<InferAwaitedReturn<typeof loader>>();

  return (
    <Layout>
      <ScrollProgressBar />

      <article>
        <header>
          <h1 className="font-mono text-2xl">{post.title}</h1>

          <PostDetails
            className="mb-2"
            timeToReadMins={post.timeToReadMins}
            timestamp={post.timestamp}
          />

          <PostTags tags={post.tags} />
        </header>
        <section
          className="prose dark:prose-invert dark:prose-headings:text-gray-100 dark:text-gray-200 my-8"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></section>
      </article>
    </Layout>
  );
}
