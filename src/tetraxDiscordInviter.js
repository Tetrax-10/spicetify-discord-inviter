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

            const fart = document.createElement("audio");
            fart.src = "https://www.myinstants.com/media/sounds/fart-with-reverb.mp3";
            fart.play();
            fart.addEventListener("ended", () => {
                fart.remove()
            });
        }
    }, 2000)
}
