import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase, { firebaseStore } from '../../interfaces/firebase'

type Weapon = {
    id: number,
    name: string
}

function WeaponsIndex() {

    const [loading, setLoading] = useState(true);
    const [weapons, setWeapons] = useState<firebase.firestore.DocumentData[]>([]);
    
    useEffect(() => {
        const searchWeapons = async() => {
            const res = await firebaseStore.collection('weapons').get();
            if (res.empty) return [];
            const weaponsList: firebase.firestore.DocumentData[] = [];
            res.forEach(doc => {
                weaponsList.push(doc.data());
            })
            setWeapons(weaponsList);
        }
      
        searchWeapons();
        setLoading(false);
    }, [])

    return (
        <div>
            <h1>Weapons index!!</h1>

            {
                loading ? (<div>Loading...</div>) : (
                    <div>
                        {weapons.map((weapon) => (
                            <li key={weapon.id}>
                                <Link to={`/weapons/${weapon.id}`}>{weapon.name}</Link>
                            </li>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default WeaponsIndex
