import { chinhSua, dangKi, deleteTaiKhoan, update } from "../types/BaiTapQuanLiTypes"


export const dangKiNguoiDung = (nguoiDung) => ({
    type:dangKi,
    nguoiDung
})

export const chinhSuaNguoiDung = (nguoiDungChinhSua) => ({
    type:chinhSua,
    nguoiDungChinhSua
})

export const updateNguoiDung = (nguoiDungUpdate) => ({
    type:update,
    nguoiDungUpdate
    
})

export const deleteNguoiDung = (taiKhoan) => ({
    type:deleteTaiKhoan,
    taiKhoan
    
})