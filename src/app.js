export function controlPetals(hePetals, shePetals) {
    return (hePetals % 2 === 0 && shePetals % 2 === 0) || (hePetals % 2 !== 0 && shePetals % 2 !== 0) ? false : true
}
