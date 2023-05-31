import React from "react"

import "./InvitePopup.scss"

import { Heading, DescriptionItem, Highlight, LittleSpaceItem, ButtonItem, DividerItem, space } from "../components/MenuComponents"
import Shared from "../shared/shared"
import Utils from "../utils/utils"

export default function InvitePopup() {
    return (
        <div className="tetrax-settings-menu" aria-label="Discord Inviter">
            <Heading>Dear users,</Heading>
            <p></p>
            <DescriptionItem>
                {space(15)}We are delighted to extend an invitation to our exclusive Discord support server.{" "}
                <Highlight color="red-text">Need help</Highlight> or <Highlight color="red-text">have questions</Highlight>? Join our Discord support
                server and gain instant access to our dedicated support team. Remember, we recognize that your time is precious, that's why we've
                crafted this support server.
            </DescriptionItem>
            <DividerItem></DividerItem>
            <LittleSpaceItem></LittleSpaceItem>
            <div className="popup-row">
                <h3 className="div-title">Why Tetrax Server instead of Spicetify Server?</h3>
                <div style={{ paddingLeft: "50px" }}>
                    <div style={{ display: "list-item" }}>Full support for tetrax's products</div>
                    <div style={{ display: "list-item" }}>Product specific FAQs</div>
                    <div style={{ display: "list-item" }}>Suggest features that you did like to have</div>
                    <div style={{ display: "list-item" }}>Get exclusive product update</div>
                    <div style={{ display: "list-item" }}>Community Events</div>
                    <div style={{ display: "list-item" }}>Suggest new extension ideas</div>
                    <div style={{ display: "list-item" }}>Report bugs that will be fixed within next update</div>
                </div>
            </div>
            <LittleSpaceItem></LittleSpaceItem>
            <div className="popup-row">
                <ButtonItem color="red" onClickHandler={() => Utils.setReminder(3650)}>
                    Don't show again
                </ButtonItem>
                <ButtonItem onClickHandler={() => Utils.setReminder(3)}>Remind me later</ButtonItem>
                <ButtonItem
                    color="green"
                    onClickHandler={() => {
                        window.open("https://discord.gg/DaUbPmbDwr")
                        Utils.setReminder(3650)
                    }}
                >
                    Join Discord server
                </ButtonItem>
            </div>
            <LittleSpaceItem></LittleSpaceItem>
            <DividerItem></DividerItem>
            <LittleSpaceItem></LittleSpaceItem>
            <Heading>
                What products did{" "}
                <a className="green-text" href="https://github.com/Tetrax-10">
                    Tetrax
                </a>{" "}
                create that I use?
            </Heading>
            <LittleSpaceItem></LittleSpaceItem>
            <div style={{ display: "-webkit-inline-box" }}>
                <b>Theme :</b>
                <a className={Shared.installed.theme ? "green-text" : ""} href={Shared.themes.nord.link}>
                    {space(1) + "Nord"}
                </a>
            </div>
            <LittleSpaceItem></LittleSpaceItem>
            <div>
                <b>Extensions :</b>
                {Object.keys(Shared.extensions).map((extension) => (
                    <a
                        className={Shared.installed.extensions.includes(extension) ? "green-text" : ""}
                        style={{ paddingLeft: "60px", display: "block" }}
                        href={Shared.extensions[extension].link}
                    >
                        {space(1) + Shared.extensions[extension].name},
                    </a>
                ))}
            </div>
        </div>
    )
}
