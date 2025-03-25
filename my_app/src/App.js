import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/login/signup';
import Password from './components/login/password';
import About from './components/aboutus/about';
import Contact from './components/contactus/contact';
import Donate from './components/donating/donate/donate';
import Medical from './components/donating/medical/medical';
import AddNew from './components/charity/addNew';
import Update from './components/charity/update';
import Animal from './components/donating/animal/animal';
import Education from './components/donating/education/education';
import Memorial from './components/donating/memorial/memorial';
import Wedding from './components/donating/wedding/wedding';
import Payment from './components/payment';
import Homepage from './componentsAfterLogin/homepage/homepage';
import Nav from './componentsAfterLogin/navAfterLogin/nav';
import Aboutus from './componentsAfterLogin/aboutus/aboutus';
import Donates from './componentsAfterLogin/donating/donates/donates';
import Educations from './componentsAfterLogin/donating/educations/educations';
import Medicals from './componentsAfterLogin/donating/medicals/medicals';
import Memorials from './componentsAfterLogin/donating/memorials/memorials';
import Weddings from './componentsAfterLogin/donating/weddings/weddings';
import Animals from './componentsAfterLogin/donating/animals/animals';
import Logincharity from './components/charity/logincharity/logincharity';
import Signupcharity from './components/charity/logincharity/signupcharity';
import Passwordcharity from './components/charity/logincharity/passwordcharity';
import MyDetails from './components/charity/mydetails/mydetails';
import Page from './componentsAfterLogin/page/page';
import ContactUs from './componentsAfterLogin/contact/contactus';
import AdminLogin from './adminComponents/adminLogin/login';
import View from './adminComponents/view/view';
import Adminupdate from './adminComponents/view/update';
import History from './adminComponents/history/history';
import DonorHistory from './components/donorHistory/donor';

function App() {
  return (

    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/password' element={<Password />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/navbar' element={<Navbar />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/donate' element={<Donate />} />
        <Route exact path='/addNew' element={<AddNew />} />
        <Route exact path= "/updateDetails/:detailsid" element={<Update />} />
        <Route exact path='/medical' element={<Medical />} />
        <Route exact path='/animal' element={<Animal />} />
        <Route exact path='/education' element={<Education />} />
        <Route exact path='/memorial' element={<Memorial />} />
        <Route exact path='/wedding' element={<Wedding />} />
        <Route exact path='/homepage' element={<Homepage />} />
        <Route exact path='/logincharity' element={<Logincharity />} />
        <Route exact path='/signupcharity' element={<Signupcharity />} />
        <Route exact path='/passwordcharity' element={<Passwordcharity />} />
        <Route exact path='/nav' element={<Nav />} />
        <Route exact path='/aboutus' element={<Aboutus />} />
        <Route exact path='/contactus' element={<ContactUs/>}/>
        <Route exact path='/animals' element={<Animals />} />
        <Route exact path='/donates' element={<Donates />} />
        <Route exact path='/educations' element={<Educations />} />
        <Route exact path='/medicals' element={<Medicals />} />
        <Route exact path='/memorials' element={<Memorials />} />
        <Route exact path='/weddings' element={<Weddings />} />
        <Route exact path='/index' element={<Payment />} />
        <Route exact path='/mydetails' element={<MyDetails />} />
        <Route exact path='/page' element={<Page/>} />
        <Route exact path='/donor' element={<DonorHistory/>}/>

        <Route exact path='/admin/login' element={<AdminLogin />} />
        <Route exact path='/admin/view' element={<View/>} />
        <Route exact path="/admin/update/:detailsid" element={<Adminupdate/>} />
        <Route exact path='/admin/history' element={<History/>}/>
        <Route exact path='*' element={<h1>404 Not Found</h1>} />
        
      </Routes>
    </>
  );
}

export default App;
