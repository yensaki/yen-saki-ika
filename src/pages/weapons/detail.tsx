import React, { useEffect, useState } from 'react'
import firebase, { firebaseStore } from '../../interfaces/firebase'
import {Weapon} from "../../interfaces/weapon";
import {SubWeapon} from "../../interfaces/sub_weapon";

function WeaponsDetail(props: any) {
    const [loading, setLoading] = useState(true);
    const [id] = useState(props.match.params.id)
    const [weapon, setWeapon] = useState<firebase.firestore.DocumentData>([]);

    useEffect(() => {
        const fetchWeapon = async() => {
            if (id) {
                const res = await firebaseStore.collection("weapons").doc(id.toString()).get()
                if (!res) return;
                let weapon = res.data()
                if (!weapon) { return }

                const sub_res = await weapon.sub_weapon.get()
                const sub_weapon =  sub_res.data() as SubWeapon
                const result = {
                    id: weapon.id,
                    name: weapon.name,
                    sub_weapon: sub_weapon
                } as Weapon

                setWeapon(result);
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
                            {weapon.sub_weapon ? (
                                <li>サブウェポン: {weapon.sub_weapon.name}</li>
                            ) : ""}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default WeaponsDetail
