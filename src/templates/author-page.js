import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import BlogPostPreviewGridAuthor from '../components/blog-post-preview-grid-author'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {
  toPlainText,
  buildImageObj,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import PortableText from '../components/portableText.js'

import {imageUrlFor} from '../lib/image-url'

export const query = graphql`
  query AuthorPageTemplateQuery($name: String!) {
    post: sanityAuthor(name: {eq: $name}) {
      name
      _id
      image {
        ...SanityImage
        alt
        caption
      }
      slug {
        current
      }
      _rawBio
    }

    posts: allSanityPost(filter: {authors: {elemMatch: {author: {name: {eq: $name}}}}}) {
      edges {
        node {
          id
          authors {
            author {
              name
              id
            }
          }
          categories {
            title
            _type
            _id
            id
            color
          }
          publishedAt
          mainImage {
            ...SanityImage
            alt
            caption
          }
          title
          _rawExcerpt
          Action1Title
          Action1URL
          slug {
            current
          }
        }
      }
    }
  }
`

const AuthorPageTemplate = props => {
  const {data, errors} = props

  const post = data && data.post
  // const posts = data && data.posts
  // console.log(posts)

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {post && (
        <SEO
          title={post.title || post.name}
          description={toPlainText(post._rawBio)}
          image={post.socialImage}
        />
      )}

      {errors && (
        <Container>
          {post.socialImage}
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      <div className='ph5 mb6 mt4'>
        <div className='dt mw6'>
          <div className='dtc v-btm'>
            <img
              className='br-100 db'
              src={imageUrlFor(buildImageObj(post.image))
                .width(150)
                .height(150)
                // .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .auto('format')
                .url()}
              // alt={mainImage.alt}
            />{' '}
          </div>
          <div className='dtc v-btm pl3'>
            <h1 className='db '>{post.name}</h1>
          </div>
        </div>

        <h2>
          <PortableText blocks={post._rawBio} />
        </h2>
      </div>

      {/* {post && <BlogPost {...post} />} */}

      {postNodes && <BlogPostPreviewGridAuthor nodes={postNodes} />}
    </Layout>
  )
}

export default AuthorPageTemplate
