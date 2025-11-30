import apiClient from './api';

/**
 * 社团信息服务
 */
export const aboutService = {
  /**
   * 获取社团基本信息
   * @returns {Promise} 社团基本信息
   */
  async getAboutInfo() {
    return await apiClient.get('/about');
  },

  /**
   * 获取社团背景
   * @returns {Promise} 社团背景信息
   */
  async getBackground() {
    return await apiClient.get('/about/background');
  },

  /**
   * 获取社团宗旨
   * @returns {Promise} 社团宗旨信息
   */
  async getMission() {
    return await apiClient.get('/about/mission');
  },

  /**
   * 获取社团发展历程
   * @returns {Promise} 社团发展历程
   */
  async getHistory() {
    return await apiClient.get('/about/history');
  },

  /**
   * 获取社团组织结构
   * @returns {Promise} 社团组织结构
   */
  async getOrganization() {
    return await apiClient.get('/about/organization');
  }
};
