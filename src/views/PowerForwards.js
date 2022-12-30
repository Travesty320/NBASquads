import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import { useUserAuth } from "../UserAuthContext";
// import { getDatabase, ref, set } from "firebase/database";


function ViewPF() {
    const { user } = useUserAuth();
    const [powerforwards, setPF] = useState([]);
    const PFCollectionRef = collection(db, "powerforwards")
    useEffect(() => {
        const getPF = async () => {
            const data = await getDocs(PFCollectionRef);
            console.log(data)
            setPF(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }
            )));
        };
        getPF();
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
                    powerforwards.map((powerforwards) => {
                        return (
                            <div className="card" style={{ width: '18rem' }}>
                                <div key={powerforwards.id}>
                                    <img src={powerforwards.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-text">{powerforwards.name}</h3>
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
    export default ViewPF;