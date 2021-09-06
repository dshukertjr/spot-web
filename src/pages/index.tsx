/* eslint-disable jsx-a11y/media-has-caption */
import { createClient } from '@supabase/supabase-js'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Layout from '../components/layout'
import VideoComponent from '../components/video-component'
import { Video } from '../models/video'
import { SITE_NAME, SITE_URL } from '../util/constants'

export default function Home({ videos }: { videos: Video[] }): ReactElement {
  return (
    <div>
      <Head>
        <title>Home | {SITE_NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://spotvideo.app/" key="ogurl" />
        <meta property="og:image" content={`${SITE_URL}/img/spot.jpg`} key="ogimage" />
        <meta property="og:site_name" content={SITE_NAME} key="ogsitename" />
        <meta property="og:title" content={SITE_NAME} key="ogtitle" />
        <meta
          property="og:description"
          content="Open source map based video sharing social app created with Flutter, Supabase and lots of love."
          key="ogdesc"
        />{' '}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dshukertjr" />
        <meta name="twitter:title" content={SITE_NAME} />
        <meta
          name="twitter:description"
          content="Open source map based video sharing social app created with Flutter, Supabase and lots of love."
        />
        <meta name="twitter:image" content={`${SITE_URL}/img/spot.jpg`} />
      </Head>

      <Layout>
        <div className="md:flex md:flex-wrap">
          {videos.map((video) => {
            return (
              <div key={video.id} className="md:flex-grow md:w-1/2">
                <VideoComponent video={video}></VideoComponent>
              </div>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)

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
