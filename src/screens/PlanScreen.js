import React, { useEffect, useState } from 'react';
import './PlanScreen.css';

const PlanScreen = () => {

    const [products, setProducts] = useState([
        {
            active: true,
            description: '4K + HDR',
            images: [],
            name: 'Premium',
            role: null
        },
        {
            active: true,
            description: '4K + HDR',
            images: [],
            name: 'Premium',
            role: null
        },
        {
            active: true,
            description: '2k',
            images: [],
            name: 'Premium',
            role: 'Premium'
        }
    ]);

    useEffect(() => {
    }, []);

    return (
        <div className="plansScreen">
            {
                products.map((product, key) => {
                    const isCurrentPackage = product.name?.toLowerCase() === product.role?.toLowerCase();

                    console.log(isCurrentPackage);

                    return <div
                        key={key}
                        className={`${isCurrentPackage && "plansScreen__plan--disabled"
                            }
                    plansScreen__plan 
                    `}>
                        <div className="plansScreen__info">
                            <h5>{product.name}</h5>
                            <h6>{product.description}</h6>
                        </div>

                        <button >
                            {isCurrentPackage ? 'Currrent Package' : 'Subscribe'}
                        </button>
                    </div>
                })
            }
        </div>
    )
};

export default PlanScreen
