import * as React from 'react'
import {Input, Col, Row, List, Card, Avatar, Spin} from 'antd'
import UserDetail from "./user-detail"
import {capitalize} from '../../utils/common'
import {IUser} from "./interfaces-types/IUser"
import InfiniteScroll from 'react-infinite-scroller'
import * as _ from "lodash";


interface IUsersList {
    users: IUser[]
    settings: any
    fetchUsers: any
    clearUsers: any
}


const UsersList = ({users, settings, fetchUsers, clearUsers}: IUsersList) => {
    // Creating state and its update functions for each property.
    const [dataSource, setDataSource] = React.useState(users)
    const [loading, setLoading] = React.useState(false)
    const [hasMore, setHasMore] = React.useState(true)
    const [searchData, setSearchData] = React.useState([])
    const [searchString, setSearchString] = React.useState('')

    // Optimizing search, so that it works faster and don't search on every single typed key stroke
    // if the user is typing fast.
    const debouncedSearch = _.debounce(search, 250);

    // Hardcode gb if store is not filled yet.
    const locale = settings.locale || 'gb'

    // Antd components.
    const Search = Input.Search

    // Hardcoded vars.
    const batch = 50
    const listLimit = 1000

    // Pagination fetch function.
    async function fetchData(page: number) {
        await fetchUsers(page, locale)
    }

    // Callback function for scrolling.
    async function handleInfiniteOnLoad(page: number) {
        let data = dataSource
        setLoading(true)
        if (data.length >= listLimit - batch) {
            setLoading(false)
            setHasMore(false)
        }
        data = [...data, ...users];
        setDataSource(data)
        await fetchData(page)

        setLoading(false)
    }

    // Main search logic.
    function search(search_string) {
        let data

        setSearchString(search_string)

        // Filter the current dataSource and search for the 'search_string'.
        data = _.filter(dataSource, function(user) {
            let searched_string = user.name.first + ' ' + user.name.last
            return searched_string.includes(search_string.toLowerCase())
        })

        // Set the state, based on the results and the query string.
        if(data.length && search_string.length){
            setLoading(false)
            setHasMore(false)
            setSearchData(data)
            clearUsers()
        } else {
            if (data.length >= listLimit) {
                setLoading(false)
                setHasMore(false)
            } else {
                setLoading(false)
                if (search_string.length){
                    setHasMore(false)
                } else {
                    setHasMore(true)
                }
            }
            setSearchData([])
        }
        return
    }


    return (
        <div className="users-list">
            <Row>
                <Col xs={{span: 22, offset: 0}}>
                    <Row className='search-wrapper'>
                        <Col xs={{span: 14, offset: 1}}>
                            <Search
                                placeholder="Search users"
                                onSearch={value => search(value)}
                                style={{width: '100%'}}
                                onChange={event => debouncedSearch(event.target.value)}/>
                        </Col>
                        <Col xs={{span: 5, offset: 1}}>
                            <div className="users-count">
                                Count:{searchString ? searchData.length+'/'+dataSource.length : dataSource.length}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span: 24, offset: 0}}>
                            <InfiniteScroll
                                initialLoad={true}
                                pageStart={0}
                                loadMore={(page) => handleInfiniteOnLoad(page)}
                                hasMore={!loading && hasMore}
                                useWindow={true}
                                threshold={0}>
                                <List grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,}}
                                      dataSource={searchString.length ? searchData : dataSource}
                                      locale={{ emptyText: <div></div> }}
                                      renderItem={item => (
                                          <List.Item>
                                              <Card title={
                                                  <div className="card-title">
                                                      <Avatar src={item.picture.thumbnail}/>
                                                      {capitalize(item.name.first) + ' ' + capitalize(item.name.last)}
                                                  </div>
                                              }>
                                                  <div className="email">{item.email}</div>
                                                  <UserDetail user={item}/>
                                              </Card>
                                          </List.Item>
                                      )}/>
                                {hasMore && loading && searchString.length === 0 &&(
                                    <div className="demo-loading-container">
                                        <Spin /> loading...
                                    </div>
                                )}
                                {!hasMore && !searchData.length && searchString.length === 0 &&(
                                    <div className="demo-loading-container">
                                        end of users catalog
                                    </div>
                                )}
                                {!hasMore && searchData.length > 0 && searchString.length &&(
                                    <div className="demo-loading-container">
                                        end of search results
                                    </div>
                                )}
                                {!hasMore && searchData.length === 0 && searchString.length && (
                                    <div className="demo-loading-container">
                                        no results
                                    </div>
                                )}
                            </InfiniteScroll>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default UsersList