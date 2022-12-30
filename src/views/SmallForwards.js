import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import { useUserAuth } from "../UserAuthContext";
// import { getDatabase, ref, set } from "firebase/database";


function ViewSF() {
    const { user } = useUserAuth();
    const [smallforwards, setSF] = useState([]);
    const SFCollectionRef = collection(db, "smallforwards")
    useEffect(() => {
        const getSF = async () => {
            const data = await getDocs(SFCollectionRef);
            console.log(data)
            setSF(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }
            )));
        };
        getSF();
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
                    smallforwards.map((smallforwards) => {
                        return (
                            <div className="card" style={{ width: '18rem' }}>
                                <div key={smallforwards.id}>
                                    <img src={smallforwards.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-text">{smallforwards.name}</h3>
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
    export default ViewSF;