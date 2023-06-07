// import React, { memo, useState } from 'react';

// const Boi = () => {

//   console.log("I am Boi");

//   return (
//     <div>Boi</div>  
//   )
// }

// export default memo(Boi);

/* When we click on the button the show state variable gets
updated and component App gets rerendered which leads to creation of fetchData() function again.

IF the function gets created again then In Boi Component 
we have added fetchData method in the dependency array 
of the useEffect() Hook  so setNum(fetchData(5)) gets called and we get the different value 
so upon clicking the button in App Component the value of num in the Boi Component gets changed

In order to resolve this we use useCallback() Hook
*/

import React, { useEffect, useState, memo } from 'react';

const Boi = ({fetchData}) => {

  console.log("I am Boi");
  const [num, setNum] = useState("");

  useEffect(() => {
    setNum(fetchData(5));
  }, [fetchData]);

  return (
    <div>
      Boi
      <p>{num}</p>
    </div>  
  )
}

export default memo(Boi);