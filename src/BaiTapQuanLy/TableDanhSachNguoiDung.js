import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chinhSuaNguoiDung, deleteNguoiDung } from '../redux/actions/BaiTapQuanLiAction'

class TableDanhSachNguoiDung extends Component {

    renderTableNguoiDung = () => {
        return this.props.dsNguoiDung.map((member, index) => {
            return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{member.taiKhoan}</td>
                    <td>{member.matKhau}</td>
                    <td>{member.email}</td>
                    <td>{member.hoTen}</td>
                    <td>{member.soDienThoai}</td>
                    <td>{member.loaiNguoiDung}</td>
                    <td >
                        <button className='btn btn-primary mr-3' onClick = {() =>{
                            this.props.dispatch(chinhSuaNguoiDung(member))
                        }}>Chinh sua</button>
                        <button className='btn btn-success' onClick={()=>{
                            this.props.dispatch(deleteNguoiDung(member.taiKhoan))
                        }}>Xoa</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="card">
                <div className='text-white bg-dark card-header'>
                    Danh sach nguoi dung
                </div>
                <div className="card-body">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tai Khoan</th>
                                <th>Mat Khau</th>
                                <th>Ho ten</th>
                                <th>Email</th>
                                <th>So dien thoai</th>
                                <th>Loai nguoi dung</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableNguoiDung()}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }

    

}

const mapStateToProps = (state) => {
    return {
        dsNguoiDung: state.BaiTapQuanLiReducer.danhSachNguoiDung
    }
}


export default connect(mapStateToProps)(TableDanhSachNguoiDung)