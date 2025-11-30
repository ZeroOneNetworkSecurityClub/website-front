import apiClient from './api';

/**
 * 联系信息服务
 */
export const contactService = {
  /**
   * 获取所有联系信息
   * @returns {Promise} 联系信息
   */
  async getContactInfo() {
    return await apiClient.get('/contact');
  },

  /**
   * 获取联系方式
   * @returns {Promise} 联系方式
   */
  async getContactDetails() {
    return await apiClient.get('/contact/details');
  },

  /**
   * 获取社交媒体信息
   * @returns {Promise} 社交媒体信息
   */
  async getSocialLinks() {
    return await apiClient.get('/contact/social');
  },

  /**
   * 获取加入我们信息
   * @returns {Promise} 加入我们信息
   */
  async getJoinInfo() {
    return await apiClient.get('/contact/join');
  }
};
