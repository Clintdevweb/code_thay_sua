import React, { Component } from 'react'
import { dangKiNguoiDung, updateNguoiDung } from '../redux/actions/BaiTapQuanLiAction'
import { connect } from 'react-redux'


class FormDangKi extends Component {

    state = {
        taiKhoan: '',
        matKhau: '',
        email: '',
        hoTen: '',
        soDienThoai: '',
        loaiNguoiDung: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state)
        this.props.dispatch(dangKiNguoiDung(this.state))
    }

    handleChangeInput = (event) => {
        let { name, value } = event.target
        this.setState({
            [name]:value
        })

        // console.log(name, value)
    }

    static getDerivedStateFromProps(newProps, currentState){
        if(newProps.nguoiDungChinhSua.taiKhoan !== currentState.taiKhoan){
           return currentState={...newProps.nguoiDungChinhSua}
        }
        return null
    } 

    render() {
        let {taiKhoan, matKhau, email, hoTen, soDienThoai, loaiNguoiDung} = this.state
        // console.log(this.state)
        return (

            <form className="card " onSubmit={this.handleSubmit}>
                <div className='text-white bg-dark card-header'>
                    Form Đăng Kí
                </div>
                <div className="card-body">
                    <div className='row'>
                        <div className="col-6">
                            <div className='form-group'>
                                <p>Tai Khoan</p>
                                <input value={taiKhoan} onChange={this.handleChangeInput} name='taiKhoan' type="text" className='form-control' />
                            </div>
                            <div className='form-group'>
                                <p>Mat Khau</p>
                                <input value={matKhau} onChange={this.handleChangeInput} name='matKhau' type="text" className='form-control' />
                            </div>
                            <div className='form-group'>
                                <p>Email</p>
                                <input value={email} onChange={this.handleChangeInput} name='email' type="text" className='form-control' />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='form-group'>
                                <p>Ho ten</p>
                                <input value={hoTen} onChange={this.handleChangeInput} name='hoTen' type="text" className='form-control' />
                            </div>
                            <div className='form-group'>
                                <p>So dien thoai</p>
                                <input value={soDienThoai} onChange={this.handleChangeInput} name='soDienThoai' type="text" className='form-control' />
                            </div>
                            <div className='form-group'>
                                <p>Ma nguoi dung</p>
                                <select value={loaiNguoiDung} name="loaiNguoiDung" id="" className=' form-control' onChange={this.handleChangeInput}>
                                    <option className='' value="Khach Hang">Khach hang</option>
                                    <option className='' value="Quan Li">Quan li</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Btn card  */}
                    <div className='row ml-1'>
                        <button type='submit' className='btn btn-success mr-2' >Dang ki</button>


                        <button className='btn btn-danger' type='button' onClick={() =>{
                           this.props.dispatch(updateNguoiDung(this.state))
                        }}>Cap nhat</button>
                    </div>
                </div>
            </form>

        )
    }
    
}



const mapStateToProps = (state) => {
    return {
        nguoiDungChinhSua:state.BaiTapQuanLiReducer.nguoiDungChinhSua
    }
}

export default connect(mapStateToProps) (FormDangKi)