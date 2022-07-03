import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

function Home({nameval}) {
    const [textVal , setTextVal]=useState(nameval);
    useEffect(()=>{
     setTextVal(nameval)
    })
  return (
    <View>
        <Text onPress={()=>setTextVal('yipped changed')}>{textVal}</Text>
    </View>
  )
}

export default Home