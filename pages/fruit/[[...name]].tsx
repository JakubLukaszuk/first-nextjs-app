import React from 'react';
import {useRouter} from 'next/router';

const Fruit = () => {
    const router = useRouter();
    console.log(router.query);
    
    return (
        <div>
            Hello Fruit
        </div>
    )
}

export default Fruit
