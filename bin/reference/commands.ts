import {Id, Name} from "@sagittal/general"
import {NOT_SMUFL} from "./parentheticals"
import {Explanation, ReferenceRow, Section} from "./types"

// Temporary link, until a public post is ready.
const INTRODUCTION_TO_STAFF_CODE_LINK = "https://forum.sagittal.org/viewtopic.php?p=3192"

const COMMANDS_SECTION = [
    "commands" as Id<Section>,
    "StaffCode commands" as Name<Section>,
    NOT_SMUFL,
    INTRODUCTION_TO_STAFF_CODE_LINK,
    `"Auto stem direction" means stem down for middle line and above, otherwise stem up.` as Explanation,
    [
        ["", "ston", "<b>st</b>aff <b>on</b>"],
        ["", "stof", "<b>st</b>aff <b>of</b>f (default)"],
        ["", "nt2", "<b>n</b>o<b>t</b>e 1/<b>2</b> (with auto stem direction)"],
        ["", "nt", "<b>n</b>o<b>t</b>e 1/<b>4</b> (with auto stem direction)"],
        ["", "nt8", "<b>n</b>o<b>t</b>e 1/<b>8</b> (with auto stem direction)"],
        ["", "nt16", "<b>n</b>o<b>t</b>e 1/<b>16</b> (with auto stem direction)"],
        ["", "nt32", "<b>n</b>o<b>t</b>e 1/<b>32</b> (with auto stem direction)"],
        ["", "nt64", "<b>n</b>o<b>t</b>e 1/<b>64</b> (with auto stem direction)"],
        ["", "nt128", "<b>n</b>o<b>t</b>e 1/<b>128</b> (with auto stem direction)"],
        ["", "nt256", "<b>n</b>o<b>t</b>e 1/<b>256</b> (with auto stem direction)"],
        ["", "nt512", "<b>n</b>o<b>t</b>e 1/<b>512</b> (with auto stem direction)"],
        ["", "nt1024", "<b>n</b>o<b>t</b>e 1/<b>1024</b> (with auto stem direction)"],
        ["", "sp0", "set <b>sp</b>acing <b>0</b> octals"],
        ["", "sp1", "set <b>sp</b>acing <b>1</b> octal"],
        ["", "sp2", "set <b>sp</b>acing <b>2</b> octals (default)"],
        ["", "sp3", "set <b>sp</b>acing <b>3</b> octals"],
        ["", "sp4", "set <b>sp</b>acing <b>4</b> octals"],
        ["", "sp5", "set <b>sp</b>acing <b>5</b> octals"],
        ["", "sp6", "set <b>sp</b>acing <b>5</b> octals"],
        ["", "sp7", "set <b>sp</b>acing <b>7</b> octals"],
        ["", ";", "advance (by max symbol width plus spacing)"],
        ["", "en;", "<b>en</b>d-of-staff advance"],
        ["", "br;", "line <b>br</b>eak advance"],
        ["", "1;", "<b>1</b> octal advance"],
        ["", "2;", "<b>2</b> octals advance"],
        ["", "3;", "<b>3</b> octals advance"],
        ["", "4;", "<b>4</b> octals advance"],
        ["", "5;", "<b>5</b> octals advance"],
        ["", "6;", "<b>6</b> octals advance"],
        ["", "7;", "<b>7</b> octals advance"],
        ["", "8;", "<b>8</b> octals advance"],
        ["", "9;", "<b>9</b> octals advance"],
        ["", "10;", "<b>10</b> octals advance"],
        ["", "11;", "<b>11</b> octals advance"],
        ["", "12;", "<b>12</b> octals advance"],
        ["", "13;", "<b>13</b> octals advance"],
        ["", "14;", "<b>14</b> octals advance"],
        ["", "15;", "<b>15</b> octals advance"],
        ["", "16;", "<b>16</b> octals advance"],
        ["", "17;", "<b>17</b> octals advance"],
        ["", "18;", "<b>18</b> octals advance"],
        ["", "19;", "<b>19</b> octals advance"],
        ["", "20;", "<b>20</b> octals advance"],
        ["", "21;", "<b>21</b> octals advance"],
        ["", "22;", "<b>22</b> octals advance"],
        ["", "23;", "<b>23</b> octals advance"],
        ["", "24;", "<b>24</b> octals advance"],
    ] as ReferenceRow[],
] as Section

export {
    COMMANDS_SECTION,
}
