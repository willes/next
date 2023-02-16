/*
 * @Description: 
 * @Autor: weiwei
 * @Date: 2023-02-14 16:38:13
 * @LastEditTime: 2023-02-16 10:10:28
 * @LastEditors: weiwei
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['/', 'p3-juejin.byteimg.com']
  }
}

module.exports = nextConfig
