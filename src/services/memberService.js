import apiClient from './api';

/**
 * 成员数据服务
 */
export const memberService = {
  /**
   * 获取所有成员
   * @returns {Promise} 成员数据列表
   */
  async getMembers() {
    return await apiClient.get('/members');
  },

  /**
   * 获取核心成员
   * @returns {Promise} 核心成员列表
   */
  async getCoreMembers() {
    return await apiClient.get('/members?type=core');
  },

  /**
   * 获取普通成员
   * @returns {Promise} 普通成员列表
   */
  async getGeneralMembers() {
    return await apiClient.get('/members?type=general');
  },

  /**
   * 获取成员详情
   * @param {string|number} id - 成员ID
   * @returns {Promise} 成员详情
   */
  async getMemberDetail(id) {
    return await apiClient.get(`/members/${id}`);
  }
};
