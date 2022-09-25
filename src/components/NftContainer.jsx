import React from 'react'
import { BsGem, BsHeart } from 'react-icons/bs'
import "./NftContainer.css"
import Data from "./Data"


export default function NftContainer() {
    
    const nftCard = (props) => {
        return(
            <div className="card-container" key={props.id}>
                <div className="card-top">
                    <BsGem className='gem'/>
                    <div className="likes">
                        <BsHeart className='heart'/>
                        <p className='like-no'>{props.likeNo}</p>
                    </div>
                </div>
                <img className='card-img' src={props.img} alt="NFT"/>
                <div className="card-bottom">
                    <div className="nft-name">
                        <p className='bored-ape'>{props.name}</p>
                        <p className='nft-id'>{props.nftId}</p>
                    </div>
                    <div className="nft-price">
                        <p className="bid">{props.bid}</p>
                        <p className="prices">{props.price}</p>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className='nftcomponent'>
        {Data.map(nftCard)}
    </div>
  )
}
