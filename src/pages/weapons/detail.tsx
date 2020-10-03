import React, { useEffect, useState } from 'react'
import firebase, { firebaseStore } from '../../interfaces/firebase'
import {Weapon} from "../../interfaces/weapon";

function WeaponsDetail(props: any) {
    const [loading, setLoading] = useState(true);
    const [id] = useState(props.match.params.id)
    const [weapon, setWeapon] = useState<firebase.firestore.DocumentData>([]);

    useEffect(() => {
        const fetchWeapon = async() => {
            if (id) {
                const res = await firebaseStore.collection("weapons").doc(id.toString()).get()
                if (!res) return;
                const weapon = res.data() as Weapon
                setWeapon(weapon);
            }
        }
      
        fetchWeapon();
        setLoading(false);
    }, [id])

    return (
        <div>
            <h1>Weapons index!!</h1>

            {
                loading ? (<div>Loading...</div>) : (
                    <div>
                        <ul>
                            <li>id: {weapon.id}</li>
                            <li>name: {weapon.name}</li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default WeaponsDetail
