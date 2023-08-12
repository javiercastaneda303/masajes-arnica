import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
// import { styled } from "@mui/material";

// const Responsive = styled('div')( () = => ({
// }))
export default function ShowLetersWidth() {
  const [w, setW] = useState(window.innerWidth)

  const [show_xs, setShow_xs] = useState('hidden')
  const [show_sm, setShow_sm] = useState('hidden')
  const [show_md, setShow_md] = useState('hidden')
  const [show_lg, setShow_lg] = useState('hidden')
  const [show_xl, setShow_xl] = useState('hidden')
  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth)

      window.innerWidth < 600 ? setShow_xs('visible') : setShow_xs('hidden')
      window.innerWidth >= 600 && window.innerWidth < 900 ? setShow_sm('visible') : setShow_sm('hidden')
      window.innerWidth >= 900 && window.innerWidth < 1200 ? setShow_md('visible') : setShow_md('hidden')
      window.innerWidth >= 1200 && window.innerWidth < 1536 ? setShow_lg('visible') : setShow_lg('hidden')
      window.innerWidth >= 1536 ? setShow_xl('visible') : setShow_xl('hidden')
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <Typography variant="h6" color="initial" sx={{ visibility: show_xs }}>
        {true && 'xs'}
      </Typography>
      <Typography variant="h6" color="initial" sx={{ visibility: show_sm }}>
        sm
      </Typography>
      <Typography variant="h6" color="initial" sx={{ visibility: show_md }}>
        md
      </Typography>
      <Typography variant="h6" color="initial" sx={{ visibility: show_lg }}>
        lg
      </Typography>
      <Typography variant="h6" color="initial" sx={{ visibility: show_xl }}>
        xl
      </Typography>
    </>
  )
}

// xs > 0px
// sm >= 600px
// md >= 900 px
// lg >= 1200 px
// xl >= 1536 px
