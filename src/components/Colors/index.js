import { useState } from "react";

export default function Colors() {
    const colors = {
        "blue": "",
        "indigo": "",
        "purple": "",
        "pink": "",
        "red": "",
        "orange": "",
        "yellow": "",
        "green": "",
        "teal": "",
        "cyan": "",
    };

    const values = Object.keys(colors)
    const randomcolor = values[Math.floor(Math.random() * values.length)]

    return { values, randomcolor };
}
