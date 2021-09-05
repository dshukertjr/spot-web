/* eslint-disable jsx-a11y/media-has-caption */
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Layout from '../../components/layout'
import VideoComponent from '../../components/video-component'
import { Video } from '../../models/video'
import { SITE_NAME, supabase } from '../../util/constants'

export default function Post({ video }: { video: Video }): ReactElement {
  if (!video) {
    return (
      <Layout>
        <h1 className="text-white text-center font-bold text-4xl mt-24">404</h1>
      </Layout>
    )
  }
  return (
    <div>
      <Head>
        <title>
          Post by {video.users.name} | {SITE_NAME}
        </title>
        <meta name="description" content={video.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <VideoComponent key={video.id} video={video} autoPlay={true}></VideoComponent>
      </Layout>
    </div>
  )
}

export const getServerSideProps: GetStaticProps = async (context) => {
  const videoId = context.params?.id
  const { data, error } = await supabase
    .from('videos')
    .select('id, url, description, users!fk_users ( name, image_url )')
    .eq('id', videoId)
    .single()

  if (error) {
    return {
      props: {},
    }
  }

  return {
    props: {
      video: data,
    },
  }
}