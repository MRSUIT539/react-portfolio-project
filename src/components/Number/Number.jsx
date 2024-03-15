import React from 'react'
import styles from './Number.module.css'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

function Number() {
  return (
    <div className={styles.number_con}>
        <div className={styles.number_items}>
            <h1>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({isVisible}) => 
                        <div>
                            {isVisible ?  <CountUp start={0} end={100} duration={5}/> : null}+
                        </div>
                    }
                </VisibilitySensor>
            </h1>
            <p>Project Delivered</p>
        </div>
        <div className={styles.number_items}>
            <h1>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({isVisible}) => 
                        <div>
                            {isVisible ?  <CountUp start={0} end={50} duration={5}/> : null}+
                        </div>
                    }
                </VisibilitySensor>
            </h1>
            <p>Compaines Helped</p>
        </div>
        <div className={styles.number_items}>
            <h1>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({isVisible}) => 
                        <div>
                            {isVisible ?  <CountUp start={0} end={50} duration={5}/> : null}+
                        </div>
                    }
                </VisibilitySensor>
            </h1>
            <p>Years of expreience</p>
        </div>
        <div className={styles.number_items}>
            <h1>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({isVisible}) => 
                        <div>
                            {isVisible ?  <CountUp start={0} end={200} duration={5}/> : null}+
                        </div>
                    }
                </VisibilitySensor>
            </h1>
            <p>Happy Clients</p>
        </div>
    </div>
  )
}

export default Number
