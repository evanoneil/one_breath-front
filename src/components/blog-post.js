import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj, filterOutDocsWithoutSlugs} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'
import SignUp from '../components/sign-up'
import Helmet from 'react-helmet'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

import {FaTwitter, FaFacebook, FaEnvelope} from 'react-icons/fa'

import styles from './blog-post.module.css'

const serializers = {
  types: {
    youtube: ({node}) => {
      const {url} = node
      const id = getYouTubeId(url)
      return <YouTube videoId={id} />
    }
  }
}

function BlogPost (props) {
  const {
    _rawBody,
    blocks,
    serializers,
    slug,
    authors,
    categories,
    title,
    mainImage,
    publishedAt,
    Action1Title,
    Action1URL,
    Action2Title,
    Action2URL,
    Action3Title,
    Action3URL
  } = props
  const dateSegment = format(publishedAt, 'YYYY/MM')
  const path = `/newsroom/${dateSegment}/${slug.current}`
  const siteUrl = `https://www.onebreathhou.org`
  const shareUrl = `${siteUrl}${path}`
  const fbShare = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
  const twitterShare = `https://twitter.com/intent/tweet?text="${title}"%20by%20%40onebreathhou%20${shareUrl}`
  const emailShare = `mailto:?subject=I%20just%20read%20this%20great%20article%20on%20One%20Breath%20Partnership's%20Website!&body=${shareUrl}`
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1920)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
          <div className={styles.example}>
            <div>

              <div className={styles.publishedAt}> </div>
            </div>
            <h1 className={styles.title}>{title}</h1>
            <div>
              {' '}
              {publishedAt && (
                <div className={styles.publishedAt}>
                  {differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? distanceInWords(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), 'MMMM Do, YYYY')}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <Container>
        <div>
          <Helmet>

          </Helmet>
          <p className={styles.caption}>{mainImage.caption}</p>
          <div className={styles.grid}>
            <div />
            <div className={styles.mainContent}>
              {authors && <AuthorList items={authors} />}

              {_rawBody && <PortableText blocks={_rawBody} serializers={serializers} />}
              
              <div>
              <span>
                {categories.map(category => {
                  console.log(categories)
                const CatURL = `/categories/${category.slug.current}`
return (
                  <a href={CatURL} className={styles.pill} key={category._id}>
                    {category.title}
                  </a>
                  )
})}
              </span>

           
              
                <hr className='mt5 bw1 b--solid' />

                <h4 className='ttu'>Share this article</h4>
                <a href={twitterShare} target='blank'>
                  <FaTwitter className='f2 mr2 ml2' />
                </a>
                <a href={fbShare} target='blank'>
                  <FaFacebook className='f2 mr2 ml2' />
                </a>
                <a href={emailShare} target='blank'>
                  <FaEnvelope className='f2 mr2 ml2' />
                </a>
                {/* <hr className="mt4" /> */}
              </div>
            </div>
            {/* <aside className={styles.metaContent}></aside> */}
          </div>
        </div>
        <br />
        <SignUp />
      </Container>
    </article>
  )
}

export default BlogPost
