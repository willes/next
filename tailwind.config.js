/*
 * @Description: 
 * @Autor: weiwei
 * @Date: 2023-02-15 09:06:56
 * @LastEditTime: 2023-02-15 09:31:50
 * @LastEditors: weiwei
 */
/** @type {import('tailwindcss').Config} */
const colors = require(`tailwindcss/colors`);

module.exports = {
  content: [],
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // 'media' or 'class'
  theme: { extend: { colors: { lime: colors.lime } } },
  plugins: []
}
