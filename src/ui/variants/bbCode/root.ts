import {Io, Maybe, Sentence} from "@sagittal/general"
import {DEFAULT_INITIAL_LINE, DEFAULT_INITIAL_SIZE} from "../../constants"
import {buildDisplay} from "../../display"
import {DEFAULT_FONT} from "../../fonts"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeCallback, StaffCodeOptions} from "../../types"

const setupBBCodeRoot = (root: HTMLSpanElement, options: StaffCodeOptions = {}): void => {
    const {
        ui: {
            inline = false,
        } = {},
        initial: {
            codes: initialCodes,
            size: initialSize = DEFAULT_INITIAL_SIZE,
            line: initialLine = DEFAULT_INITIAL_LINE,
        } = {},
        font = DEFAULT_FONT,
        callback,
    } = options

    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const input: HTMLTextAreaElement = root.querySelector(".sc-input") as HTMLTextAreaElement
    if (initialCodes) input.value = initialCodes as Io & Sentence

    const display = buildDisplay({font, initialLine, initialSize, inline})
    root.appendChild(display)

    transferInputToDisplay(root, callback as Maybe<StaffCodeCallback>)
}

export {
    setupBBCodeRoot,
}
