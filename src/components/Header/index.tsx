/*
 * @Description: 
 * @Autor: weiwei
 * @Date: 2023-02-15 09:36:22
 * @LastEditTime: 2023-02-15 15:52:08
 * @LastEditors: weiwei
 */
const PageHeader = () => {
    return (
        <header className="py-3 border-t-4 border-orange-500 bg-white sticky top-0">
             <div className="max-w-5xl mx-auto flex justify-between items-center">
             <h1 className="font-semibold font-mono text-xl">微博</h1>
             <div>
                <button>login</button>
             </div>
             </div>
        </header>
    )
}

export default PageHeader