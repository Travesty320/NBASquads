import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import { useUserAuth } from "../UserAuthContext";
// import { getDatabase, ref, set } from "firebase/database";


function ViewSG() {
    const { user } = useUserAuth();
    const [shootingguards, setSG] = useState([]);
    const SGCollectionRef = collection(db, "shootingguards")
    useEffect(() => {
        const getSG = async () => {
            const data = await getDocs(SGCollectionRef);
            console.log(data)
            setSG(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }
            )));
        };
        getSG();
    }, []);
    
    // const addToDB = (cart) => {
    //     const db = getDatabase();
    //     set(ref(db, `/${user.uid}/cart`), cart)
    //     console.log(cart)
    // };

    // const addToCart = (item) => {
    //     const newCart = { ...cart };
    //     if (item.id in newCart) {
    //         newCart[item.id].qty++;
    //     }
    //     else {
    //         newCart[item.id] = item
    //         newCart[item.id].qty = 1
    //     }
    //     newCart.size++

    //     setCart(newCart)
    //     if (user.uid) {
    //         addToDB(newCart)
    //     }
    // };
   


        return (

            <div className='row'>
                {
                    shootingguards.map((shootingguards) => {
                        return (
                            <div className="card" style={{ width: '18rem' }}>
                                <div key={shootingguards.id}>
                                    <img src={shootingguards.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-text">{shootingguards.name}</h3>
                                    </div>
                                    <div className="card-body">
                                        <button className="card-link btn-warning">Squad Up</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }</div>
        )
    }
    export default ViewSG;