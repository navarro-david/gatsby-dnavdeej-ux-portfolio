import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


// export const Diamond = () => <StaticImage src="../../static/assets/logos/Cru.svg" alt="A nice diamond shape" layout="fixed" width={200} placeholder='tracedSVG' />
export const Diamond = () => <StaticImage src="../../static/assets/shapes/Shape1.png" alt="A nice diamond shape" layout="fixed" width={200} placeholder='tracedSVG' />
export const Ring = () => <StaticImage src="../../static/assets/shapes/Shape2.png" alt="A nice ring shape" layout="fixed" width={200} placeholder='tracedSVG' />
export const Cube = () => <StaticImage src="../../static/assets/shapes/Shape3.png" alt="A nice cube shape" layout="fixed" width={200} placeholder='tracedSVG' />
export const Polygon = () => <StaticImage src="../../static/assets/shapes/Shape4.png" alt="A nice polygon shape" layout="fixed" width={200} placeholder='tracedSVG' />
export const Sphere = () => <StaticImage src="../../static/assets/shapes/Shape5.png" alt="A nice sphere shape" layout="fixed" width={200} placeholder='tracedSVG' />

export const AnimatedDiamond = () => {

  // const props = useSpring(() => ({
  //   from: {
  // transform:
  //   'scale(2) rotateX(90deg)',
  //   },
  //   to: {
  // transform:
  //   'scale(2) rotateX(-90deg)',
  //   }
  // }))

  // const props = useSpring({
  //   transform:
  //     'scale(2) rotateX(-90deg)', 
  //     opacity: 1,

  //     from: {
  // transform:
  //   'scale(2) rotateX(90deg)',
  //       opacity: 1
  //     }
  // })

  const [props, set] = useSpring({
    from: {
      transform:
        'rotate(90deg)',
      opacity: 1,
      width: 'fit-content'
    },
    to:
    {
      transform:
        'rotate(-90deg)',
      opacity: 1,
    },
    config: { tension: 280, friction: 10 },
    onStart: () => console.log('start'),
    onRest: () => console.log('stopped')

  })

  return (
    <animated.div
      style={props}

    >
      <StaticImage src="../../static/assets/shapes/Shape1.png" alt="A nice shape" layout="fixed" width={200} placeholder='tracedSVG' />
    </animated.div>
  )
}
