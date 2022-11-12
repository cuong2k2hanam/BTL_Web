import './Category.css'
import React, {useState} from 'react'
import {getItems} from './CategoryItems'
import {FaArrowDown, FaArrowUp} from 'react-icons/fa'

export default function Category() {
  const data = getItems()

  const [products, setProducts] = useState(data);
  const [sorted, setSorted] = useState({ sorted: '', reversed: false })

  // Xắp xếp theo tên
  function sortByName() {
    setSorted({ sorted: 'name', reversed: !sorted.reversed})

    let productCopy = [...products]
    productCopy.sort(function sortData(a, b) {
      console.log (a.name.localeCompare(b.name))
      if (sorted.reversed) {
        return -a.name.localeCompare(b.name)
      }
      return a.name.localeCompare(b.name)
    })

    setProducts(productCopy)
  }

  // Xắp xếp theo loại
  function sortByCategory() {
    setSorted({ sorted: 'category', reversed: !sorted.reversed})

    let productCopy = [...products]
    productCopy.sort(function sortData(a, b) {
      console.log (a.category.localeCompare(b.category))
      if (sorted.reversed) {
        return -a.category.localeCompare(b.category)
      }
      return a.category.localeCompare(b.category)
    })
    setProducts(productCopy)
  }

  // In mũi tên
  function renderArrow() {
    if (sorted.reversed) {
      return <FaArrowUp />
    } else {
      return <FaArrowDown />
    }
  }

  // Tìm kiếm
  function handleSearch(e) {
    setSorted({sorted: '', reversed: false})

    let value = e.target.value

    let searchResult = data.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase())
    })

    console.log(searchResult)
    setProducts(searchResult)

  }

  return (
    <>
      

      <div className="category">
        <div className="search">
          <input type="text" name="search" id="search" placeholder='Tìm kiếm tên sản phẩm' onChange={e => handleSearch(e)}/>
        </div>
        <ul className="list_product">
          <li className="tb-head">
            <div className="col-1" onClick={sortByName}>Tên {
              sorted.sorted === 'name' ? renderArrow() : null
            }</div>
            <div className="col-2">Hình ảnh</div>
            <div className="col-3" onClick={sortByCategory}>Loại máy {
              sorted.sorted === 'category' ? renderArrow() : null
            }</div>
          </li>
          {
            products.map((item, index) => {
              return (
                <li className='tb-row' key={index}>
                  <div className='col-1' data-label='Tên'>{item.name}</div>
                  <div className='col-2' data-label='Hình ảnh'><img src={require('../../../image/pc_sample.png')} alt="" /></div>
                  <div className='col-3' data-label='Loại máy'>{item.category}</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}
