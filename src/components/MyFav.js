import axios from 'axios';
import React, { Component } from 'react';
import ModalForm from './ModalForm';
import MyFavCard from './MyFavCard';

class MyFav extends Component {
constructor(props){
    super(props)
    this.state={
        FavData:[],
        show:false,
        indexState:0,
        name:'',
        img:''
    }
}

componentDidMount=async()=>{
const allFavData = await axios.get(`${process.env.REACT_APP_URL}/getAllFavData`)

this.setState({
    FavData:allFavData.data
})
}


deleteFunc=async(idx)=>{
const id=this.state.FavData[idx]._id

const newDataArr=await axios.delete(`${process.env.REACT_APP_URL}/deleteFromFav/${id}`)

this.setState({
    FavData:newDataArr.data
})
}

UpdateFunc=(index)=>{

    this.setState({
        show:true,
        indexState:index,
        name:this.state.FavData[index].name,
        img:this.state.FavData[index].img
    })
}

handleClose=()=>{
    this.setState({ show:false,})
}

updateFavDataFunc=async(event)=>{
    event.preventDefault();
    const id = this.state.FavData[this.state.indexState]._id;
    const obj={
        name:event.target.drinkName.value,
        img:event.target.image.value
    }

    const updatedDataArr= await axios.put(`${process.env.REACT_APP_URL}/UpdateData/${id}`,obj)

    this.setState({
        FavData:updatedDataArr.data,
        show:false
    })

}

    render() {
        return (
            <>
            <MyFavCard
            FavData= {this.state.FavData}
            deleteFunc={this.deleteFunc}
            UpdateFunc={this.UpdateFunc}
            />
            <ModalForm
            handleClose={this.handleClose}
            show={this.state.show}
            updateFavDataFunc={this.updateFavDataFunc}
            name={this.state.name}
            img={this.state.img}
            />
            </>
        )
    }
}

export default MyFav
