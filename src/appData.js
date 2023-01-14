export const API_KEY = "3642981991cf135bc6bdb3fbb472c2a0"

export const mobileView = window.matchMedia("(max-width: 576px)")

export function viewOnMobileDevicesOnly(mobileView) {
    if (!mobileView.matches) {
        const msg = "This app was built for mobile devices only. View on a mobile phone.";
        const root = document.querySelector("#root")
        root.textContent = msg
        root.style.fontSize = "30px"
        root.style.display = "flex"
        root.style.alignItems = "center"
        root.style.justifyContent = "center"
        root.style.margin = "auto 0"
    } else {
        return 
    }
}

