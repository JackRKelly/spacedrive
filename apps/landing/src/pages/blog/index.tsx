import { allPosts } from '@contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { BlogTag } from '~/components/BlogTag';
import PageWrapper from '~/components/PageWrapper';

export function getStaticProps() {
	return { props: { posts: allPosts } };
}

export default function BlogPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<PageWrapper>
			<div className="lg:prose-xs prose dark:prose-invert prose-a:no-underline container m-auto mb-20 flex max-w-4xl flex-col p-4 pt-32">
				<Head>
					<title>Spacedrive Blog</title>
					<meta name="description" content="Get the latest from Spacedrive." />
				</Head>
				<section>
					<h1 className="fade-in-heading m-0">Blog</h1>
					<p className="fade-in-heading animation-delay-1">
						Get the latest from Spacedrive.
					</p>
				</section>
				<section className="animation-delay-2 mt-8 grid grid-cols-1 gap-4 will-change-transform fade-in sm:grid-cols-1 lg:grid-cols-1">
					{posts.map((post) => (
						<Link
							key={post.slug}
							href={post.url}
							className="relative z-0 flex cursor-pointer flex-col gap-2 overflow-hidden rounded-xl border border-gray-500 transition-colors"
						>
							{post.image && (
								<Image
									src={post.image}
									alt={post.imageAlt ?? ''}
									className="inset-0 -z-10 m-0 w-full rounded-t-xl object-cover md:h-96"
									// NOTE: Ideally we need to follow this specific ratio for our blog images
									height={400}
									width={800}
								/>
							)}
							<div className="p-8">
								<h2 className="text2xl m-0 md:text-4xl">{post.title}</h2>
								<small className="m-0">{post.readTime}</small>
								{/* <p className="line-clamp-3 my-2">{post.excerpt}</p> */}
								<p className="m-0 text-white">
									by {post.author} &middot;{' '}
									{new Date(post.date).toLocaleDateString()}
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{post.tags.map((tag) => (
										<BlogTag key={tag} name={tag} />
									))}
								</div>
							</div>
						</Link>
					))}
				</section>
			</div>
		</PageWrapper>
	);
}
