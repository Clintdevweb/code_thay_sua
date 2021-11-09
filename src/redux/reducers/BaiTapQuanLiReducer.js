/* eslint-disable no-fallthrough */
import { chinhSua, dangKi, deleteTaiKhoan, update } from "../types/BaiTapQuanLiTypes"

let mangNguoiDung = [
    {taiKhoan:'abc', matKhau:'123', email:'hanh@gmail.com', hoTen:"Ngo Van Hanh", soDienThoai:'01663579325', loaiNguoiDung:'khach Hang'},
    {taiKhoan:'abc123', matKhau:'123', email:'hanh@gmail.com', hoTen:"Ngo Van Hanh", soDienThoai:'01663579325', loaiNguoiDung:'khach Hang'}
]

localStorage.setItem("mangNguoiDung",JSON.stringify(mangNguoiDung))

if(localStorage.getItem("mangNguoiDung")){
     mangNguoiDung = JSON.parse(localStorage.getItem("mangNguoiDung"))
}


/* eslint-disable import/no-anonymous-default-export */
const initialState = {
        danhSachNguoiDung: mangNguoiDung,
        nguoiDungChinhSua:{}
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case dangKi: {
            state.danhSachNguoiDung = [...state.danhSachNguoiDung, action.nguoiDung]           
            return {...state}
        }

        case chinhSua: {
            state.nguoiDungChinhSua = action.nguoiDungChinhSua           
            
            return {...state}
        }

        case update: {
             let index = state.danhSachNguoiDung.findIndex(member => member.taiKhoan === action.nguoiDungUpdate.taiKhoan)
            //  = mangMoi
            if(index !== -1){
                state.danhSachNguoiDung[index] = {...action.nguoiDungUpdate}
    
                // console.log(state.danhSachNguoiDung)
                state.danhSachNguoiDung = [...state.danhSachNguoiDung]

                return {...state}
            }
        }

        case deleteTaiKhoan: {
            let mangMoi = state.danhSachNguoiDung.filter(member =>member.taiKhoan !== action.taiKhoan)         
            
            state.danhSachNguoiDung = mangMoi
            return {...state}
        }
    

    default:
        return {...state}
    }
}
