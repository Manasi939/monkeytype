import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class Nws extends Component {
    static defaultProps={
      category:"general",
      sizee:8
    }
    static propTypes={
      category:PropTypes.string,
      sizee:PropTypes.number
    }
    constructor(){
          super();
          this.state={
            articles :[],
             loading:false,
             page:1,
               totalResults:0
      }

    }
    async Update(){
      this.props.setProgress(100);
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7166685fb93e42298612c51f16c32442&page=${this.state.page}&pageSize=${this.props.sizee}`
      this.setState({loading:true })
      this.props.setProgress(30);
      let data=await fetch(url)
      let parsed=await data.json()
      this.props.setProgress(70);
     
      this.setState({articles: parsed.articles, loading:false ,   totalResults: parsed.totalResults })
      this.props.setProgress(100);
    }
    async componentDidMount(){
      this.Update();
     }
    handlePrev= async ()=>{ 
      this.setState({
      
      page: this.state.page-1,
  
     })

      this.Update();
     
 
    }
    handleNext= async ()=>{
      
      this.setState({
       page: this.state.page+1,
         })
          this.Update();
   }
   fetchMoreData= async()=>{
  
    this.setState({page: this.state.page+1 })
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7166685fb93e42298612c51f16c32442&page=${this.state.page+1}&pageSize=${this.props.sizee}`
    this.setState({loading:true })
    let data=await fetch(url)
    let parsed=await data.json();
    this.setState({articles: this.state.articles.concat(parsed.articles) , loading:false ,   totalResults: parsed.totalResults })
  }

  render() {
       
    return (
           
      <div  className="container my-3">
        <h1 style={{marginTop:"70px"}} >News Monkey</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    hasMore={this.state.articles.length!==this.state.totalResults}
    loader={<Spinner />}
    
  >
        <div className="row my-3 container">
        {
        this.state.articles.map((element)=>{
         return <div className='col-md-4 my-3' key={element.title }><Newsitem title={element.title?(element.title.length>=22?element.title.slice(0,22):element.title):element.title} desc={element.description?(element.description.length>=45?element.description.slice(0,44):element.description):element.description} imagee={element.urlToImage} url={element.url} date={element.publishedAt}/></div>
        })
          
       
       }
    </div>
    </InfiniteScroll>
    {/* <div className="buttons d-flex justify-content-between">
    <button disabled={this.state.page<=1}  onClick={this.handlePrev} className="btn btn-dark">&larr; Previous</button>
    <button disabled={(this.state.page)>=(Math.ceil(this.state.totalResults/8))}  onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button> 
    </div>
   </div>  */}
   </div>
    )
  }
}

export default Nws
