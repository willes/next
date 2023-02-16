import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/legacy/image'
import Link from 'next/link'
interface Item {
  item_info: {
    [key: string]: any
  },
  item_type: number
}
interface HomeProps {
  pageList: Item[];
  [key: string]: any;
}
const Home = ({pageList}: HomeProps) => {
  console.log('%c [ pageList ]-16', 'font-size:13px; background:pink; color:#bf2c9f;', pageList)
  return <div className="bg-white my-4 max-w-screen-lg mx-auto px-3">
    <ul>
      {
        pageList?.map((item: any, index: number) => {
          return <li  key={index} className="advertisement pt-5 px-2 mb-2 border-b-gray-300 border-b pb-3">
          <div className="user-message text-sm mb-1 py-1 flex text-gray-400 divide-x divide-gray-400">
            <Link href="https://juejin.cn/">
           {item?.item_info?.author_user_info?.user_name || item?.item_info?.item_user_info?.user_name}
            </Link>
            <div className="mx-2 pl-2">1天前</div>
            <div className="pl-2">{item?.item_info?.category?.category_name}</div>
          </div>
          <div className="advertisement flex">
         <div className="main flex-1  overflow-hidden mr-2">
            <h2 className="mb-2 text-base font-bold text-blue-gray-600">{item?.item_info?.title || item?.item_info?.article_info.title}</h2>
            <Link href="https://juejin.cn/">
            <p className='text-sm w-full text-gray-400 leading-6'>{item?.item_info?.brief || item?.item_info?.article_info?.brief_content}</p>
            </Link>
          </div>
          {(item?.item_info?.picture ||  item?.item_info?.article_info?.cover_image) &&  <div style={{ position: 'relative', width: 142, height: 80 }}>
            <Image src={item?.item_info?.picture ||  item?.item_info?.article_info?.cover_image}  className="rounded-md" layout="fill" alt="" loading="lazy"/>
      </div>
          }
         
         </div>
        </li>
        })
      }
    </ul>
  </div>
}
Home.getInitialProps = async () => {
  const res = await fetch('https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=6968628308280903198&spider=0', {method: 'POST', body:JSON.stringify({
    "id_type": 2,
    "client_type": 2608,
    "sort_type": 200,
    "cursor": "2",
    "limit": 20
})})
  const json = await res.json()
  return { pageList: json.data }
}

// 
export default Home