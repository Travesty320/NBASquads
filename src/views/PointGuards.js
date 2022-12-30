import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import { useUserAuth } from "../UserAuthContext";
// import { getDatabase, ref, set } from "firebase/database";


function ViewPG() {
    const { user } = useUserAuth();
    const [pointguards, setPG] = useState([]);
    const PGCollectionRef = collection(db, "pointguards")
    useEffect(() => {
        const getPG = async () => {
            const data = await getDocs(PGCollectionRef);
            console.log(data)
            setPG(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }
            )));
        };
        getPG();
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
                    pointguards.map((pointguards) => {
                        return (
                            <div className="card" style={{ width: '18rem' }}>
                                <div key={pointguards.id}>
                                    <img src={pointguards.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-text">{pointguards.name}</h3>
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
    export default ViewPG;