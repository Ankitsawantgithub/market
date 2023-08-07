import React from 'react'
import Link from 'next/link';
//internal link 
import Style from './Discover.module.css';

const Discover = () => {
  //dicover navigtion menu
  const discover = [{
    name :"Collection",
    link :"collection"
  },
  {
    name :"Search",
    link :"search"
  },
  {
    name :"Author Profile",
    link :"author-profile"
  },
  {
    name :"Account Setting",
    link :"account-setting"
  },
  {
    name :"Connect Wallet",
    link :"connect-wallet"
  },
  {
    name :"Blog",
    link :"blog"
  }
  ]
  return (
    <div>
      {discover.map((el, i)=>(
        <div key={i+1} className ={Style.discover}><Link href={{ pthname: '${el.link}'}}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Discover;
