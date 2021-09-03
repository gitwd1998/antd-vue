import request from '@/utils/request'

/**
 * 获取用户信息
 * @param {*} data 
 * @returns 获取用户信息
 */
export function getUserInfo(data) {
    return request({
        method: 'post',
        url: '/getUserInfo',
        data,
    })
}

/**
 * 登陆的时候获取验证码
 * @returns 获取验证码
 */
export function captcha() {
    return request({
        url: '/captcha',
        method: 'post',
    })
}

/**
 * 登录
 * @param {*} data 
 * @returns 登录
 */
export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

/**
 * 注册
 * @param {*} data 
 * @returns 注册
 */
export function regist(data) {
    return request({
        url: '/regist',
        method: 'post',
        data
    })
}

/**
 * 获取视图列表数据
 * @returns 获取视图列表数据
 */
export function init() {
    return request({
        url: '/init',
        method: 'post',
    })
}

/**
 * 查看详情
 * @param {*} data 
 * @returns 查看详情
 */
export function detail(data) {
    return request({
        url: '/detail',
        method: 'post',
        data
    })
}

/**
 * 添加
 * @param {*} data 
 * @returns 添加
 */
export function add(data) {
    return request({
        url: '/add',
        method: 'post',
        data
    })
}

/**
 * 删除
 * @param {*} data 
 * @returns 删除
 */
export function deleteItem(data) {
    return request({
        url: '/delete',
        method: 'post',
        data
    })
}

/**
 * 批量删除
 * @param {*} data 
 * @returns 批量删除
 */
export function batchDelete(data) {
    return request({
        method: 'post',
        url: '/delete/batch',
        data
    })
}

/**
 * 修改
 * @param {*} data 
 * @returns 修改
 */
export function edit(data) {
    return request({
        url: '/edit',
        method: 'post',
        data
    })
}

/**
 * 
 * @param {*} data 
 * @returns 上传头像
 */
export function uploadHead(data) {
    return request({
        url: '/upload/head',
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data,
    })
}
