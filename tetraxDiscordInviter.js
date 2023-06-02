var tetraxDiscordInviter = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // src/ui/InvitePopup.jsx
  var import_react2 = __toESM(require_react());

  // src/components/MenuComponents.jsx
  var import_react = __toESM(require_react());
  function Heading({ children = "" } = {}) {
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("h3", {
      className: "div-title"
    }, children)));
  }
  function ButtonItem({ color = "", children = "", onClickHandler = () => {
  } } = {}) {
    return /* @__PURE__ */ import_react.default.createElement("button", {
      className: "login-button" + (color ? " " + color + "-btn" : ""),
      onClick: () => {
        Spicetify.PopupModal.hide();
        onClickHandler();
      }
    }, children);
  }
  function DescriptionItem({ children = "" } = {}) {
    const hasHighlight = import_react.default.Children.toArray(children).some((child) => child.type && child.type.name === "Highlight");
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, hasHighlight ? /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("p", {
      className: "col description"
    }, /* @__PURE__ */ import_react.default.createElement("span", null, children))) : /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("p", {
      className: "col description"
    }, children)));
  }
  function Highlight({ children = "", color = "" } = {}) {
    return /* @__PURE__ */ import_react.default.createElement("span", {
      className: color ? " " + color : ""
    }, children);
  }
  function DividerItem() {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("hr", {
      className: "divider"
    }));
  }
  function LittleSpaceItem() {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react.default.createElement("div", {
      className: "little-space"
    }));
  }
  function LinkItem({ children = "", link = "", isGreen = true }) {
    return /* @__PURE__ */ import_react.default.createElement("a", {
      className: (isGreen ? "green-text " : "") + "link",
      href: link
    }, children);
  }
  function space(n) {
    return "\xA0".repeat(n);
  }

  // src/shared/shared.js
  var Shared = {
    themes: {
      nord: { name: "Nord", link: "https://github.com/Tetrax-10/Nord-Spotify" }
    },
    extensions: {
      imageOpener: { name: "Image Opener", link: "https://github.com/Tetrax-10/Spicetify-Extensions/tree/master/Image-Opener" },
      playEnhancedSongs: { name: "Play Enhanced Songs", link: "https://github.com/Tetrax-10/Spicetify-Extensions/tree/master/Play-Enhanced-Songs" },
      playOnYouTube: { name: "Play on YouTube", link: "https://github.com/Tetrax-10/Spicetify-Extensions/tree/master/Play-on-YouTube" },
      seekSong: { name: "Seek Song", link: "https://github.com/Tetrax-10/Spicetify-Extensions/tree/master/Seek-Song" },
      skipOrPlayLikedSongs: {
        name: "Skip or Play Liked Songs",
        link: "https://github.com/Tetrax-10/Spicetify-Extensions/tree/master/Skip-or-Play-Liked-Songs"
      },
      sortByPlayCount: { name: "Sort by Play Count", link: "https://github.com/Tetrax-10/Spicetify-Extensions/tree/master/Sort-by-Play-count" },
      spotifyBackup: { name: "Spotify Backup", link: "https://github.com/Tetrax-10/Spicetify-Extensions/tree/master/Spotify-Backup" },
      spotifyGenres: { name: "Spotify Genres", link: "https://github.com/Tetrax-10/Spicetify-Extensions/tree/master/Spotify-Genres" }
    },
    installed: {
      theme: "",
      extensions: []
    }
  };
  var shared_default = Shared;

  // src/utils/utils.js
  var Utils = (() => {
    function getInstalledItems() {
      Object.keys(shared_default.extensions).forEach((extension) => {
        if (document.querySelector(`script[src*="${extension}"]`)) {
          shared_default.installed.extensions.push(extension);
        }
      });
      shared_default.installed.theme = Spicetify.Config.current_theme === "Nord" ? "Nord" : void 0;
    }
    function setReminder(days) {
      const currentDate = new Date();
      const reminderDate = new Date(currentDate.getTime() + days * 24 * 60 * 60 * 1e3);
      localStorage.setItem("tetraxDiscordInviter:reminderDate", reminderDate.toISOString());
    }
    function checkReminder() {
      const savedReminderDate = localStorage.getItem("tetraxDiscordInviter:reminderDate");
      const reminderDate = new Date(savedReminderDate);
      const currentDate = new Date();
      if (currentDate >= reminderDate && savedReminderDate) {
        return true;
      } else {
        return false;
      }
    }
    return {
      getInstalledItems,
      setReminder,
      checkReminder
    };
  })();
  var utils_default = Utils;

  // src/ui/InvitePopup.jsx
  function InvitePopup() {
    return /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "tetrax-settings-menu",
      "aria-label": "Discord Inviter"
    }, /* @__PURE__ */ import_react2.default.createElement(Heading, null, "Dear users,"), /* @__PURE__ */ import_react2.default.createElement("p", null), /* @__PURE__ */ import_react2.default.createElement(DescriptionItem, null, space(15), "We are delighted to extend an invitation to our Discord support server.", " ", /* @__PURE__ */ import_react2.default.createElement(Highlight, {
      color: "red-text"
    }, "Need help or have questions with our Spicetify Themes or Extensions?"), " Join our Discord support server to ask for help so our helpers will assist and solve your issues. We created this support server as many people ask for help in our ", /* @__PURE__ */ import_react2.default.createElement(LinkItem, {
      link: "https://github.com/Tetrax-10/Nord-Spotify/issues?q="
    }, "Github issue page"), " which is a place to report bugs in our themes, extensions."), /* @__PURE__ */ import_react2.default.createElement(DividerItem, null), /* @__PURE__ */ import_react2.default.createElement(LittleSpaceItem, null), /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react2.default.createElement("h3", {
      className: "div-title"
    }, "Why Tetrax's Server instead of Spicetify Server?"), /* @__PURE__ */ import_react2.default.createElement("div", {
      style: { paddingLeft: "50px" }
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      style: { display: "list-item" }
    }, "Full support for tetrax's themes and extensions"), /* @__PURE__ */ import_react2.default.createElement("div", {
      style: { display: "list-item" }
    }, "Themes/Extensions specific FAQs"), /* @__PURE__ */ import_react2.default.createElement("div", {
      style: { display: "list-item" }
    }, "Suggest features that you did like to have"), /* @__PURE__ */ import_react2.default.createElement("div", {
      style: { display: "list-item" }
    }, "Get quick feature updates"), /* @__PURE__ */ import_react2.default.createElement("div", {
      style: { display: "list-item" }
    }, "Community Events"), /* @__PURE__ */ import_react2.default.createElement("div", {
      style: { display: "list-item" }
    }, "Suggest new Spicetify extension ideas"), /* @__PURE__ */ import_react2.default.createElement("div", {
      style: { display: "list-item" }
    }, "Report bugs that will be fixed within few days"))), /* @__PURE__ */ import_react2.default.createElement(LittleSpaceItem, null), /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react2.default.createElement(ButtonItem, {
      color: "red",
      onClickHandler: () => utils_default.setReminder(3650)
    }, "Don't show again"), /* @__PURE__ */ import_react2.default.createElement(ButtonItem, {
      onClickHandler: () => utils_default.setReminder(3)
    }, "Remind me later"), /* @__PURE__ */ import_react2.default.createElement(ButtonItem, {
      color: "green",
      onClickHandler: () => {
        window.open("https://discord.gg/DaUbPmbDwr");
        utils_default.setReminder(3650);
      }
    }, "Join Discord server")), /* @__PURE__ */ import_react2.default.createElement(LittleSpaceItem, null), /* @__PURE__ */ import_react2.default.createElement(DividerItem, null), /* @__PURE__ */ import_react2.default.createElement(LittleSpaceItem, null), /* @__PURE__ */ import_react2.default.createElement(Heading, null, "What ", /* @__PURE__ */ import_react2.default.createElement(LinkItem, {
      link: "https://github.com/Tetrax-10/Nord-Spotify"
    }, "Spicetify themes"), " and", " ", /* @__PURE__ */ import_react2.default.createElement(LinkItem, {
      link: "https://github.com/Tetrax-10/Spicetify-Extensions"
    }, "extensions"), " did", " ", /* @__PURE__ */ import_react2.default.createElement(LinkItem, {
      link: "https://github.com/Tetrax-10"
    }, "Tetrax"), " create that I use?"), /* @__PURE__ */ import_react2.default.createElement(LittleSpaceItem, null), /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "popup-row",
      style: { display: "-webkit-inline-box" }
    }, /* @__PURE__ */ import_react2.default.createElement("b", null, "Themes :"), /* @__PURE__ */ import_react2.default.createElement(LinkItem, {
      isGreen: shared_default.installed.theme ? true : false,
      link: shared_default.themes.nord.link
    }, space(1) + "Nord")), /* @__PURE__ */ import_react2.default.createElement(LittleSpaceItem, null), /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "popup-row"
    }, /* @__PURE__ */ import_react2.default.createElement("b", null, "Extensions :"), Object.keys(shared_default.extensions).map((extension) => /* @__PURE__ */ import_react2.default.createElement("a", {
      className: (shared_default.installed.extensions.includes(extension) ? "green-text " : "") + "link",
      style: { paddingLeft: "60px", display: "block" },
      href: shared_default.extensions[extension].link
    }, space(1) + shared_default.extensions[extension].name, ","))));
  }

  // src/tetraxDiscordInviter.js
  async function tetraxDiscordInviter() {
    const savedReminderDate = localStorage.getItem("tetraxDiscordInviter:reminderDate");
    setTimeout(() => {
      if (utils_default.checkReminder() || savedReminderDate === null) {
        utils_default.getInstalledItems();
        Spicetify.PopupModal.display({
          title: "Introducing Tetrax Support Server",
          content: InvitePopup(),
          isLarge: true
        });
      }
    }, 2e3);
  }

  // src/app.tsx
  async function initNord() {
    while (!Spicetify.PopupModal.display) {
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
    tetraxDiscordInviter();
  }

  // node_modules/spicetify-creator/dist/temp/index.jsx
  (async () => {
    await initNord();
  })();
})();
(async () => {
    if (!document.getElementById(`tetraxDiscordInviter`)) {
      var el = document.createElement('style');
      el.id = `tetraxDiscordInviter`;
      el.textContent = (String.raw`
  /* ../../../../../tmp/tmp-1825-qEOQl7Uz9cpi/1887bc2187e0/InvitePopup.css */
.tetrax-settings-menu[aria-label="Discord Inviter"] .popup-row::after {
  content: "";
  display: table;
  clear: both;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .popup-row .col {
  display: flex;
  padding: 10px 0;
  align-items: center;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .popup-row .col.description {
  float: left;
  padding-right: 15px;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .popup-row .col.action {
  float: right;
  text-align: right;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .popup-row .div-title {
  color: var(--spice-text);
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .popup-row .divider {
  height: 2px;
  border-width: 0;
  background-color: var(--spice-button-disabled);
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .popup-row .space {
  margin-bottom: 20px;
  visibility: hidden;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .popup-row .demo {
  font-size: 13px;
  color: #59ce8f;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .popup-row .little-space {
  margin-bottom: 10px;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .popup-row .inputbox {
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 15px;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .popup-row .input-wrapper {
  display: flex;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .popup-row .link:hover {
  color: var(--spice-custom-link-hover, var(--spice-button));
}
.tetrax-settings-menu[aria-label="Discord Inviter"] button.checkbox {
  align-items: center;
  border: 0px;
  border-radius: 50%;
  background-color: rgba(var(--spice-rgb-shadow), 0.7);
  color: var(--spice-text);
  cursor: pointer;
  display: flex;
  -webkit-margin-start: 12px;
  margin-inline-start: 12px;
  padding: 8px;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] button.checkbox.disabled {
  color: rgba(var(--spice-rgb-text), 0.3);
}
.tetrax-settings-menu[aria-label="Discord Inviter"] select {
  color: var(--spice-text);
  background: rgba(var(--spice-rgb-shadow), 0.7);
  border: 0;
  height: 32px;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] ::-webkit-scrollbar {
  width: 8px;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .login-button {
  background-color: var(--spice-button);
  border-radius: 8px;
  border-style: none;
  color: var(--spice-text);
  cursor: pointer;
  font-size: 14px;
  height: 40px;
  margin-right: 20px;
  padding: 5px 10px;
  text-align: center;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .center-button {
  display: block;
  margin: 10px auto;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .green-btn {
  background-color: #6bcb77 !important;
  color: #25316d !important;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .red-btn {
  background-color: #bf616a !important;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .green-text {
  color: #6bcb77;
}
.tetrax-settings-menu[aria-label="Discord Inviter"] .red-text {
  color: #bf616a;
}

      `).trim();
      document.head.appendChild(el);
    }
  })()