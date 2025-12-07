import instance from "@/axios.js";

export function getActivityList() {
    return instance.get('/activity/list')
}

export function getActivityDetail(id) {
    return instance.post(`/activity/${id}`)
}