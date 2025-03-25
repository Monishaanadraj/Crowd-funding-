import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from "./addNew.module.css";
import { Navigate } from 'react-router-dom';


const AddNew = () => {
  const [NewName, setNewName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [Category, setCategory] = useState("")
  const [file, setfilename] = useState("")
  const [updateNew, setUpdateNew] = useState(false)

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const handlePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }


  const handleButton = () => {
    if (NewName === '') return alert('Enter Name')
    if (description === '') return alert('Enter Description')
    if (price === '') return alert('Enter Price')
    if (Category === '') return alert('Enter Category')
    if (file === '') return alert("Please select Image")
    saveToDb({NewName, description, price, Category, file})
  }

  const saveToDb = obj => {
    console.log(obj);
    const userId = localStorage.getItem("userId")
  
    console.log(NewName, description, price, Category, file, userId);
    let inputObj = {
      NewName, description, price, Category, file, userId
    }

    axios.post("http://localhost:3001/user/New_info", inputObj)
      .then(response => {
        console.log(response);
        alert("Added Successfully")
        setUpdateNew(true)
      })
      .catch(err => {
        console.log(err);
        alert("Failed To Add")
      })

  }

  const handlefile = e => {
    const readImage = file => {
      const reader = new FileReader();
      reader.addEventListener('load', (res) => {
        setfilename(res.target.result)
      })
      reader.readAsDataURL(file);
    }
    const files = e.target.files;
    if (!files || !files[0]) return alert("File upload not supported");
    [...files].forEach(readImage)
  }

  if (updateNew) {
    return <Navigate to="/mydetails" />
  }

  return (
    <>
      <div className={style.heading}>
        <h1>Create a New Campaign</h1>
      </div>
      <div className={style.headcontainer}>
        <div className={style.container}>
          <div className={style.content}>
            <label>Name</label>
            <input placeholder='Name' onChange={handleNewName} value={NewName} />

            <label>Description</label>
            <input placeholder='Description' onChange={handleDescription} value={description} />
          </div>
          <div className={style.content}>
            <label>Total Amount</label>
            <input placeholder='Total Amount' onChange={handlePrice} value={price} />

            <label>Category</label>
            <select onChange={handleCategory} value={Category} >
              <option>Choose Category</option>
              <option>Medical</option>
              <option>Education</option>
              <option>Animal</option>
              <option>Memorial</option>
              <option>Wedding</option>
            </select>
          </div>
          <div className={style.content}>
            <label>Image</label>
            <input type="file" className={style.image} onChange={handlefile} />
          </div>
        </div>
      </div>
      <button className={style.btn} onClick={handleButton}>Add</button>
    </>

  )
}

export default AddNew