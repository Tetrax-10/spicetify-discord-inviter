import React from "react"

export function Heading({ children = "" } = {}) {
    return (
        <>
            <div className="popup-row">
                <h3 className="div-title">{children}</h3>
            </div>
        </>
    )
}

export function ButtonItem({ color = "", children = "", onClickHandler = () => {} } = {}) {
    return (
        <button
            className={"login-button" + (color ? " " + color + "-btn" : "")}
            onClick={() => {
                Spicetify.PopupModal.hide()
                onClickHandler()
            }}
        >
            {children}
        </button>
    )
}

export function DescriptionItem({ children = "Description" } = {}) {
    const hasHighlight = React.Children.toArray(children).some((child) => child.type && child.type.name === "Highlight")

    return (
        <>
            {hasHighlight ? (
                <div className="popup-row">
                    <p className="col description">
                        <span>{children}</span>
                    </p>
                </div>
            ) : (
                <div className="popup-row">
                    <p className="col description">{children}</p>
                </div>
            )}
        </>
    )
}

export function Highlight({ children = "Highlight", color = "" } = {}) {
    return <span className={color ? " " + color : ""}>{children}</span>
}

export function DividerItem() {
    return (
        <div className="popup-row">
            <hr className="divider"></hr>
        </div>
    )
}

export function SpaceItem() {
    return (
        <div className="popup-row">
            <hr className="space"></hr>
        </div>
    )
}

export function space(n) {
    return "\u00A0".repeat(n)
}
