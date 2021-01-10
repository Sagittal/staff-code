import {Section} from "../../../../../bin"
import {components} from "../globals"
import {buildSectionTable} from "./table"
import {buildSectionTitle} from "./title"
import {buildTocItem} from "./tocItem"

const appendSection = ([sectionName, sectionData]: Section): void => {
    const {reference, toc} = components

    const sectionTitle = buildSectionTitle(sectionName)
    reference.appendChild(sectionTitle)

    const table = buildSectionTable(sectionData)
    reference.appendChild(table)

    const tocItem = buildTocItem(sectionName)
    toc.appendChild(tocItem)
}

export {
    appendSection,
}