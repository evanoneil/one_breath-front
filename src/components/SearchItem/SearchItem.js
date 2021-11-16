import React from 'react'
import * as classes from './SearchItem.module.css'

const SearchItem = props => {
  const {hit: news, components} = props
  return (
    <div
      className={classes.ResultWrapper}
      onClick={() => {
        window.open(news.url, '_blank')
      }}
    >
      <div style={{display: 'flex'}}>
        <div
          style={{
            backgroundImage: `url(${news.image})`,
            height: 45,
            minWidth: 60,
            maxWidth: 60,
            backgroundSize: 'contain',
            backgroundColor: '#ddd'
          }}
        >
          {/* <img src={news.image} alt='news' /> */}
        </div>
        <div className={classes.content}>
          {news?._highlightResult?.title?.value && (
            <p className={classes.title}>
              <components.Highlight hit={news} attribute='title' />
            </p>
            // <p
            //   className={classes.title}
            //   dangerouslySetInnerHTML={{__html: news._highlightResult.title.value}}
            // />
          )}
          {news?._highlightResult?.description?.value && (
            <p className={classes.desc}>
              <components.Highlight hit={news} attribute='description' />
            </p>
            // <p
            //   className={classes.desc}
            //   dangerouslySetInnerHTML={{
            //     __html: news._highlightResult.description.value
            //   }}
            // />
          )}
        </div>
      </div>
    </div>
  )
  // return (
  //   <div
  //     className={`aa-ItemContent ${classes.ItemWrapper}`}
  //     onClick={() => {
  //       window.open(hit.url)
  //     }}
  //   >
  //     <div className='aa-ItemTitle'>
  //       <p>
  //         <components.ReverseHighlight hit={hit} attribute='title' />
  //       </p>
  //       <p>
  //         <small>
  //           <components.ReverseHighlight hit={hit} attribute='description' />
  //         </small>
  //       </p>
  //     </div>
  //   </div>
  // )
}

export default SearchItem

// <a href={hit.url} className='aa-ItemLink'>
// </a>
