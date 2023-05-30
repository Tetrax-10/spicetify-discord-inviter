import InvitePopup from "./ui/InvitePopup"
import Utils from "./utils/utils"

export default async function tetraxDiscordInviter() {
    const savedReminderDate = localStorage.getItem("tetraxDiscordInviter:reminderDate")

    setTimeout(() => {
        if (Utils.checkReminder() || savedReminderDate === null) {
            Utils.getInstalledItems()

            Spicetify.PopupModal.display({
                title: "Introducing Tetrax Support Server",
                content: InvitePopup(),
                isLarge: true,
            })
        }
    }, 2000)
}
