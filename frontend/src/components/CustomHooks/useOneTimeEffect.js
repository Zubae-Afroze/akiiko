import { useEffect, useRef } from "react"

export default function useOneTimeEffect(callback, dependencies) {
  const renderTimesRef = useRef(1)

  useEffect(() => {

    if (renderTimesRef.current === 1) {
      renderTimesRef.current = 2
      return
    } else if(renderTimesRef.current === 2){
        renderTimesRef.current = 3
        return callback()
    } else{
        return
    }
  }, [dependencies,callback])
}