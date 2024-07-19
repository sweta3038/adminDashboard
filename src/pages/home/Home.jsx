import React from 'react'
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import List from '../../components/list/List'

const home = () => {
  return (
    <div className='home'>
      <>
      <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
      <div className='widgets'>
        <Widget type="student"/>
        <Widget type="courses"/> 
        <Widget type="earnings"/> 
        <Widget type="balance"/> 
      </div>
      <div className='charts'>
        <Featured/>
        <Chart title="Last 6 months (Revenue)" aspect={2/1}/>
      </div>
      <div className='listContainer'>
        <div className='listTitle'>Latest Tansaction</div>
        <List/>
      </div>
      </div>
      </>
    </div>
  )
}

export default home
