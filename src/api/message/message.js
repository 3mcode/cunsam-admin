import request from '@/utils/request'

/**
 * 添加一条消息
 * @param {Object} data
 */
export function addMessageItem(data) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'add.message.item'
    },
    data
  })
}

/**
 * 编辑一条消息
 * @param {Object} data
 */
export function setMessageItem(data) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'set.message.item'
    },
    data
  })
}

/**
 * 批量删除消息
 * @param {Array} message_id
 */
export function delMessageList(message_id) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'del.message.list'
    },
    data: {
      message_id: message_id
    }
  })
}

/**
 * 批量正式发布消息
 * @param {Array} message_id
 */
export function setMessageStatus(message_id) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'set.message.status'
    },
    data: {
      message_id: message_id
    }
  })
}

/**
 * 获取一条消息(后台)
 * @param {Number} message_id
 */
export function getMessageItem(message_id) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'get.message.item'
    },
    data: {
      message_id: message_id
    }
  })
}

/**
 * 获取消息列表(后台)
 * @param {Object} data
 */
export function getMessageList(data) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'get.message.list'
    },
    data
  })
}

/**
 * 用户获取一条消息
 * @param {Number} message_id
 */
export function getMessageUserItem(message_id) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'get.message.user.item'
    },
    data: {
      message_id: message_id
    }
  })
}

/**
 * 用户获取消息列表
 * @param {Object} data
 */
export function getMessageUserList(data) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'get.message.user.list'
    },
    data
  })
}

/**
 * 用户获取未读消息数
 * @param {Number} type
 */
export function getMessageUserUnread(type) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'get.message.user.unread'
    },
    data: {
      type: type
    }
  })
}

/**
 * 用户批量设置消息已读
 * @param {Array} message_id
 * @param {Number} type
 */
export function setMessageUserRead(message_id, type) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'set.message.user.read'
    },
    data: {
      message_id: message_id,
      type: type
    }
  })
}

/**
 * 用户设置消息全部已读
 * @param {Number} type
 */
export function setMessageUserAllread(type) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'set.message.user.allread'
    },
    data: {
      type: type
    }
  })
}

/**
 * 用户批量删除消息
 * @param {Array} message_id
 * @param {Number} type
 */
export function delMessageUserList(message_id, type) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'del.message.user.list'
    },
    data: {
      message_id: message_id,
      type: type
    }
  })
}

/**
 * 用户删除全部消息
 * @param {Number} type
 */
export function delMessageUserAll(type) {
  return request({
    url: '/v1/message',
    method: 'post',
    params: {
      method: 'del.message.user.all'
    },
    data: {
      type: type
    }
  })
}