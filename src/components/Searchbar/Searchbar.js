import React, {useState, useCallback, useRef, useEffect} from 'react'
import algoliasearch from 'algoliasearch'
import _ from 'lodash'

import classes from './Searchbar.module.css'

const appId = '79W2NPTLRJ'
const apiKey = 'f2183a110c74f6068718cdf58ab60f32'
const searchClient = algoliasearch(appId, apiKey)

const searchIndex = searchClient.initIndex(
  'netlify_ddf6d339-da4b-46d5-9c28-7d3f070c85d6_master_all'
)

const Searchbar = props => {
  const [search, setSearch] = useState('')
  const [searching, setSearching] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const wrapperRef = useRef(null)

  const useOutsideAlerter = ref => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearchResult([])
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  useOutsideAlerter(wrapperRef)

  const searchNews = async (keywords = search) => {
    try {
      setSearching(true)
      setIsSearchOpen(false)
      console.log('start-searchnews-', {keywords, len: keywords.length})
      if (keywords.length < 3) {
        console.log('enter-more-key')
        setSearchResult([])
        return
      }
      const res = await searchIndex.search(keywords)
      const {hits} = res
      console.log('search-res-', hits)
      setSearchResult(hits)
      setSearching(false)
    } catch (error) {
      setSearching(false)
      setSearchResult([])
      console.log('error-searchnews-', error)
    }
  }
  const debounceLoadData = useCallback(_.debounce(searchNews, 300), [])

  // useEffect(() => {
  //   searchNews()
  // }, [search])

  return (
    <div className={`${classes.SearchBoxWrapper}`}>
      <input
        className={classes.Search}
        placeholder='Enter a topic to search our Newsroom'
        value={search}
        onChange={e => {
          const keywords = e.target.value
          setSearch(keywords)
          debounceLoadData(keywords)
        }}
      />
      <div className={classes.SearchIcon}>
        <svg
          className='aa-SubmitIcon'
          viewBox='0 0 24 24'
          width='20'
          height='20'
          fill='currentColor'
        >
          <path d='M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z' />
        </svg>
      </div>
      {searchResult.length > 0 && (
        <div className={classes.ResultWrapper} ref={wrapperRef}>
          <ul>
            {searchResult.map((news, newsIndex) => {
              return (
                <li
                  key={`data-${newsIndex}`}
                  onClick={() => {
                    window.open(news.url, '_blank')
                    setSearchResult([])
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
                        <p
                          className={classes.title}
                          dangerouslySetInnerHTML={{__html: news._highlightResult.title.value}}
                        />
                      )}
                      {news?._highlightResult?.description?.value && (
                        <p
                          className={classes.desc}
                          dangerouslySetInnerHTML={{
                            __html: news._highlightResult.description.value
                          }}
                        />
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Searchbar
