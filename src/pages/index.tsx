/* eslint-disable jsx-a11y/media-has-caption */
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Layout from '../components/layout'
import VideoComponent from '../components/video-component'
import { Video } from '../models/video'
import { SITE_NAME, supabase } from '../util/constants'

export default function Home({ videos }: { videos: Video[] }): ReactElement {
  return (
    <div>
      <Head>
        <title>Home | {SITE_NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="md:flex md:flex-wrap">
          {videos.map((video) => {
            return (
              <div key={video.id} className="md:flex-grow md:w-1/2">
                <div className="md:w-5/6">
                  <VideoComponent video={video}></VideoComponent>
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select('id, url, description, users!fk_users ( name, image_url )')
    .order('created_at', { ascending: false })
    .limit(12)

  if (error) {
    return {
      props: [],
    }
  }

  return {
    props: {
      videos: data,
    },
  }
}
