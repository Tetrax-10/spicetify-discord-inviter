import React from "react"

import "./InvitePopup.scss"

import { Heading, DescriptionItem, Highlight, LittleSpaceItem, ButtonItem, DividerItem, LinkItem, space } from "../components/MenuComponents"
import Shared from "../shared/shared"
import Utils from "../utils/utils"

export default function InvitePopup() {
    return (
        <div className="tetrax-settings-menu" aria-label="Discord Inviter">
            <Heading>Dear users,</Heading>
            <p></p>
            <DescriptionItem>
                {space(15)}We are delighted to extend an invitation to our Discord support server.{" "}
                <Highlight color="red-text">Need help or have questions with our Spicetify Themes or Extensions?</Highlight> Join our Discord support
                server to ask for help so our helpers will assist and solve your issues. We created this support server as many people ask for help in
                our <LinkItem link="https://github.com/Tetrax-10/Nord-Spotify/issues?q=">Github issue page</LinkItem> which is a place to report bugs
                in our themes, extensions.
            </DescriptionItem>
            <DividerItem></DividerItem>
            <LittleSpaceItem></LittleSpaceItem>
            <div className="popup-row">
                <h3 className="div-title">Why Tetrax's Server instead of Spicetify Server?</h3>
                <div style={{ paddingLeft: "50px" }}>
                    <div style={{ display: "list-item" }}>Full support for tetrax's themes and extensions</div>
                    <div style={{ display: "list-item" }}>Themes/Extensions specific FAQs</div>
                    <div style={{ display: "list-item" }}>Suggest features that you did like to have</div>
                    <div style={{ display: "list-item" }}>Get quick feature updates</div>
                    <div style={{ display: "list-item" }}>Community Events</div>
                    <div style={{ display: "list-item" }}>Suggest new Spicetify extension ideas</div>
                    <div style={{ display: "list-item" }}>Report bugs that will be fixed within few days</div>
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
                What <LinkItem link="https://github.com/Tetrax-10/Nord-Spotify">Spicetify themes</LinkItem> and{" "}
                <LinkItem link="https://github.com/Tetrax-10/Spicetify-Extensions">extensions</LinkItem> did{" "}
                <LinkItem link="https://github.com/Tetrax-10">Tetrax</LinkItem> create that I use?
            </Heading>
            <LittleSpaceItem></LittleSpaceItem>
            <div className="popup-row" style={{ display: "-webkit-inline-box" }}>
                <b>Themes :</b>
                <LinkItem isGreen={Shared.installed.theme ? true : false} link={Shared.themes.nord.link}>
                    {space(1) + "Nord"}
                </LinkItem>
            </div>
            <LittleSpaceItem></LittleSpaceItem>
            <div className="popup-row">
                <b>Extensions :</b>
                {Object.keys(Shared.extensions).map((extension) => (
                    <a
                        className={(Shared.installed.extensions.includes(extension) ? "green-text " : "") + "link"}
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
