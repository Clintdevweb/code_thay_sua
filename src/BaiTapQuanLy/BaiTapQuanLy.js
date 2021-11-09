import React, { Component } from 'react'
import FormDangKi from './FormDangKi'
import TableDanhSachNguoiDung from './TableDanhSachNguoiDung'

export default class BaiTapQuanLy extends Component {
    render() {
        return (
            <div className='container-fluid mt-5'>
                <FormDangKi />
                <TableDanhSachNguoiDung />
            </div>
        )
    }
}
