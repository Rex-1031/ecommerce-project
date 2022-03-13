import React, { Component } from 'react'
import PreviewCollection from '../../components/preview-collection/PreviewCollection';
import SHOP_DATA from './shop.data'

export default class Shop extends Component {
    constructor(props){
        super(props);

         
        this.state ={
            collections: SHOP_DATA 
        }
    }



  render() {
    const {collections} = this.state

    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollectionProps}) =>(
            <PreviewCollection key={id} {...otherCollectionProps} />
          ))
        }

      </div>
    )
  }
}
