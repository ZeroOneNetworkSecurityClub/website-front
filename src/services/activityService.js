import apiClient from './api';

/**
 * 活动数据服务
 */
export const activityService = {
  /**
   * 获取所有活动
   * @returns {Promise} 活动数据列表
   */
  async getActivities() {
    return await apiClient.get('/activities');
  },

  /**
   * 获取即将举行的活动
   * @returns {Promise} 即将举行的活动列表
   */
  async getUpcomingActivities() {
    return await apiClient.get('/activities?type=upcoming');
  },

  /**
   * 获取过往活动
   * @returns {Promise} 过往活动列表
   */
  async getPastActivities() {
    return await apiClient.get('/activities?type=past');
  },

  /**
   * 获取最新活动
   * @param {number} limit - 返回的活动数量
   * @returns {Promise} 最新活动列表
   */
  async getLatestActivities(limit = 3) {
    return await apiClient.get(`/activities/latest?limit=${limit}`);
  },

  /**
   * 获取活动详情
   * @param {string|number} id - 活动ID
   * @returns {Promise} 活动详情
   */
  async getActivityDetail(id) {
    return await apiClient.get(`/activities/${id}`);
  }
};
