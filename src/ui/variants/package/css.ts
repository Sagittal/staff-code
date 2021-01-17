import {
    APP_MARGIN,
    DARK_GREY,
    GREY,
    LIGHTER_TAN,
    LIGHT_TAN,
    LIGHT_GREY,
    TAN,
    LIGHTER_GREY,
    MAX_APP_WIDTH,
    DARK_TAN, STANDARD_BORDER_RADIUS,
} from "./constants"
import {COPY_LINK_CSS} from "./copyLink"
import {DOWNLOAD_CSS} from "./download"
import {INPUT_CSS} from "./input"
import {REFERENCE_CSS} from "./reference"
import {SPINNER_CSS} from "./spinners"

const applyCss = (): void => {
    // tslint:disable-next-line comment-format
    // language=CSS
    const combinedCss = `
        ${COPY_LINK_CSS}
        ${DOWNLOAD_CSS}
        ${INPUT_CSS}
        ${REFERENCE_CSS}
        ${SPINNER_CSS}
        * {
            color: ${DARK_GREY};
        }

        body {
            position: fixed;
            background-color: ${LIGHTER_TAN};
            height: 100%;
            width: 100%;
        }

        .staff-code {
            height: 100%;
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: ${MAX_APP_WIDTH}px;
        }

        .sc-ui {
            display: flex;
            flex-direction: column;
            margin-right: ${APP_MARGIN}px;
        }

        .sc-controls {
            display: flex;
            justify-content: flex-end;
        }

        a {
            color: ${DARK_TAN};
        }

        a:hover {
            color: ${TAN};
        }

        a:visited {
            color: ${GREY};
        }

        a:visited:hover {
            color: ${LIGHT_GREY};
        }

        ::selection {
            background-color: ${LIGHT_TAN};
        }

        ::-webkit-scrollbar-track {
            background: none;
        }

        ::-webkit-scrollbar {
            width: 18px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${LIGHT_GREY};
            border-radius: ${STANDARD_BORDER_RADIUS - 1}px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: ${LIGHTER_GREY};
        }
    `

    const style = document.createElement("style")
    style.textContent = combinedCss
    document.getElementsByTagName("head")[0].appendChild(style)
}

export {
    applyCss,
}
