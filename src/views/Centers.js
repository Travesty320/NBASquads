import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import { useUserAuth } from "../UserAuthContext";
// import { getDatabase, ref, set } from "firebase/database";


function ViewC() {
    const { user } = useUserAuth();
    const [centers, setC] = useState([]);
    const CCollectionRef = collection(db, "centers")
    useEffect(() => {
        const getC = async () => {
            const data = await getDocs(CCollectionRef);
            console.log(data)
            setC(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }
            )));
        };
        getC();
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
                    centers.map((centers) => {
                        return (
                            <div className="card" style={{ width: '18rem' }}>
                                <div key={centers.id}>
                                    <img src={centers.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-text">{centers.name}</h3>
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
    export default ViewC;