import React from 'react'

type Weapon = {
    id: number,
    name: string
}

function WeaponsIndex() {
    const weapons: Weapon[] = [{id: 1, name: "わかばシューター"}]

    return (
        <div>
            <h1>Weapons index!!</h1>

            <div>
                {weapons.map((weapon) => (
                    <li key={weapon.id}>{weapon.name}</li>
                ))}
            </div>
        </div>
    )
}

export default WeaponsIndex
