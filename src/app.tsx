import tetraxDiscordInviter from "./tetraxDiscordInviter"

export default async function initNord() {
    while (!Spicetify.PopupModal.display) {
        await new Promise((resolve) => setTimeout(resolve, 10))
    }

    tetraxDiscordInviter()
}
