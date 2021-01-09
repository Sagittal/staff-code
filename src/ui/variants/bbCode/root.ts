import {buildDisplay} from "../../display"
import {DEFAULT_FONT} from "../../fonts"
import {setupInput} from "../../input"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeOptions} from "../../types"
import {DEFAULT_INITIAL_CODES, DEFAULT_INITIAL_LINE, DEFAULT_INITIAL_SIZE} from "../constants"

const setupBBCodeRoot = (root: HTMLSpanElement, options: StaffCodeOptions = {}): void => {
    const {
        ui: {
            inline = false,
            interactive = false,
        } = {},
        initial: {
            codes: initialCodes = DEFAULT_INITIAL_CODES,
            size: initialSize = DEFAULT_INITIAL_SIZE,
            line: initialLine = DEFAULT_INITIAL_LINE,
        } = {},
        font = DEFAULT_FONT,
        callback,
    } = options

    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const input: HTMLTextAreaElement = root.querySelector(".input") as HTMLTextAreaElement
    const display = buildDisplay({font, inline, initialLine, initialSize})

    setupInput(input, root, {interactive, initialCodes, callback})

    root.appendChild(display)

    transferInputToDisplay(root, {callback})
}

export {
    setupBBCodeRoot,
}
