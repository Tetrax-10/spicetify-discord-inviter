import Shared from "../shared/shared"

const Utils = (() => {
    function getInstalledItems() {
        Object.keys(Shared.extensions).forEach((extension) => {
            if (document.querySelector(`script[src*="${extension}"]`)) {
                Shared.installed.extensions.push(extension)
            }
        })

        Shared.installed.theme = Spicetify.Config.current_theme === "Nord" ? "Nord" : undefined
    }

    function setReminder(days) {
        const currentDate = new Date()
        const reminderDate = new Date(currentDate.getTime() + days * 24 * 60 * 60 * 1000)

        localStorage.setItem("tetraxDiscordInviter:reminderDate", reminderDate.toISOString())
    }

    function checkReminder() {
        const savedReminderDate = localStorage.getItem("tetraxDiscordInviter:reminderDate")

        const reminderDate = new Date(savedReminderDate)
        const currentDate = new Date()

        if (currentDate >= reminderDate && savedReminderDate) {
            return true
        } else {
            return false
        }
    }

    return {
        getInstalledItems: getInstalledItems,
        setReminder: setReminder,
        checkReminder: checkReminder,
    }
})()

export default Utils
