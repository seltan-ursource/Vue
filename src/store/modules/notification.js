export const namespaced = true

export const state = {
    notifications : []
}

let nextId = 1

export const mutations = {
    PUSH(state, notification){
        state.notifications.PUSH({
            ...notification,
            id :nextId++
        })
    },

    DELETE(state, notificationTORemove){
        state.notifications = state.notifications.filter(
            Notification => notification.id !== notificationTORemove.id
        )
    }
}