import React, { Component } from 'react';
import axios from 'axios';
import HomeCard from './HomeCard';

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            homeData:[],
        }
    }
    

    componentDidMount=async()=>{
        const getHomeData = await axios.get(`${process.env.REACT_APP_URL}/getHomeData`)
        this.setState({
            homeData:getHomeData.data
        })
        console.log(this.state.homeData)
    }


    addToFavFunc=async(item)=>{
        await axios.post(`${process.env.REACT_APP_URL}/addFavData`,item)
    }




    render() {
        return (
            <HomeCard
            homeData={this.state.homeData}
            addToFavFunc={this.addToFavFunc}
            />
        )
    }
}

export default Home
