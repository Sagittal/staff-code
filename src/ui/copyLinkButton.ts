import {BLANK, Io, Sentence} from "@sagittal/general"
import {WEB_APP_URL} from "./constants"
import {prepareCodesToBeHumanReadableAsEncodedQueryParams} from "./human"
import {DEFAULT_INITIAL_LINE, DEFAULT_INITIAL_SIZE} from "./initial"
import {Initial} from "./types"

const onWebApp = (): boolean => {
    const getUrl = window.location
    const baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split("/")[1]

    // todo bring back when you're done experimenting
    //  but it looks like the #top hash intra-page navigation is messing with the query params...
    //  might simply be a way to put the query params up there differently that would work better...?
    return true // baseUrl === WEB_APP_URL
}

const handleCopyLinkClick = (
    input: HTMLTextAreaElement,
    sizeSpinner?: HTMLInputElement,
    lineSpinner?: HTMLInputElement,
): void => {
    const initialCodesParam = encodeURIComponent(
        prepareCodesToBeHumanReadableAsEncodedQueryParams(input.value as Io & Sentence),
    )

    const initialSizeParam = sizeSpinner ?
        sizeSpinner.value === `${DEFAULT_INITIAL_SIZE}` ? BLANK : `&${Initial.SIZE}=${sizeSpinner.value}` :
        BLANK

    const initialLineParam = lineSpinner ?
        lineSpinner.value === `${DEFAULT_INITIAL_LINE}` ? BLANK : `&${Initial.LINE}=${lineSpinner.value}` :
        BLANK

    const initialParams = `?${Initial.CODES}=${initialCodesParam}${initialSizeParam}${initialLineParam}`

    if (onWebApp()) {
        history.pushState(undefined, BLANK, initialParams)
    }

    navigator.clipboard.writeText(`${WEB_APP_URL}${initialParams}`)
}


const buildCopyLinkButton = (
    input: HTMLTextAreaElement,
    sizeSpinner?: HTMLInputElement,
    lineSpinner?: HTMLInputElement,
): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "\u{1f4cb}\ufe0e Link"
    copyLinkButton.style.margin = "2px"
    copyLinkButton.style.cursor = "pointer"
    copyLinkButton.addEventListener("click", (): void => {
        handleCopyLinkClick(input, sizeSpinner, lineSpinner)
    })

    return copyLinkButton
}

export {
    buildCopyLinkButton,
}
