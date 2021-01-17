import {Em, FontName, Px} from "@sagittal/general"

const LIGHTER_TAN = "#FAF8F6"
const LIGHT_TAN = "#DEC89C"
const TAN = "#C99A68"
const DARK_TAN = "#B37E43"

const LIGHTER_GREY = "#aaa996"
const LIGHT_GREY = "#94937D"
const GREY = "#6C6B59"
const DARK_GREY = "#333333"

const STANDARD_BORDER = `1px solid ${LIGHT_GREY}`
const STANDARD_BORDER_RADIUS = 5 as Px

const MONOSPACED_FONT = "Roboto Mono" as FontName
const MONOSPACED_FONT_SIZE = 13 as Px

const UI_FONT = "sans-serif"
const UI_FONT_SIZE = 0.75 as Em
const UI_SPACING = 12 as Px

// TODO: CLEAN, READY TO GO: STOP HAVING TO REMEMBER TO SUFFIX EM OR PX
//  Add helpers for formatting px and em (in @sagittal/general)
const MAX_APP_WIDTH = 600 as Px

const APP_MARGIN = 16 as Px

export {
    STANDARD_BORDER,
    STANDARD_BORDER_RADIUS,
    LIGHTER_TAN,
    LIGHT_TAN,
    TAN,
    DARK_TAN,
    LIGHTER_GREY,
    LIGHT_GREY,
    GREY,
    DARK_GREY,
    MONOSPACED_FONT_SIZE,
    MONOSPACED_FONT,
    UI_FONT,
    UI_FONT_SIZE,
    UI_SPACING,
    MAX_APP_WIDTH,
    APP_MARGIN,
}
